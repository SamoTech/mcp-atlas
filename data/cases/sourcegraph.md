---
title: "Sourcegraph (Cody) — MCP for Enterprise Code Intelligence"
---
# Case Study: Sourcegraph (Cody)

## Overview

| Field | Value |
|-------|-------|
| **Company** | Sourcegraph, Inc. |
| **Industry** | Developer Tools / Code Intelligence |
| **Headquarters** | San Francisco, CA |
| **Deployment Date** | 2024 |
| **MCP Version** | Official MCP server |
| **Enterprise Readiness Score** | ⭐⭐⭐⭐ |

---

## Use Case

Sourcegraph's AI coding assistant Cody uses MCP to expose enterprise codebase context — cross-repo search, symbol resolution, and code intelligence — to external AI agents. This enables agents to perform precise code-aware tasks across large multi-repository enterprise codebases.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Sourcegraph Code Intelligence | Code Analysis | Read | Internal Auth | AST-level symbol and reference indexing |
| Cody Gateway | LLM Proxy | Read/Write | API Key | LLM proxy with context injection |
| MCP Server | Tool Layer | Read | OAuth | Exposes search, symbols, file content as tools |
| GitHub / GitLab / Bitbucket | Source Repos | Read | OAuth | Source repository integrations |

## Architecture Pattern

Hub-and-Spoke — Cody Gateway acts as the central MCP hub routing agent requests to the appropriate code intelligence backend.

## Governance Controls

- **Permission inheritance:** Repository access governed by existing Sourcegraph permission model
- **User-scoped access:** Agents only see repositories the authenticated user can access
- **Query logging:** All queries logged via Cody Gateway for audit and compliance

## Outcomes

- External AI agents can query enterprise codebase context through a standard MCP interface
- Enables cross-repository code search and symbol resolution for AI-assisted development

## Source Links

1. [Sourcegraph Cody MCP Announcement](https://sourcegraph.com/blog/cody-mcp)
2. [Sourcegraph Docs: MCP Server Configuration](https://docs.sourcegraph.com/cody/mcp)

## Evidence Quality Notes

Official Sourcegraph blog post and documentation confirm MCP integration details.
