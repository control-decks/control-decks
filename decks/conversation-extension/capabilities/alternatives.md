---
id: alternatives
title: "Alternatives"
summary: "Surface a small set of meaningfully different alternatives to the current direction."
deck: conversation-extension
game: conversation
role: operation/transform
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: conversation-extension/alternatives
wave: 0
provider: any
---

# Alternatives

**ID:** `conversation-extension/alternatives`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`\
**Default Binding:** current-direction\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/open-decision`\
**Produces:** `conversation-extension/alternatives`\
**Duration:** `once`

**Effect:** Surface a small set of meaningfully different alternatives to the current direction.

**Limits:** Do not rank, recommend, or pad with cosmetic variants.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ALTERNATIVES**` when used alone. Append
`→ 🃏 **ALTERNATIVES**` when another Card precedes it.
