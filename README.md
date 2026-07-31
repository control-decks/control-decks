# Control Decks

Human-invoked command cards for directing agent sessions and conversations.

Control Decks is the experimental catalogue for the
[Human-Agent Control Protocol](https://github.com/control-decks/human-agent-control-protocol).
It groups standalone Cards into installable Decks, then groups related Decks
into Games:

```text
Game → Deck → Card
```

HACP Draft 0.4 remains the protocol. This repository adds catalogue and
distribution conventions; `game.json` is deliberately repo-local.

## Games

| Game | Purpose | Decks | Cards |
| --- | --- | ---: | ---: |
| Session | Shape, open, route, and maintain agent sessions. | 4 | 19 |
| Conversation | Extend, focus, substantiate, and render thought. | 4 | 16 |
| Endroit Home | Select resolved Home context and operate within it. | 3 | 13 |
| **Total** |  | **11** | **48** |

Every Card has a provider-neutral Capability contract. Wave 1 projects 18
flagship Cards and 3 matching `clear` Cards as explicit Codex and Claude
skills. A Deck is the plugin and installation unit; there is no root resolver.

## Wave 1

- Session: `main-session`, `search-session`, `open-task`, `handoff`,
  `rename-session`, `spawn-agents`, `generate-images`, `homekeeper`
- Conversation: `further`, `zoom-in`, `zoom-out`, `show-snippets`,
  `show-use-cases`, `show-mindmap`
- Endroit Home: `endroit-context-pick-site`,
  `endroit-context-any-site`, `refresh-context`, `white-card`
- Clear: `clear-main-session`, `clear-homekeeper`, `clear-white-card`

Cards never pretend a host feature exists. A provider-specific Card returns a
stable `blocked` result when its required task, delegation, image, or Endroit
surface is unavailable.

## Install

Clone the repository, then select the smallest useful surface:

```bash
node scripts/install.mjs card zoom-in --provider codex --to ./installed
node scripts/install.mjs deck conversation-focus --provider codex --to ./installed
node scripts/install.mjs game conversation --provider claude --to ./installed
node scripts/install.mjs all --provider codex --to ./installed
```

The output contains one plugin folder per Deck. Install or link those folders
using the chosen provider's normal local plugin workflow. GitHub and local
installation are the only 0.1 distribution surfaces; no npm package is
published.

The Codex repository marketplace lives at `.agents/plugins/marketplace.json`.
Claude installs go through the selector so it can add the provider's explicit
human-invocation policy without weakening Codex plugin validation.

## Layout

```text
games/<game>/game.json
decks/<deck>/hacp.deck.json
decks/<deck>/equipment.json
decks/<deck>/capabilities/<card>.md
decks/<deck>/skills/<wave-1-card>/SKILL.md
decks/<deck>/.codex-plugin/plugin.json
decks/<deck>/.claude-plugin/plugin.json
```

`hacp.deck.json`, `equipment.json`, and Capability Markdown are the source
contracts. Plugin skills expose only Wave 1 and disable implicit invocation.
Endroit Equipment expose Cards as Commands only, keeping the catalogue out of the
agent HUD until a human plays a Card.

## Develop

Node.js 22 or later is sufficient:

```bash
npm run verify
```

The checks enforce the catalogue counts, HACP identities, Wave 1 projection,
marketplaces, plugin manifests, and selective installation.

## Maturity

Control Decks 0.x is intentionally experimental. All Decks use lockstep version
`0.1.0` while their boundaries are tested in daily use.
