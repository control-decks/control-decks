---
id: on-axis
title: "On Axis"
summary: "Select one explicit semantic axis for the following compatible cards."
deck: conversation-focus
game: conversation
role: binding/select
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/binding
wave: 0
provider: any
---

# On Axis

**ID:** `conversation-focus/on-axis`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`\
**Default Binding:** current-axis\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Select one explicit semantic axis for the following compatible cards.

**Limits:** Do not transform the object or persist beyond the combo.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **ON-AXIS**` when used alone. Append
`→ 🃏 **ON-AXIS**` when another Card precedes it.
