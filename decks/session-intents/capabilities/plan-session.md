---
id: plan-session
title: "Plan Session"
summary: "Orient the current session around one executable planning outcome."
deck: session-intents
game: session
role: operation/transform
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-intents/planning-brief
wave: 0
provider: any
---

# Plan Session

**ID:** `session-intents/plan-session`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`\
**Default Binding:** current-planning-subject\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `session-intents/planning-brief`\
**Duration:** `once`

**Effect:** Orient the current session around one executable planning outcome.

**Limits:** Do not implement the plan or invent missing authority.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **PLAN-SESSION**` when used alone. Append
`→ 🃏 **PLAN-SESSION**` when another Card precedes it.
