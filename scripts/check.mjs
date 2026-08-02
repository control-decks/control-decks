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
  "endroit-context-pick-site",
  "endroit-context-any-site",
  "refresh-context",
  "white-card",
  "clear-white-card",
]);
const reservedWorkplaceProjections = new Set([
  "enter-the-home",
  "enter-the-{route}-room",
  "work-on-{route}",
  "call-the-researcher",
  "work-as-an-engineer",
  "use-research",
  "retain-this",
  "accept-this",
  "deliver-this",
  "deliver-this-to-{route}",
  "archive-this",
]);

const gameIds = (await readdir(join(root, "games"), { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map(({ name }) => name)
  .sort();
if (gameIds.join(",") !== "conversation,endroit-home,session") {
  fail(`expected 3 Games, found ${gameIds.join(", ")}`);
}

const seenDecks = new Set();
const seenCards = new Set();
const projected = new Set();
const projectedNames = new Set();

for (const gameId of gameIds) {
  const game = await readJson(`games/${gameId}/game.json`);
  if (game.game !== gameId || game.version !== "0.1.0") {
    fail(`invalid Game identity: ${gameId}`);
  }
  for (const deckId of game.decks) {
    if (seenDecks.has(deckId)) fail(`Deck appears in multiple Games: ${deckId}`);
    seenDecks.add(deckId);

    const manifest = await readJson(`decks/${deckId}/hacp.deck.json`);
    const equipment = await readJson(`decks/${deckId}/equipment.json`);
    const plugin = await readJson(`decks/${deckId}/.codex-plugin/plugin.json`);
    const claude = await readJson(`decks/${deckId}/.claude-plugin/plugin.json`);

    if (manifest.hacp !== "0.4" || manifest.deck.id !== deckId || manifest.deck.version !== "0.1.0") {
      fail(`invalid HACP manifest: ${deckId}`);
    }
    if (plugin.name !== deckId || claude.name !== deckId || plugin.version !== "0.1.0") {
      fail(`invalid plugin identity: ${deckId}`);
    }
    if (
      equipment.$schema !== "https://endroit.org/schema/v7/equipment.json"
      || equipment.name !== `control-decks/${deckId}`
      || equipment.version !== "0.1.0"
    ) {
      fail(`invalid Equipment identity: ${deckId}`);
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

    const equipmentCards = new Set(equipment.capabilities.map(({ id }) => id));
    if (equipmentCards.size !== manifest.cards.length || [...commands].some((id) => !equipmentCards.has(id))) {
      fail(`Equipment and HACP manifest diverge: ${deckId}`);
    }
    const accessors = [...equipment.skills, ...equipment.commands];
    if (equipment.skills.length) {
      fail(`HACP Cards must remain user-only Endroit Commands: ${deckId}`);
    }
    if (accessors.some(({ capability }) => !equipmentCards.has(capability))) {
      fail(`Equipment accessor references an unknown Capability: ${deckId}`);
    }
    if (accessors.some(({ forEach }) => forEach && !["room", "meeting", "site"].includes(forEach))) {
      fail(`Equipment accessor has an invalid forEach value: ${deckId}`);
    }
    for (const accessor of accessors) {
      const name = accessor.projectedName ?? `${equipment.prefix}-${accessor.id}`;
      const normalized = name.replaceAll("{route}", "route");
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(normalized) || /[{}]/.test(normalized)) {
        fail(`invalid projected command name: ${deckId}/${accessor.id}`);
      }
      if (accessor.forEach && !name.includes("{route}")) {
        fail(`routed command must project {route}: ${deckId}/${accessor.id}`);
      }
      if (accessor.projectedName) {
        if (projectedNames.has(name)) fail(`duplicate projected command name: ${name}`);
        projectedNames.add(name);
      }
      if (reservedWorkplaceProjections.has(name)) {
        fail(`first-party Endroit workplace command must not be projected by Control Decks: ${name}`);
      }
      if (["endroit-context", "endroit-routing"].includes(deckId) && /(^|-)(pick|refresh)(-|$)/.test(name)) {
        fail(`technical workplace command remains public: ${name}`);
      }
    }
  }
}

if (seenDecks.size !== 11) fail(`expected 11 Decks, found ${seenDecks.size}`);
if (seenCards.size !== 54) fail(`expected 54 Cards, found ${seenCards.size}`);
if (projected.size !== expectedWave.size || [...expectedWave].some((id) => !projected.has(id))) {
  fail(`Wave 1 mismatch: ${[...projected].sort().join(", ")}`);
}

const codexMarketplace = await readJson(".agents/plugins/marketplace.json");
if (codexMarketplace.plugins.length !== 11) {
  fail("the Codex marketplace must expose exactly 11 Deck plugins");
}

const readme = await readFile(join(root, "README.md"), "utf8");
const normalizedReadme = readme.replace(/\s+/g, " ");
for (const required of [
  "unreleased and ahead of tagged `v0.1.0`",
  "3 Games · 11 Decks · 54 Cards · 21 Wave 1 provider skills",
  "https://open-workplace.org/PROTOCOL.md",
  "The Session and Conversation Games depend on HACP, not Open Workplace.",
]) {
  if (!normalizedReadme.includes(required)) fail(`README public-surface claim missing: ${required}`);
}
for (const deckId of seenDecks) {
  if (!readme.includes(`](decks/${deckId})`)) fail(`README Deck index missing: ${deckId}`);
}

console.log(`valid: ${gameIds.length} Games, ${seenDecks.size} Decks, ${seenCards.size} Cards, ${projected.size} Wave 1 skills`);
