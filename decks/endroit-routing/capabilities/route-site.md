---
id: route-site
title: "Route Site"
summary: "Resolve the unique Site that owns the requested product mutation."
deck: endroit-routing
game: endroit-home
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 0
provider: endroit-home
---

# Route Site

**ID:** `endroit-routing/route-site`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `endroit-routing`\
**Default Binding:** known-sites\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Resolve the unique Site that owns the requested product mutation.

**Limits:** Do not mutate or inspect outside known Site declarations.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ROUTE-SITE**` when used alone. Append
`→ 🃏 **ROUTE-SITE**` when another Card precedes it.
