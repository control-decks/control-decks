---
id: parallelize
title: "Parallelize"
summary: "Partition the current work into independent slices that can safely run concurrently."
deck: session-orchestration
game: session
role: operation/transform
duration: once
accepts: ["hacp/content", "hacp/result"]
produces: session-orchestration/parallel-plan
wave: 0
provider: any
---

# Parallelize

**ID:** `session-orchestration/parallelize`\
**HACP:** `0.4`\
**Kind:** `operation`\
**Mode:** `transform`\
**Traits:** `read-only`, `semantic`\
**Default Binding:** current-work\
**Accepts:** `hacp/content`, `hacp/result`\
**Requires:** `hacp/decomposable-object`\
**Produces:** `session-orchestration/parallel-plan`\
**Duration:** `once`

**Effect:** Partition the current work into independent slices that can safely run concurrently.

**Limits:** Do not execute, delegate, or force artificial parallelism.

## Resolve

1. Resolve the Binding and preflight the complete ordered HACP stream.
2. Apply active controls before this Card's concrete effect or tool calls.
3. Perform only the stated effect and return its observed result.
4. When the required provider capability is unavailable, return `blocked`
   and name the missing capability without simulating success.

## Visibility

Begin the combo trace with
`> 🎯 **<binding>** → 🃏 **PARALLELIZE**` when used alone. Append
`→ 🃏 **PARALLELIZE**` when another Card precedes it.
