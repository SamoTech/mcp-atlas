---
title: Sourcegraph (Cody)
---

# Sourcegraph (Cody)

Sourcegraph’s AI coding assistant Cody uses MCP to expose enterprise codebase context — cross-repo search, symbol resolution, and code intelligence — to external AI agents.

## Named Systems

| System | Role |
|--------|------|
| Sourcegraph Code Intelligence | AST-level symbol and reference indexing |
| Cody Gateway | LLM proxy with context injection |
| MCP Server | Exposes search, symbols, file content as tools |
| GitHub / GitLab / Bitbucket | Source repository integrations |

## Deployment Pattern

Hub-and-Spoke — Cody Gateway acts as the central MCP hub routing agent requests to the appropriate code intelligence backend.

## Governance

Repository access governed by existing Sourcegraph permission model. Agents only see repositories the authenticated user can access. All queries logged via Cody Gateway.

## Sources

- [Sourcegraph Cody MCP announcement](https://sourcegraph.com/blog/cody-mcp)
- Sourcegraph docs: MCP server configuration
