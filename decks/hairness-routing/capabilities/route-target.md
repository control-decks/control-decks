---
id: route-target
title: "Route Target"
summary: "Resolve the unique Target that owns the requested product mutation."
deck: hairness-routing
game: hairness-home
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 0
provider: hairness-home
---

# Route Target

**ID:** `hairness-routing/route-target`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `hairness-routing`\
**Default Binding:** known-targets\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Resolve the unique Target that owns the requested product mutation.

**Limits:** Do not mutate or inspect outside known Target declarations.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ROUTE-TARGET**` when used alone. Append
`→ 🃏 **ROUTE-TARGET**` when another Card precedes it.
