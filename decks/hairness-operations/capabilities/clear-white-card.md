---
id: clear-white-card
title: "Clear White Card"
summary: "Stop the active White Card operation without changing completed results."
deck: hairness-operations
game: hairness-home
role: control/clear
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hairness-operations/control-state
wave: 1
provider: any
---

# Clear White Card

**ID:** `hairness-operations/clear-white-card`\
**HACP:** `0.4`\
**Kind:** `control`\
**Mode:** `clear`\
**Traits:** `deck-clear`, `mutation-safe`\
**Default Binding:** hairness-operations/completion-result\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hairness-operations/control-state`\
**Duration:** `once`

**Effect:** Stop the active White Card operation without changing completed results.

**Limits:** Clear only White Card state owned by this Deck.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **CLEAR-WHITE-CARD**` when used alone. Append
`→ 🃏 **CLEAR-WHITE-CARD**` when another Card precedes it.
