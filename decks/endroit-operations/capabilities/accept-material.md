---
id: accept-material
title: "Accept Material"
summary: "Accept the current object as explicit Room truth."
deck: endroit-operations
game: endroit-home
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: endroit-operations/accept-result
wave: 0
provider: endroit-home
---

# Accept Material

**ID:** `endroit-operations/accept-material`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `mutation`, `material-transition`\
**Default Binding:** current-material\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/user-authorized-scope`\
**Produces:** `endroit-operations/accept-result`\
**Duration:** `once`

**Effect:** Ask Endroit to record the current object as accepted truth in its owning Room.

**Limits:** Use Endroit's existing accept transition. Require a resolved owning Room and explicit human acceptance; never infer acceptance from ordinary positive language.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ACCEPT-MATERIAL**` when used alone. Append
`→ 🃏 **ACCEPT-MATERIAL**` when another Card precedes it.
