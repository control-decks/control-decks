---
name: white-card
description: "Take every remaining decision needed to complete the bound objective using the most coherent choice available in current context. Use only when the human explicitly invokes white-card."
---

# White Card

**ID:** `hairness-operations/white-card`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `multi-exchange`, `bounded-autonomy`, `white-card`\
**Default Binding:** current-authorized-objective\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/actionable-direction`, `hacp/user-authorized-scope`\
**Produces:** `hairness-operations/completion-result`\
**Duration:** `until-complete`

**Effect:** Take every remaining decision needed to complete the bound objective using the most coherent choice available in current context.

**Limits:** Use only existing authority, constraints, evidence, and scope. Ask or stop when a choice would expand any of them.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **WHITE-CARD**` when used alone. Append
`→ 🃏 **WHITE-CARD**` when another Card precedes it.

