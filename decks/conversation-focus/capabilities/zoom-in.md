---
id: zoom-in
title: "Zoom In"
summary: "Narrow the current object to its most consequential unresolved detail."
deck: conversation-focus
game: conversation
role: operation/transform
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: conversation-focus/narrowed-object
wave: 1
provider: any
---

# Zoom In

**ID:** `conversation-focus/zoom-in`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`, `focus`\
**Default Binding:** current-working-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `conversation-focus/narrowed-object`\
**Duration:** `once`

**Effect:** Narrow the current object to its most consequential unresolved detail.

**Limits:** Do not solve, expand, or change the axis.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ZOOM-IN**` when used alone. Append
`→ 🃏 **ZOOM-IN**` when another Card precedes it.
