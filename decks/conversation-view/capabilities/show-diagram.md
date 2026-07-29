---
id: show-diagram
title: "Show Diagram"
summary: "Render the smallest diagram that materially clarifies the current object."
deck: conversation-view
game: conversation
role: presentation/render
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/presentation
wave: 0
provider: any
---

# Show Diagram

**ID:** `conversation-view/show-diagram`\
**HACP:** `0.4`\
**Kind:** `presentation`\
**Mode:** `render`\
**Traits:** `read-only`, `semantic`, `presentation`\
**Default Binding:** current-working-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/presentation`\
**Duration:** `once`

**Effect:** Render the smallest diagram that materially clarifies the current object.

**Limits:** Skip the diagram when prose is clearer and never alter substance.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SHOW-DIAGRAM**` when used alone. Append
`→ 🃏 **SHOW-DIAGRAM**` when another Card precedes it.
