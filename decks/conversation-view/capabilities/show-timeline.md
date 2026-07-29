---
id: show-timeline
title: "Show Timeline"
summary: "Render the current object's meaningful sequence, transitions, and current state."
deck: conversation-view
game: conversation
role: presentation/render
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/presentation
wave: 0
provider: any
---

# Show Timeline

**ID:** `conversation-view/show-timeline`\
**HACP:** `0.4`\
**Kind:** `presentation`\
**Mode:** `render`\
**Traits:** `read-only`, `semantic`, `presentation`\
**Default Binding:** current-working-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/presentation`\
**Duration:** `once`

**Effect:** Render the current object's meaningful sequence, transitions, and current state.

**Limits:** Do not invent dates, steps, or causality.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SHOW-TIMELINE**` when used alone. Append
`→ 🃏 **SHOW-TIMELINE**` when another Card precedes it.
