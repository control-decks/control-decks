---
id: spawn-agents
title: "Spawn Agents"
summary: "Spawn the requested count of agents on independent bounded slices of the current work."
deck: session-orchestration
game: session
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-orchestration/spawn-result
wave: 1
provider: agent-delegation
---

# Spawn Agents

**ID:** `session-orchestration/spawn-agents`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `delegation`, `external-effect`\
**Default Binding:** current-delegable-work\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/delegable-object`, `hacp/user-authorized-scope`\
**Produces:** `session-orchestration/spawn-result`\
**Duration:** `once`

**Effect:** Spawn the requested count of agents on independent bounded slices of the current work.

**Limits:** Require an explicit positive count, respect host concurrency, transfer authority and controls, and return blocked when delegation is unavailable.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SPAWN-AGENTS**` when used alone. Append
`→ 🃏 **SPAWN-AGENTS**` when another Card precedes it.
