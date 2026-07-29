---
id: hairness-context-pick-workspace
title: "Pick Workspace Context"
summary: "Select one resolved Hairness Workspace and load its bounded durable context."
deck: hairness-context
game: hairness-home
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 0
provider: hairness-home
---

# Pick Workspace Context

**ID:** `hairness-context/hairness-context-pick-workspace`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `hairness-context`, `workspace-context`\
**Default Binding:** current-workspace\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Select one resolved Hairness Workspace and load its bounded durable context.

**Limits:** Require an explicit or uniquely resolvable Workspace and read only linked material.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **HAIRNESS-CONTEXT-PICK-WORKSPACE**` when used alone. Append
`→ 🃏 **HAIRNESS-CONTEXT-PICK-WORKSPACE**` when another Card precedes it.
