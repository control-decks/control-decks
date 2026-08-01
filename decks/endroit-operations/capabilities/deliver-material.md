---
id: deliver-material
title: "Deliver Material"
summary: "Deliver current Material through one resolved Route."
deck: endroit-operations
game: endroit-home
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: endroit-operations/delivery-result
wave: 0
provider: endroit-home
---

# Deliver Material

**ID:** `endroit-operations/deliver-material`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `mutation`, `external-effect`, `material-transition`\
**Default Binding:** current-material-and-route\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/user-authorized-scope`\
**Produces:** `endroit-operations/delivery-result`\
**Duration:** `once`

**Effect:** Ask Endroit to deliver the current Material through one explicitly resolved Route.

**Limits:** Revalidate the Route immediately before mutation. Ask when the destination is ambiguous, and never push, publish, or deliver through an inferred Route.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **DELIVER-MATERIAL**` when used alone. Append
`→ 🃏 **DELIVER-MATERIAL**` when another Card precedes it.
