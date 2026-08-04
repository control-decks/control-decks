# Control Decks

**Use AI. Keep agency.**

Play a card. Shape the agent's next move.

> **Surface:** `0.2.0` release candidate for HACP Draft 0.4
> **Current tree:** 3 Games · 11 Decks · 54 Cards · 21 Wave 1 provider skills
> **Catalogue release:** `0.2.0` · GitHub and local installation only
> **Owner and publisher:** Control Decks
> **Primary action:** [Explore the Decks](#decks)

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
| Endroit Home | Enter resolved Home context and operate within it. | 3 | 19 |
| **Total** |  | **11** | **54** |

## Decks

- Session: [`session-intents`](decks/session-intents),
  [`session-lifecycle`](decks/session-lifecycle),
  [`session-orchestration`](decks/session-orchestration), and
  [`session-hygiene`](decks/session-hygiene).
- Conversation: [`conversation-extension`](decks/conversation-extension),
  [`conversation-focus`](decks/conversation-focus),
  [`conversation-evidence`](decks/conversation-evidence), and
  [`conversation-view`](decks/conversation-view).
- Endroit Home: [`endroit-context`](decks/endroit-context),
  [`endroit-routing`](decks/endroit-routing), and
  [`endroit-operations`](decks/endroit-operations).

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

## Open Workplace and Endroit boundary

[Open Workplace Protocol, Working Draft
0.1](https://open-workplace.org/PROTOCOL.md) proposes the workplace nouns and
lifecycle transitions used by the Endroit Home Game. The Session and
Conversation Games depend on HACP, not Open Workplace. Endroit is the
Workplace-first application framework; its first-party `endroit/workplace`
Equipment resolves concrete workplace bindings and projects this activation
surface:

```text
enter-the-home
enter-the-<room>-room
work-on-<site>
call-the-researcher
work-as-an-engineer
use-research
retain-this
accept-this
deliver-this
deliver-this-to-<site>
archive-this
```

Control Decks keeps the corresponding Card and Capability contracts available
for explicit HACP composition, but does not project duplicate Endroit commands.
The existing delegation Card remains the mechanism behind `call`; no Role
registry or agent runtime is introduced here. HACP defines optional explicit
verbs and controls; Control Decks distributes concrete Cards; Endroit owns its
bindings, activation names, projections, and persisted effects.

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
Endroit Equipment expose Cards as Commands only, keeping the catalogue out of
the agent HUD until a human plays a Card. Workplace Cards whose activation
surface is first-party Endroit remain capabilities without duplicate Equipment
accessors.

## Develop

Node.js 22 or later is sufficient:

```bash
npm run verify
```

The checks enforce the catalogue counts, HACP identities, Wave 1 projection,
marketplaces, plugin manifests, and selective installation.

## Maturity

Control Decks 0.x is intentionally experimental. The tagged `v0.1.0` release
is the historical 48-Card baseline. The 54-Card catalogue is the `0.2.0`
release candidate; each Deck keeps its independent `0.1.0` plugin and
Equipment version until its own contract changes.
