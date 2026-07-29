---
id: check-assumptions
title: "Check Assumptions"
summary: "Annotate the current object with its material supported, unsupported, and contradicted assumptions."
deck: conversation-evidence
game: conversation
role: operation/annotate
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/result
wave: 0
provider: any
---

# Check Assumptions

**ID:** `conversation-evidence/check-assumptions`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `annotate`\
**Traits:** `read-only`, `evidence-annotation`, `assumption-classification`\
**Default Binding:** available-conversation\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/result`\
**Duration:** `once`

**Effect:** Annotate the current object with its material supported, unsupported, and contradicted assumptions.

**Limits:** Do not replace the object, search externally without need, or present inference as fact.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **CHECK-ASSUMPTIONS**` when used alone. Append
`→ 🃏 **CHECK-ASSUMPTIONS**` when another Card precedes it.
