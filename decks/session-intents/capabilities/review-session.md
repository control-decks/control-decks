---
id: review-session
title: "Review Session"
summary: "Orient the current session around a bounded review target and evidence standard."
deck: session-intents
game: session
role: operation/transform
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-intents/review-brief
wave: 0
provider: any
---

# Review Session

**ID:** `session-intents/review-session`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`\
**Default Binding:** current-review-target\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `session-intents/review-brief`\
**Duration:** `once`

**Effect:** Orient the current session around a bounded review target and evidence standard.

**Limits:** Do not apply fixes or change the reviewed target.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **REVIEW-SESSION**` when used alone. Append
`→ 🃏 **REVIEW-SESSION**` when another Card precedes it.
