---
name: zoom-out
description: "Place the current object in the smallest larger frame that materially changes understanding. Use only when the human explicitly invokes zoom-out."
---

# Zoom Out

**ID:** `conversation-focus/zoom-out`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`, `focus`\
**Default Binding:** current-working-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `conversation-focus/wider-frame`\
**Duration:** `once`

**Effect:** Place the current object in the smallest larger frame that materially changes understanding.

**Limits:** Do not drift into a generic overview or unrelated context.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ZOOM-OUT**` when used alone. Append
`→ 🃏 **ZOOM-OUT**` when another Card precedes it.

