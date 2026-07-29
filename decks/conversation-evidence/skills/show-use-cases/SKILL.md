---
name: show-use-cases
description: "Render a small set of distinct concrete use cases for the current object. Use only when the human explicitly invokes show-use-cases."
---

# Show Use Cases

**ID:** `conversation-evidence/show-use-cases`\
**HACP:** `0.4`\
**Kind:** `presentation`\
**Mode:** `render`\
**Traits:** `read-only`, `presentation`, `examples`\
**Default Binding:** current-working-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/presentation`\
**Duration:** `once`

**Effect:** Render a small set of distinct concrete use cases for the current object.

**Limits:** Do not turn examples into requirements or pad with near-duplicates.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SHOW-USE-CASES**` when used alone. Append
`→ 🃏 **SHOW-USE-CASES**` when another Card precedes it.

