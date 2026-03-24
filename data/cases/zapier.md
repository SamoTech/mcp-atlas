---
title: "Zapier — MCP Server for 7,000+ App Integrations"
---
# Case Study: Zapier

## Overview

| Field | Value |
|-------|-------|
| **Company** | Zapier, Inc. |
| **Industry** | Workflow Automation / SaaS Integration |
| **Headquarters** | San Francisco, CA |
| **Deployment Date** | 2024 |
| **MCP Version** | Official MCP server |
| **Enterprise Readiness Score** | ⭐⭐⭐ |

---

## Use Case

Zapier launched an MCP server exposing its 7,000+ app integrations as tools callable by any MCP-compatible AI agent. This allows agents to trigger Zaps, send emails, create CRM records, and perform cross-app automations through a single MCP interface.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Zapier Actions API | Integration Layer | Read/Write | OAuth per app | Exposes Zaps and app actions as REST endpoints |
| MCP Server (Zapier) | Tool Registry | Read/Write | User API key | Wraps Actions API as typed MCP tools |
| Claude / GPT-4 | AI Clients | Inbound | API Key | Primary AI client consumers |
| Zapier Auth | Auth Provider | Outbound | OAuth 2.0 | OAuth per connected app |

## Architecture Pattern

Federated Registry — each user's enabled Zapier actions appear as individual tools in their personal MCP tool registry. No central gateway; each user's token scopes their available tools.

## Governance Controls

- **Consent-based writes:** Write actions (send email, create record) require explicit user consent during Zapier's OAuth flow
- **Scope isolation:** Tool availability is scoped to the authenticated user's connected apps
- **No cross-user access:** Each token is strictly user-scoped with no cross-account access

## Outcomes

- AI agents can now trigger any of Zapier's 7,000+ app integrations through a unified MCP interface
- Enables complex multi-app automation workflows driven entirely by natural language agent instructions

## Source Links

1. [Zapier MCP Server Announcement](https://zapier.com/blog/mcp-server)
2. [Zapier MCP Documentation: Natural Language Actions](https://zapier.com/mcp)

## Evidence Quality Notes

Official Zapier blog post and public documentation confirm the MCP server deployment and capabilities.
