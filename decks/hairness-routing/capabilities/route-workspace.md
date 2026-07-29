---
id: route-workspace
title: "Route Workspace"
summary: "Resolve the unique owning Workspace for the current object."
deck: hairness-routing
game: hairness-home
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 0
provider: hairness-home
---

# Route Workspace

**ID:** `hairness-routing/route-workspace`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `hairness-routing`\
**Default Binding:** known-workspaces\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Resolve the unique owning Workspace for the current object.

**Limits:** Ask when two Workspaces remain plausible and never create durable state.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ROUTE-WORKSPACE**` when used alone. Append
`→ 🃏 **ROUTE-WORKSPACE**` when another Card precedes it.
