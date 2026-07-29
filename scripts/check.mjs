import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const readJson = async (path) => JSON.parse(await readFile(join(root, path), "utf8"));
const exists = async (path) => access(join(root, path)).then(() => true, () => false);
const fail = (message) => {
  throw new Error(message);
};

const expectedWave = new Set([
  "main-session",
  "clear-main-session",
  "search-session",
  "open-task",
  "handoff",
  "rename-session",
  "spawn-agents",
  "generate-images",
  "homekeeper",
  "clear-homekeeper",
  "further",
  "zoom-in",
  "zoom-out",
  "show-snippets",
  "show-use-cases",
  "show-mindmap",
  "hairness-context-pick-target",
  "hairness-context-any-target",
  "refresh-context",
  "white-card",
  "clear-white-card",
]);

const gameIds = (await readdir(join(root, "games"), { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map(({ name }) => name)
  .sort();
if (gameIds.join(",") !== "conversation,hairness-home,session") {
  fail(`expected 3 Games, found ${gameIds.join(", ")}`);
}

const seenDecks = new Set();
const seenCards = new Set();
const projected = new Set();

for (const gameId of gameIds) {
  const game = await readJson(`games/${gameId}/game.json`);
  if (game.game !== gameId || game.version !== "0.1.0") {
    fail(`invalid Game identity: ${gameId}`);
  }
  for (const deckId of game.decks) {
    if (seenDecks.has(deckId)) fail(`Deck appears in multiple Games: ${deckId}`);
    seenDecks.add(deckId);

    const manifest = await readJson(`decks/${deckId}/hacp.deck.json`);
    const asset = await readJson(`decks/${deckId}/asset.json`);
    const plugin = await readJson(`decks/${deckId}/.codex-plugin/plugin.json`);
    const claude = await readJson(`decks/${deckId}/.claude-plugin/plugin.json`);

    if (manifest.hacp !== "0.4" || manifest.deck.id !== deckId || manifest.deck.version !== "0.1.0") {
      fail(`invalid HACP manifest: ${deckId}`);
    }
    if (plugin.name !== deckId || claude.name !== deckId || plugin.version !== "0.1.0") {
      fail(`invalid plugin identity: ${deckId}`);
    }
    if (asset.name !== `control-decks/${deckId}` || asset.version !== "0.1.0") {
      fail(`invalid Asset identity: ${deckId}`);
    }

    const commands = new Set();
    for (const card of manifest.cards) {
      if (seenCards.has(card.command)) fail(`Card command is not globally unique: ${card.command}`);
      if (commands.has(card.command)) fail(`duplicate Card in ${deckId}: ${card.command}`);
      if (card.id !== `${deckId}/${card.command}`) fail(`invalid Card identity: ${card.id}`);
      if (!Array.isArray(card.accepts) || !card.produces || !card.duration || !card.relations) {
        fail(`incomplete Card contract: ${card.id}`);
      }
      commands.add(card.command);
      seenCards.add(card.command);

      const capabilityPath = `decks/${deckId}/capabilities/${card.command}.md`;
      const capability = await readFile(join(root, capabilityPath), "utf8");
      if (!capability.includes(`deck: ${deckId}`) || !capability.includes(`game: ${gameId}`)) {
        fail(`Capability routing mismatch: ${card.id}`);
      }
      const isWave = capability.includes("wave: 1");
      const skillPath = `decks/${deckId}/skills/${card.command}/SKILL.md`;
      if (isWave) {
        projected.add(card.command);
        if (!(await exists(skillPath))) fail(`missing Wave 1 skill: ${card.id}`);
        const skill = await readFile(join(root, skillPath), "utf8");
        const agent = await readFile(join(root, `decks/${deckId}/skills/${card.command}/agents/openai.yaml`), "utf8");
        if (!agent.includes("allow_implicit_invocation: false") || skill.includes("TODO")) {
          fail(`invalid explicit skill: ${card.id}`);
        }
      } else if (await exists(skillPath)) {
        fail(`non-Wave Card is provider-exposed: ${card.id}`);
      }
    }

    const assetCards = new Set(asset.capabilities.map(({ id }) => id));
    if (assetCards.size !== manifest.cards.length || [...commands].some((id) => !assetCards.has(id))) {
      fail(`Asset and HACP manifest diverge: ${deckId}`);
    }
    const accessors = [...asset.skills, ...asset.commands];
    if (asset.skills.length) {
      fail(`HACP Cards must remain user-only Hairness Commands: ${deckId}`);
    }
    if (accessors.some(({ capability }) => !assetCards.has(capability))) {
      fail(`Asset accessor references an unknown Capability: ${deckId}`);
    }
    if (accessors.some(({ forEach }) => forEach && !["workspace", "workstream", "target"].includes(forEach))) {
      fail(`Asset accessor has an invalid forEach value: ${deckId}`);
    }
  }
}

if (seenDecks.size !== 11) fail(`expected 11 Decks, found ${seenDecks.size}`);
if (seenCards.size !== 48) fail(`expected 48 Cards, found ${seenCards.size}`);
if (projected.size !== expectedWave.size || [...expectedWave].some((id) => !projected.has(id))) {
  fail(`Wave 1 mismatch: ${[...projected].sort().join(", ")}`);
}

const codexMarketplace = await readJson(".agents/plugins/marketplace.json");
if (codexMarketplace.plugins.length !== 11) {
  fail("the Codex marketplace must expose exactly 11 Deck plugins");
}

console.log(`valid: ${gameIds.length} Games, ${seenDecks.size} Decks, ${seenCards.size} Cards, ${projected.size} Wave 1 skills`);
