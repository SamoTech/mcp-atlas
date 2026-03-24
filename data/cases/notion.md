---
title: Notion
---

# Notion

Notion launched an official MCP server enabling AI agents to read, create, and update pages, databases, and blocks across a workspace.

## Named Systems

| System | Role |
|--------|------|
| Notion API | Core workspace data access |
| MCP Server (official) | Exposes pages, databases, blocks as tools |
| Notion OAuth | Workspace-scoped authentication |
| Claude / Cursor | Primary AI client consumers |

## Deployment Pattern

Internal API Proxy — MCP server is a thin typed wrapper over Notion’s public API. Hosted by the user, not Notion infrastructure.

## Governance

Access scoped to pages/databases explicitly shared with the integration. No access to unshared workspace content. Write operations create a full audit trail in Notion’s page history.

## Sources

- [Notion MCP server launch](https://notion.so/blog/mcp)
- Official repository: `makenotion/notion-mcp-server`
