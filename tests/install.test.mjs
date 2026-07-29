import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;

function install(...args) {
  const result = spawnSync(process.execPath, ["scripts/install.mjs", ...args], {
    cwd: root,
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr);
}

test("installs one Card without sibling skills", async () => {
  const to = await mkdtemp(join(tmpdir(), "control-decks-card-"));
  install("card", "zoom-in", "--provider", "codex", "--to", to);
  assert.deepEqual(await readdir(join(to, "conversation-focus", "skills")), ["zoom-in"]);
});

test("installs one Deck", async () => {
  const to = await mkdtemp(join(tmpdir(), "control-decks-deck-"));
  install("deck", "session-lifecycle", "--provider", "claude", "--to", to);
  assert.deepEqual(
    (await readdir(join(to, "session-lifecycle", "skills"))).sort(),
    ["handoff", "open-task", "rename-session"],
  );
  assert.match(
    await readFile(join(to, "session-lifecycle", "skills", "open-task", "SKILL.md"), "utf8"),
    /disable-model-invocation: true/,
  );
});

test("installs one Game as its Deck set", async () => {
  const to = await mkdtemp(join(tmpdir(), "control-decks-game-"));
  install("game", "conversation", "--provider", "codex", "--to", to);
  assert.deepEqual(
    (await readdir(to)).sort(),
    ["conversation-evidence", "conversation-extension", "conversation-focus", "conversation-view"],
  );
});
