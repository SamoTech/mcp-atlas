# Pattern: Internal API Proxy

## Summary

A custom MCP server wraps proprietary internal APIs, exposing them to agents without giving the LLM direct access to internal infrastructure. The MCP server acts as a permission-aware translation layer.

## Diagram

```
LLM / Agent
    │  (MCP tool call)
    ▼
[Custom MCP Server]   ← controls what gets exposed
    │  (internal API call)
    ▼
[Internal API / Database / Service]
```

## When to use

- When internal APIs are not designed for direct LLM consumption
- When data contracts or compliance rules prevent raw API exposure
- When you need to sanitize, filter, or transform internal data before agent use

## Real-world reference

Block writes custom MCP servers for internal APIs as part of its enterprise deployment.
