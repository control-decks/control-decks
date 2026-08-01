---
id: bind-engineer-role
title: "Bind Engineer Role"
summary: "Bind the temporary engineer Role adopted by the current Occupant to the resolved Meeting."
deck: endroit-operations
game: endroit-home
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: endroit-operations/role-binding-result
wave: 0
provider: endroit-home
---

# Bind Engineer Role

**ID:** `endroit-operations/bind-engineer-role`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `endroit-workplace`, `role-binding`\
**Default Binding:** current-work\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/user-authorized-scope`\
**Produces:** `endroit-operations/role-binding-result`\
**Duration:** `once`

**Effect:** Ask Endroit to bind the temporary `engineer` Role adopted by the current Occupant to the resolved Meeting.

**Limits:** Use only instructions supplied by installed, trusted Equipment and a resolved Occupant and Meeting. The Role is a temporary mandate adopted by the Occupant, not a Home-owned object. Do not create a Role registry, an agent runtime, or a persistent provider identity. Return `blocked` when Endroit cannot resolve or apply the binding.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **BIND-ENGINEER-ROLE**` when used alone. Append
`→ 🃏 **BIND-ENGINEER-ROLE**` when another Card precedes it.
