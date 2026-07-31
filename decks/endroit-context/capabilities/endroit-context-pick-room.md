---
id: endroit-context-pick-room
title: "Pick Room Context"
summary: "Select one resolved Endroit Room and load its bounded durable context."
deck: endroit-context
game: endroit-home
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 0
provider: endroit-home
---

# Pick Room Context

**ID:** `endroit-context/endroit-context-pick-room`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `endroit-context`, `room-context`\
**Default Binding:** current-room\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Select one resolved Endroit Room and load its bounded durable context.

**Limits:** Require an explicit or uniquely resolvable Room and read only linked material.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ENDROIT-CONTEXT-PICK-ROOM**` when used alone. Append
`→ 🃏 **ENDROIT-CONTEXT-PICK-ROOM**` when another Card precedes it.
