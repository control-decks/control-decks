import { access, cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const usage = "usage: node scripts/install.mjs card <card>|deck <deck>|game <game>|all --provider codex|claude --to <dir>";
const args = process.argv.slice(2);
const mode = args.shift();
const identity = mode === "all" ? null : args.shift();
const option = (name) => {
  const index = args.indexOf(name);
  return index === -1 ? null : args[index + 1];
};
const provider = option("--provider");
const destination = option("--to");

if (!["card", "deck", "game", "all"].includes(mode) || (mode !== "all" && !identity) || !["codex", "claude"].includes(provider) || !destination) {
  throw new Error(usage);
}

const readJson = async (path) => JSON.parse(await readFile(join(root, path), "utf8"));
const deckIds = (await readdir(join(root, "decks"), { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map(({ name }) => name);
const manifests = new Map(
  await Promise.all(deckIds.map(async (deckId) => [deckId, await readJson(`decks/${deckId}/hacp.deck.json`)])),
);
const exists = async (path) => access(path).then(() => true, () => false);

let selection;
let selectedCard = null;
if (mode === "all") {
  selection = deckIds;
} else if (mode === "deck") {
  selection = manifests.has(identity) ? [identity] : [];
} else if (mode === "game") {
  const gamePath = `games/${identity}/game.json`;
  selection = await readFile(join(root, gamePath), "utf8")
    .then((value) => JSON.parse(value).decks)
    .catch(() => []);
} else {
  const match = [...manifests].find(([, manifest]) =>
    manifest.cards.some(({ command }) => command === identity),
  );
  selection = match ? [match[0]] : [];
  selectedCard = identity;
}

if (!selection.length) throw new Error(`unknown ${mode}: ${identity}`);
if (selectedCard && !(await exists(join(root, "decks", selection[0], "skills", selectedCard, "SKILL.md")))) {
  throw new Error(`card is not provider-exposed in Wave 1: ${selectedCard}`);
}

const to = resolve(destination);
await mkdir(to, { recursive: true });

for (const deckId of selection) {
  const source = join(root, "decks", deckId);
  const target = join(to, deckId);
  await mkdir(target, { recursive: true });
  await cp(join(source, provider === "codex" ? ".codex-plugin" : ".claude-plugin"), join(target, provider === "codex" ? ".codex-plugin" : ".claude-plugin"), {
    recursive: true,
    force: false,
    errorOnExist: true,
  });
  await cp(join(source, "hacp.deck.json"), join(target, "hacp.deck.json"), { force: false, errorOnExist: true });

  const cards = selectedCard
    ? manifests.get(deckId).cards.filter(({ command }) => command === selectedCard)
    : manifests.get(deckId).cards;
  for (const { command } of cards) {
    const skill = join(source, "skills", command);
    await cp(skill, join(target, "skills", command), {
      recursive: true,
      force: false,
      errorOnExist: true,
    }).catch((error) => {
      if (error.code !== "ENOENT") throw error;
    });
    if (provider === "claude" && await exists(join(target, "skills", command, "SKILL.md"))) {
      const installedSkill = join(target, "skills", command, "SKILL.md");
      const contents = await readFile(installedSkill, "utf8");
      await writeFile(
        installedSkill,
        contents.replace(/\n---\n/, "\ndisable-model-invocation: true\n---\n"),
      );
    }
  }
}

console.log(`installed ${mode}${identity ? ` ${identity}` : ""} for ${provider} to ${to}`);
