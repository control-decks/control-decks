---
id: open-task
title: "Open Task"
summary: "Create one new task with a self-contained entry prompt derived from the bound object."
deck: session-lifecycle
game: session
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-lifecycle/open-task-result
wave: 1
provider: thread-management
---

# Open Task

**ID:** `session-lifecycle/open-task`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `external-effect`, `task-management`\
**Default Binding:** current-actionable-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/actionable-direction`, `hacp/user-authorized-scope`\
**Produces:** `session-lifecycle/open-task-result`\
**Duration:** `once`

**Effect:** Create one new task with a self-contained entry prompt derived from the bound object.

**Limits:** Create exactly one task. If the host cannot create tasks, return blocked without simulating creation.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **OPEN-TASK**` when used alone. Append
`→ 🃏 **OPEN-TASK**` when another Card precedes it.
