---
title: Hub and Spoke
summary: A single central MCP gateway routes all agent requests to downstream services — full audit trail, unified auth, and consistent policy enforcement.
---

# Pattern: Hub and Spoke

## Summary

All agent requests flow through a single central MCP gateway. The gateway handles authentication, authorization, rate-limiting, and audit logging before routing to downstream MCP servers.

## Diagram

```
         [AI Agent]
             ↓
    [Central MCP Gateway]
    /        |         \
[HR MCP] [Docs MCP] [Code MCP]
```

## When to use

- Regulated industries (finance, healthcare, legal)
- When a single audit trail is required
- When multiple agents need access to the same set of tools
- When security policy must be enforced uniformly

## Trade-offs

| Pro | Con |
|-----|-----|
| Unified auth & audit | Gateway is a single point of failure |
| Easy policy enforcement | Latency overhead per request |
| Simple mental model | Requires dedicated gateway team |

## Real-world reference

Block's MCP deployment uses a hub-and-spoke model with a dedicated MCP infrastructure team.
