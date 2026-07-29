---
id: archive-session
title: "Archive Session"
summary: "Archive the current task after its resumable state is preserved."
deck: session-hygiene
game: session
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-hygiene/archive-result
wave: 0
provider: thread-management
---

# Archive Session

**ID:** `session-hygiene/archive-session`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `external-effect`, `task-management`\
**Default Binding:** current-task\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/resumable-object`, `hacp/user-authorized-scope`\
**Produces:** `session-hygiene/archive-result`\
**Duration:** `once`

**Effect:** Archive the current task after its resumable state is preserved.

**Limits:** Require explicit authority for the concrete task and return blocked when archive support is unavailable.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ARCHIVE-SESSION**` when used alone. Append
`→ 🃏 **ARCHIVE-SESSION**` when another Card precedes it.
