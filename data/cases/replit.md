---
title: Replit
---

# Replit

Replit integrated MCP to allow AI agents (Replit Agent) full access to the development environment — filesystem, shell, package installation, and preview URLs.

## Named Systems

| System | Role |
|--------|------|
| Replit Workspace | Sandboxed dev environment |
| Replit Agent | AI coding agent consumer |
| MCP Server (internal) | Exposes shell, fs, browser preview as tools |
| Nix package manager | Tool installation inside sandbox |

## Deployment Pattern

Sandboxed Developer Access — each Repl is an isolated container. MCP tools have full write access within the sandbox, zero access outside it.

## Governance

Environment isolation is enforced at the container level. No persistent credentials stored in the MCP tool layer. Agent actions are logged in Replit’s activity history.

## Sources

- [Replit Agent MCP integration announcement](https://replit.com/blog/mcp)
- Replit documentation: Agent tools and capabilities
