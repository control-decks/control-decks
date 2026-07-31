---
id: route-room
title: "Route Room"
summary: "Resolve the unique owning Room for the current object."
deck: endroit-routing
game: endroit-home
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 0
provider: endroit-home
---

# Route Room

**ID:** `endroit-routing/route-room`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `endroit-routing`\
**Default Binding:** known-rooms\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Resolve the unique owning Room for the current object.

**Limits:** Ask when two Rooms remain plausible and never create durable state.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ROUTE-ROOM**` when used alone. Append
`→ 🃏 **ROUTE-ROOM**` when another Card precedes it.
