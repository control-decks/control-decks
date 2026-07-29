---
id: update-session
title: "Update Session"
summary: "Refresh the current task summary from the latest accepted context."
deck: session-lifecycle
game: session
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-lifecycle/update-result
wave: 0
provider: thread-management
---

# Update Session

**ID:** `session-lifecycle/update-session`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `metadata-mutation`, `task-management`\
**Default Binding:** current-task\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `session-lifecycle/update-result`\
**Duration:** `once`

**Effect:** Refresh the current task summary from the latest accepted context.

**Limits:** Update only task metadata and never rewrite the conversation.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **UPDATE-SESSION**` when used alone. Append
`→ 🃏 **UPDATE-SESSION**` when another Card precedes it.
