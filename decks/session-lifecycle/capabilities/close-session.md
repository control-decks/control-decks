---
id: close-session
title: "Close Session"
summary: "Close or archive the current task after preserving the smallest resumable state."
deck: session-lifecycle
game: session
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-lifecycle/close-result
wave: 0
provider: thread-management
---

# Close Session

**ID:** `session-lifecycle/close-session`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `external-effect`, `task-management`\
**Default Binding:** current-task\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/resumable-object`\
**Produces:** `session-lifecycle/close-result`\
**Duration:** `once`

**Effect:** Close or archive the current task after preserving the smallest resumable state.

**Limits:** Do not close a task with unresolved required input; if unsupported, return blocked.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **CLOSE-SESSION**` when used alone. Append
`→ 🃏 **CLOSE-SESSION**` when another Card precedes it.
