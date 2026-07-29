---
name: clear-homekeeper
description: "Clear the active Homekeeper role policy. Use only when the human explicitly invokes clear-homekeeper."
---

# Clear Homekeeper

**ID:** `session-hygiene/clear-homekeeper`\
**HACP:** `0.4`\
**Kind:** `control`\
**Mode:** `clear`\
**Traits:** `deck-clear`, `mutation-safe`\
**Default Binding:** session-hygiene/control-state\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `session-hygiene/control-state`\
**Duration:** `once`

**Effect:** Clear the active Homekeeper role policy.

**Limits:** Clear only Homekeeper state owned by this Deck.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **CLEAR-HOMEKEEPER**` when used alone. Append
`→ 🃏 **CLEAR-HOMEKEEPER**` when another Card precedes it.

