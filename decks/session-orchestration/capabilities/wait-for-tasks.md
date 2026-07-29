---
id: wait-for-tasks
title: "Wait For Tasks"
summary: "Wait for the bound tasks and return only changed, completed, or attention-needed state."
deck: session-orchestration
game: session
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-orchestration/wait-result
wave: 0
provider: agent-delegation
---

# Wait For Tasks

**ID:** `session-orchestration/wait-for-tasks`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `read-only`, `task-coordination`\
**Default Binding:** current-delegated-tasks\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/addressable-tasks`\
**Produces:** `session-orchestration/wait-result`\
**Duration:** `once`

**Effect:** Wait for the bound tasks and return only changed, completed, or attention-needed state.

**Limits:** Do not poll noisily, fabricate progress, or alter delegated tasks.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **WAIT-FOR-TASKS**` when used alone. Append
`→ 🃏 **WAIT-FOR-TASKS**` when another Card precedes it.
