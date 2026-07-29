---
id: show-mindmap
title: "Show Mindmap"
summary: "Render the current object as a compact hierarchical mind map."
deck: conversation-view
game: conversation
role: presentation/render
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/presentation
wave: 1
provider: any
---

# Show Mindmap

**ID:** `conversation-view/show-mindmap`\
**HACP:** `0.4`\
**Kind:** `presentation`\
**Mode:** `render`\
**Traits:** `read-only`, `semantic`, `presentation`\
**Default Binding:** current-working-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/presentation`\
**Duration:** `once`

**Effect:** Render the current object as a compact hierarchical mind map.

**Limits:** Preserve substance, omit decorative branches, and do not advance the Working Object.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SHOW-MINDMAP**` when used alone. Append
`→ 🃏 **SHOW-MINDMAP**` when another Card precedes it.
