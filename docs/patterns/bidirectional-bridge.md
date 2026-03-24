---
title: Bidirectional Bridge
summary: A platform acts as both MCP client and server, creating a two-way intelligence bridge between internal data and external AI agents.
---

# Pattern: Bidirectional Bridge

## Summary

An enterprise system acts simultaneously as an MCP client (consuming context from other systems) and an MCP server (exposing its own data to external agents). This creates a two-way intelligence bridge.

## Diagram

```
[External Agent: Salesforce / Copilot]
        ↓ queries
[Platform MCP Server]  ←→  [Platform MCP Gateway]
        ↑ enriches                ↓ queries
[Platform Internal Data]   [External Systems]
```

## When to use

- Revenue, CRM, and customer intelligence platforms
- When a platform must both give and receive context
- When multiple enterprise AI agents need a shared data layer

## Real-world reference

Gong's MCP implementation is the clearest public example of this pattern.
