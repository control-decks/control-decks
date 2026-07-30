---
id: show-hud
title: "Show HUD"
summary: "Render the smallest useful live Endroit HUD for the current context."
deck: endroit-routing
game: endroit-home
role: presentation/render
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/presentation
wave: 0
provider: endroit-home
---

# Show HUD

**ID:** `endroit-routing/show-hud`\
**HACP:** `0.4`\
**Kind:** `presentation`\
**Mode:** `render`\
**Traits:** `read-only`, `presentation`, `endroit-context`\
**Default Binding:** current-home\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/presentation`\
**Duration:** `once`

**Effect:** Render the smallest useful live Endroit HUD for the current context.

**Limits:** Do not substitute a stale snapshot for required mutation revalidation.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SHOW-HUD**` when used alone. Append
`→ 🃏 **SHOW-HUD**` when another Card precedes it.
