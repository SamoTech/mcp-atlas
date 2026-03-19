# Pattern: Federated Registry

## Summary

Teams own and maintain their own MCP servers. A central service discovery layer allows agents to find available servers, but there is no central routing or enforcement gateway.

## Diagram

```
[Discovery Registry]
  /     |     \
[Team A MCP] [Team B MCP] [Team C MCP]
       ↑            ↑            ↑
     Agent        Agent        Agent
```

## When to use

- Platform-engineering organizations where teams own their tooling
- When agility and team autonomy matter more than centralized control
- When different teams have different security postures

## Trade-offs

| Pro | Con |
|-----|-----|
| High team autonomy | Inconsistent governance |
| Fast iteration per team | No single audit log |
| No central bottleneck | Discovery complexity grows with scale |
