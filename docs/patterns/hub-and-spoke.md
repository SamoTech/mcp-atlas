# Pattern: Hub-and-Spoke

## Summary

A central MCP Gateway acts as the single routing layer for all agent-to-server communication. Individual MCP servers are registered with the gateway and accessed only through it.

## Diagram

```
Agent / LLM
     │
     ▼
[MCP Gateway]
  /   |   \
[S1] [S2] [S3]   ← MCP Servers (GitHub, Snowflake, Jira, etc.)
```

## When to use

- Large enterprises with centralized IT governance
- When a single audit log for all agent tool calls is required
- When tool access policies must be enforced consistently

## Trade-offs

| Pro | Con |
|-----|-----|
| Single access control point | Gateway is a single point of failure |
| Centralized audit logging | Latency overhead per tool call |
| Easier policy enforcement | Bottleneck for high-throughput agent workloads |

## Real-world reference

Block uses this pattern in combination with sandboxed developer bundles. Gong uses a version of this for its MCP Gateway product.
