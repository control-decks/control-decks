---
id: counterpoint
title: "Counterpoint"
summary: "Develop the strongest grounded counterpoint to the current claim."
deck: conversation-extension
game: conversation
role: operation/transform
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: conversation-extension/counterpoint
wave: 0
provider: any
---

# Counterpoint

**ID:** `conversation-extension/counterpoint`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`\
**Default Binding:** current-claim\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/testable-object`\
**Produces:** `conversation-extension/counterpoint`\
**Duration:** `once`

**Effect:** Develop the strongest grounded counterpoint to the current claim.

**Limits:** Do not manufacture disagreement or present speculation as evidence.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **COUNTERPOINT**` when used alone. Append
`→ 🃏 **COUNTERPOINT**` when another Card precedes it.
