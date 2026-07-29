---
id: delegate-task
title: "Delegate Task"
summary: "Delegate one bounded task to one capable agent and return its addressable result."
deck: session-orchestration
game: session
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-orchestration/delegation-result
wave: 0
provider: agent-delegation
---

# Delegate Task

**ID:** `session-orchestration/delegate-task`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `delegation`, `external-effect`\
**Default Binding:** current-delegable-task\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/delegable-object`, `hacp/user-authorized-scope`\
**Produces:** `session-orchestration/delegation-result`\
**Duration:** `once`

**Effect:** Delegate one bounded task to one capable agent and return its addressable result.

**Limits:** Do not delegate an ambiguous or inseparable task and never expand authority.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **DELEGATE-TASK**` when used alone. Append
`→ 🃏 **DELEGATE-TASK**` when another Card precedes it.
