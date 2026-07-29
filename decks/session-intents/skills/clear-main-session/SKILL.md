---
name: clear-main-session
description: "Clear the active Main Session coordination policy. Use only when the human explicitly invokes clear-main-session."
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

