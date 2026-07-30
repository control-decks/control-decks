---
id: endroit-context-pick-workstream
title: "Pick Workstream Context"
summary: "Select one resolved Endroit Workstream and load its current resumable context."
deck: endroit-context
game: endroit-home
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 0
provider: endroit-home
---

# Pick Workstream Context

**ID:** `endroit-context/endroit-context-pick-workstream`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `endroit-context`, `workstream-context`\
**Default Binding:** current-workstream\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Select one resolved Endroit Workstream and load its current resumable context.

**Limits:** Require an explicit or uniquely resolvable Workstream and never create one implicitly.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ENDROIT-CONTEXT-PICK-WORKSTREAM**` when used alone. Append
`→ 🃏 **ENDROIT-CONTEXT-PICK-WORKSTREAM**` when another Card precedes it.
