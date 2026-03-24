---
title: "Linear — MCP Server for Project Management"
---
# Case Study: Linear

## Overview

| Field | Value |
|-------|-------|
| **Company** | Linear, Inc. |
| **Industry** | Developer Tools / Project Management |
| **Headquarters** | San Francisco, CA |
| **Deployment Date** | 2024 |
| **MCP Version** | Official MCP server |
| **Enterprise Readiness Score** | ⭐⭐⭐ |

---

## Use Case

Linear shipped a native MCP server allowing AI coding agents to read and write issues, projects, and roadmap data directly. This enables developers to create issues, update statuses, and query project context from within their AI coding assistant without switching tools.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Linear API | Project Management | Read/Write | API Key | Issue and project management via GraphQL |
| MCP Server (official) | Tool Layer | Read/Write | API Key | Exposes issues, cycles, teams as tools |
| Claude / Cursor | AI Clients | Inbound | API Key | Primary AI client consumers |

## Architecture Pattern

Internal API Proxy — MCP wraps Linear's existing GraphQL API. All mutations (create issue, update status) require an authenticated Linear API key.

## Governance Controls

- **Workspace isolation:** All write operations are scoped to the authenticated workspace
- **No cross-workspace access:** Cross-workspace access is not possible by design
- **Activity audit:** Audit logs available via Linear's existing activity feed

## Outcomes

- AI agents can manage Linear issues and projects programmatically from within the development workflow
- Reduces context-switching for developers by integrating project management into the AI coding environment

## Source Links

1. [Linear MCP Server Launch Post](https://linear.app/changelog/mcp)
2. [Official Repository: linear/linear-mcp-server](https://github.com/linear/linear-mcp-server)

## Evidence Quality Notes

Official Linear changelog and open-source repository confirm deployment details.
