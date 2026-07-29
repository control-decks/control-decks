---
id: show-context-map
title: "Show Context Map"
summary: "Render the actors, sources, constraints, and boundaries around the current object."
deck: conversation-view
game: conversation
role: presentation/render
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/presentation
wave: 0
provider: any
---

# Show Context Map

**ID:** `conversation-view/show-context-map`\
**HACP:** `0.4`\
**Kind:** `presentation`\
**Mode:** `render`\
**Traits:** `read-only`, `semantic`, `presentation`\
**Default Binding:** current-working-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/presentation`\
**Duration:** `once`

**Effect:** Render the actors, sources, constraints, and boundaries around the current object.

**Limits:** Do not infer unobserved relationships or replace the object.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SHOW-CONTEXT-MAP**` when used alone. Append
`→ 🃏 **SHOW-CONTEXT-MAP**` when another Card precedes it.
