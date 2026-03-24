---
title: Cloudflare
---

# Cloudflare

Cloudflare launched a public MCP server enabling AI agents to interact with their developer platform programmatically.

## Named Systems

| System | Role |
|--------|------|
| Cloudflare Workers | Serverless compute runtime |
| Cloudflare AI Gateway | LLM proxy and observability |
| Cloudflare R2 | Object storage |
| MCP Server (official) | Exposes Workers, KV, R2 as tools |

## Deployment Pattern

Internal API Proxy — the MCP server wraps existing Cloudflare REST APIs with typed tool schemas, requiring no changes to underlying services.

## Governance

Risk-tiered access: read-only operations (list workers, query logs) require only an API token; destructive operations (deploy, delete) require additional OAuth scope confirmation.

## Sources

- [Cloudflare MCP Server announcement blog post](https://blog.cloudflare.com/mcp-server)
- Official GitHub repository: `cloudflare/mcp-server-cloudflare`
