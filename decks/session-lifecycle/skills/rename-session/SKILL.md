---
name: rename-session
description: "Rename the current task from its resolved owner, axis, objective, and emoji. Use only when the human explicitly invokes rename-session."
---

# Rename Session

**ID:** `session-lifecycle/rename-session`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `external-effect`, `task-management`, `metadata-mutation`\
**Default Binding:** current-task\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `session-lifecycle/rename-result`\
**Duration:** `once`

**Effect:** Rename the current task from its resolved owner, axis, objective, and emoji.

**Limits:** Use `<emoji> Owner(axis): objective`; never claim success when the host cannot rename the task.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **RENAME-SESSION**` when used alone. Append
`→ 🃏 **RENAME-SESSION**` when another Card precedes it.

