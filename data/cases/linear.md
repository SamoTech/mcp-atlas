---
title: Linear
---

# Linear

Linear shipped a native MCP server allowing AI coding agents to read and write issues, projects, and roadmap data directly.

## Named Systems

| System | Role |
|--------|------|
| Linear API | Project and issue management |
| MCP Server (official) | Exposes issues, cycles, teams as tools |
| Claude / Cursor | Primary AI client consumers |

## Deployment Pattern

Internal API Proxy — MCP wraps Linear’s existing GraphQL API. All mutations (create issue, update status) require an authenticated Linear API key.

## Governance

All write operations are scoped to the authenticated workspace. No cross-workspace access is possible by design. Audit logs available via Linear’s existing activity feed.

## Sources

- [Linear MCP Server launch post](https://linear.app/changelog/mcp)
- Official GitHub repository: `linear/linear-mcp-server`
