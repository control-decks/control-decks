---
id: search-session
title: "Search Session"
summary: "Orient the current session toward evidence-gathering and return a bounded search brief."
deck: session-intents
game: session
role: operation/transform
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-intents/search-brief
wave: 1
provider: any
---

# Search Session

**ID:** `session-intents/search-session`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`, `research-intent`\
**Default Binding:** current-research-question\
**Accepts:** `hacp/content`, `hacp/result`\
**Produces:** `session-intents/search-brief`\
**Duration:** `once`

**Effect:** Orient the current session toward evidence-gathering and return a bounded search brief.

**Limits:** Do not perform the search, choose conclusions, or mutate sources.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **SEARCH-SESSION**` when used alone. Append
`→ 🃏 **SEARCH-SESSION**` when another Card precedes it.
