---
name: refresh-context
description: "Re-read the authoritative current context for the bound Home identity and report material changes. Use only when the human explicitly invokes refresh-context."
---

# Refresh Context

**ID:** `hairness-routing/refresh-context`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `annotate`\
**Traits:** `read-only`, `hairness-context`, `context-refresh`\
**Default Binding:** current-hairness-context\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `hacp/result`\
**Duration:** `once`

**Effect:** Re-read the authoritative current context for the bound Home identity and report material changes.

**Limits:** Do not widen scope, persist a transcript, or mutate the bound source.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **REFRESH-CONTEXT**` when used alone. Append
`→ 🃏 **REFRESH-CONTEXT**` when another Card precedes it.

