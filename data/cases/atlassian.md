---
title: Atlassian (Jira + Confluence)
---

# Atlassian (Jira + Confluence)

Atlassian released official MCP servers for Jira and Confluence, enabling AI agents to read and update issues, pages, and project metadata.

## Named Systems

| System | Role |
|--------|------|
| Jira Cloud | Issue and project tracking |
| Confluence Cloud | Knowledge base and documentation |
| Atlassian Forge | Serverless runtime hosting MCP servers |
| Atlassian OAuth 2.0 | Authentication for agent access |

## Deployment Pattern

Internal API Proxy — MCP servers hosted on Atlassian Forge translate tool calls to Jira/Confluence REST API calls. No data leaves Atlassian infrastructure.

## Governance

All actions operate under the authenticated user’s Atlassian permissions. Jira project-level permissions apply to MCP tool calls. Full audit trail via Atlassian’s existing admin audit log.

## Sources

- [Atlassian MCP server announcement](https://developer.atlassian.com/blog/mcp)
- Official repositories: `atlassian/mcp-server-jira`, `atlassian/mcp-server-confluence`
