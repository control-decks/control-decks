---
id: implications
title: "Implications"
summary: "Derive the most material direct implications of the bound object."
deck: conversation-extension
game: conversation
role: operation/transform
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: conversation-extension/implications
wave: 0
provider: any
---

# Implications

**ID:** `conversation-extension/implications`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`\
**Default Binding:** current-working-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/extendable-thought`\
**Produces:** `conversation-extension/implications`\
**Duration:** `once`

**Effect:** Derive the most material direct implications of the bound object.

**Limits:** Separate implications from facts and stop before recommendations.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **IMPLICATIONS**` when used alone. Append
`→ 🃏 **IMPLICATIONS**` when another Card precedes it.
