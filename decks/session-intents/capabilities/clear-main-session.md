---
id: clear-main-session
title: "Clear Main Session"
summary: "Clear the active Main Session coordination policy."
deck: session-intents
game: session
role: control/clear
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-intents/control-state
wave: 1
provider: any
---

# Clear Main Session

**ID:** `session-intents/clear-main-session`\
**HACP:** `0.4`\
**Kind:** `control`\
**Mode:** `clear`\
**Traits:** `deck-clear`, `mutation-safe`\
**Default Binding:** session-intents/control-state\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `session-intents/control-state`\
**Duration:** `once`

**Effect:** Clear the active Main Session coordination policy.

**Limits:** Clear only the Main Session state owned by this Deck.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **CLEAR-MAIN-SESSION**` when used alone. Append
`→ 🃏 **CLEAR-MAIN-SESSION**` when another Card precedes it.
