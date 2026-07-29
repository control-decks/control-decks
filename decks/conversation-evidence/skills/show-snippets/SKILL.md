---
name: show-snippets
description: "Show the smallest concrete source snippets needed to ground the current claim or proposal. Use only when the human explicitly invokes show-snippets."
---

# Show Snippets

**ID:** `conversation-evidence/show-snippets`\
**HACP:** `0.4`\
**Kind:** `presentation`\
**Mode:** `render`\
**Traits:** `read-only`, `evidence`, `presentation`\
**Default Binding:** current-object-sources\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/presentation`\
**Duration:** `once`

**Effect:** Show the smallest concrete source snippets needed to ground the current claim or proposal.

**Limits:** Do not dump full files, invent snippets, or change the underlying object.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SHOW-SNIPPETS**` when used alone. Append
`→ 🃏 **SHOW-SNIPPETS**` when another Card precedes it.

