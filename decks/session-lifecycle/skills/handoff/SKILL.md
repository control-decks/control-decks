---
name: handoff
description: "Prepare or perform one resumable task handoff while preserving the bound context and current authority. Use only when the human explicitly invokes handoff."
---

# Handoff

**ID:** `session-lifecycle/handoff`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `action`\
**Traits:** `external-effect`, `task-management`, `context-transfer`\
**Default Binding:** current-task\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/resumable-object`, `hacp/user-authorized-scope`\
**Produces:** `session-lifecycle/handoff-result`\
**Duration:** `once`

**Effect:** Prepare or perform one resumable task handoff while preserving the bound context and current authority.

**Limits:** Do not expand scope, transfer hidden reasoning, or claim a host handoff succeeded without observed confirmation.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **HANDOFF**` when used alone. Append
`→ 🃏 **HANDOFF**` when another Card precedes it.

