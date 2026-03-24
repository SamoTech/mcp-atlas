---
title: Sandboxed Developer Access
summary: Developers get MCP access to internal tools inside an isolated sandbox — full capability for testing and building, zero production blast radius.
---

# Pattern: Sandboxed Developer Access

## Summary

Developers and AI coding agents are given full MCP tool access within a sandboxed environment that mirrors production. The sandbox has read access to production data snapshots but all write operations are isolated.

## Diagram

```
[Developer / AI Coding Agent]
          ↓
  [Sandbox MCP Gateway]
  /                   \
[Full Tool Access]   [Prod Data Snapshot]
  (write → sandbox)   (read-only)
```

## When to use

- Enabling AI coding agents (Copilot, Cursor) with internal tool access
- When developer productivity is the goal but prod safety is non-negotiable
- Onboarding new engineers with full context, zero risk

## Trade-offs

| Pro | Con |
|-----|-----|
| Full capability for dev agents | Snapshot data may be stale |
| Zero production blast radius | Sandbox infra cost |
| Fast onboarding | Sync complexity between sandbox and prod |

## Real-world reference

Replit's MCP implementation follows this pattern for their agent-based development environment.
