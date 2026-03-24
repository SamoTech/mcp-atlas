---
title: "Atlassian — MCP Servers for Jira and Confluence"
---
# Case Study: Atlassian

## Overview

| Field | Value |
|-------|-------|
| **Company** | Atlassian Corporation |
| **Industry** | Developer Tools / Enterprise Software |
| **Headquarters** | Sydney, Australia |
| **Deployment Date** | 2024 |
| **MCP Version** | Official MCP servers |
| **Enterprise Readiness Score** | ⭐⭐⭐⭐ |

---

## Use Case

Atlassian released official MCP servers for Jira and Confluence, enabling AI agents to read and update issues, pages, and project metadata. This lets development teams use AI agents to query project status, create issues, and update documentation without leaving their coding environment.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Jira Cloud | Issue Tracking | Read/Write | OAuth 2.0 | Issue and project tracking |
| Confluence Cloud | Knowledge Base | Read/Write | OAuth 2.0 | Knowledge base and documentation |
| Atlassian Forge | Runtime Platform | Internal | Atlassian Auth | Serverless runtime hosting MCP servers |
| Atlassian OAuth 2.0 | Auth Provider | Outbound | OAuth 2.0 | Authentication for agent access |

## Architecture Pattern

Internal API Proxy — MCP servers hosted on Atlassian Forge translate tool calls to Jira/Confluence REST API calls. No data leaves Atlassian infrastructure.

## Governance Controls

- **Permission inheritance:** All actions operate under the authenticated user's Atlassian permissions
- **Project-level controls:** Jira project-level permissions apply to all MCP tool calls
- **Audit trail:** Full audit trail via Atlassian's existing admin audit log

## Outcomes

- AI agents can query and update Jira issues and Confluence pages programmatically
- Development teams can automate project management tasks through natural language agent workflows

## Source Links

1. [Atlassian MCP Server Announcement](https://developer.atlassian.com/blog/mcp)
2. [Official Repository: atlassian/mcp-server-jira](https://github.com/atlassian/mcp-server-jira)
3. [Official Repository: atlassian/mcp-server-confluence](https://github.com/atlassian/mcp-server-confluence)

## Evidence Quality Notes

Official Atlassian developer blog and public GitHub repositories confirm deployment details.
