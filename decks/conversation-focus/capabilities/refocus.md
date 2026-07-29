---
id: refocus
title: "Refocus"
summary: "Return the conversation to the last explicit objective and its nearest open question."
deck: conversation-focus
game: conversation
role: operation/transform
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: conversation-focus/refocused-object
wave: 0
provider: any
---

# Refocus

**ID:** `conversation-focus/refocus`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`\
**Default Binding:** available-conversation\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `conversation-focus/refocused-object`\
**Duration:** `once`

**Effect:** Return the conversation to the last explicit objective and its nearest open question.

**Limits:** Do not erase divergent material or choose a new objective.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **REFOCUS**` when used alone. Append
`→ 🃏 **REFOCUS**` when another Card precedes it.
