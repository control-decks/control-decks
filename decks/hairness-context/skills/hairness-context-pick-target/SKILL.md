---
name: hairness-context-pick-target
description: "Select one known Hairness Target and load only its current inspectable context. Use only when the human explicitly invokes hairness-context-pick-target."
---

# Pick Target Context

**ID:** `hairness-context/hairness-context-pick-target`\
**HACP:** `0.4`\
**Kind:** `binding`\
**Mode:** `select`\
**Traits:** `semantic`, `hairness-context`, `target-context`\
**Default Binding:** current-target\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/binding`\
**Duration:** `once`

**Effect:** Select one known Hairness Target and load only its current inspectable context.

**Limits:** Require an explicit or uniquely resolvable Target; never guess a repository or mutate it.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **HAIRNESS-CONTEXT-PICK-TARGET**` when used alone. Append
`→ 🃏 **HAIRNESS-CONTEXT-PICK-TARGET**` when another Card precedes it.

