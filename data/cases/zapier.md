---
title: Zapier
---

# Zapier

Zapier launched an MCP server exposing its 7,000+ app integrations as tools callable by any MCP-compatible AI agent.

## Named Systems

| System | Role |
|--------|------|
| Zapier Actions API | Exposes Zaps and app actions as REST endpoints |
| MCP Server (Zapier) | Wraps Actions API as typed MCP tools |
| Claude / GPT-4 | Primary AI client consumers |
| Zapier Auth | OAuth per connected app |

## Deployment Pattern

Federated Registry — each user’s enabled Zapier actions appear as individual tools in their personal MCP tool registry. No central gateway; each user’s token scopes their available tools.

## Governance

Tool availability is scoped to the authenticated user’s connected apps. Write actions (send email, create record) require explicit user consent during Zapier’s OAuth flow.

## Sources

- [Zapier MCP server announcement](https://zapier.com/blog/mcp-server)
- Zapier MCP documentation: Natural language actions
