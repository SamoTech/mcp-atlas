---
title: Internal API Proxy
summary: MCP wraps existing internal REST/GraphQL APIs without rebuilding them — lowest migration cost for enterprises with established API infrastructure.
---

# Pattern: Internal API Proxy

## Summary

An MCP server acts as a thin translation layer over existing internal APIs. No business logic moves; MCP just exposes existing endpoints as tools with proper schemas and descriptions.

## Diagram

```
[AI Agent]
    ↓
[MCP Proxy Server]
    ↓  (translates MCP calls → HTTP/REST)
[Existing Internal APIs]
    ↓
[Databases / Services]
```

## When to use

- Organizations with mature internal REST or GraphQL APIs
- When migration cost must be minimized
- When teams want MCP access without touching existing services
- Ideal first step for enterprises evaluating MCP

## Trade-offs

| Pro | Con |
|-----|-----|
| Zero changes to existing APIs | Proxy adds latency |
| Fast to implement | Tool descriptions must be written manually |
| Low risk migration path | Auth must be managed in two places |
