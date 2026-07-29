---
name: further
description: "Extend the strongest supported edge of the current object by one non-obvious implication. Use only when the human explicitly invokes further."
---

# Further

**ID:** `conversation-extension/further`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`, `creative-extension`\
**Default Binding:** current-working-object\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/extendable-thought`\
**Produces:** `conversation-extension/extended-thought`\
**Duration:** `once`

**Effect:** Extend the strongest supported edge of the current object by one non-obvious implication.

**Limits:** Do not brainstorm broadly, choose a direction, repeat the object, or invent evidence.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **FURTHER**` when used alone. Append
`→ 🃏 **FURTHER**` when another Card precedes it.

