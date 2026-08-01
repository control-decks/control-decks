---
id: retain-material
title: "Retain Material"
summary: "Retain the current object as inspectable Room-owned Material."
deck: endroit-operations
game: endroit-home
role: operation/action
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: endroit-operations/retain-result
wave: 0
provider: endroit-home
---

# Retain Material

**ID:** `endroit-operations/retain-material`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `mutation`, `material-transition`\
**Default Binding:** current-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/user-authorized-scope`\
**Produces:** `endroit-operations/retain-result`\
**Duration:** `once`

**Effect:** Ask Endroit to retain the current object as inspectable Material in its owning Room.

**Limits:** Use Endroit's existing retain transition and resolved Room ownership. Never retain transcripts, hidden reasoning, credentials, or private downstream information.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **RETAIN-MATERIAL**` when used alone. Append
`→ 🃏 **RETAIN-MATERIAL**` when another Card precedes it.
