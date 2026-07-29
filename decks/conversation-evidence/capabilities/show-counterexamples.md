---
id: show-counterexamples
title: "Show Counterexamples"
summary: "Render the smallest concrete counterexamples that test the current claim's boundary."
deck: conversation-evidence
game: conversation
role: presentation/render
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: hacp/presentation
wave: 0
provider: any
---

# Show Counterexamples

**ID:** `conversation-evidence/show-counterexamples`\
**HACP:** `0.4`\
**Kind:** `presentation`\
**Mode:** `render`\
**Traits:** `read-only`, `presentation`, `evidence`\
**Default Binding:** current-claim\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/testable-object`\
**Produces:** `hacp/presentation`\
**Duration:** `once`

**Effect:** Render the smallest concrete counterexamples that test the current claim's boundary.

**Limits:** Do not fabricate evidence or use merely different examples.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SHOW-COUNTEREXAMPLES**` when used alone. Append
`→ 🃏 **SHOW-COUNTEREXAMPLES**` when another Card precedes it.
