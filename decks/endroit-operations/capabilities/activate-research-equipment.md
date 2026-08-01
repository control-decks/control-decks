---
id: activate-research-equipment
title: "Activate Research Equipment"
summary: "Activate the Home-owned research Equipment for the bound work."
deck: endroit-operations
game: endroit-home
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: endroit-operations/equipment-activation-result
wave: 0
provider: endroit-home
---

# Activate Research Equipment

**ID:** `endroit-operations/activate-research-equipment`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `endroit-workplace`, `equipment-activation`\
**Default Binding:** current-work\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/user-authorized-scope`\
**Produces:** `endroit-operations/equipment-activation-result`\
**Duration:** `once`

**Effect:** Ask Endroit to activate the Home-owned `research` Equipment for the bound work.

**Limits:** Use only installed, trusted Equipment already resolved by Endroit. Do not install, trust, or modify Equipment implicitly. Return `blocked` when the provider cannot activate it.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ACTIVATE-RESEARCH-EQUIPMENT**` when used alone. Append
`→ 🃏 **ACTIVATE-RESEARCH-EQUIPMENT**` when another Card precedes it.
