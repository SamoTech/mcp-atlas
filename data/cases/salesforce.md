---
title: "Salesforce — Agentforce & MCP"
---
# Case Study: Salesforce

## Overview

| Field | Value |
|-------|-------|
| **Company** | Salesforce |
| **Industry** | CRM / Enterprise SaaS |
| **Headquarters** | San Francisco, CA |
| **Deployment Date** | 2025 |
| **MCP Version** | Anthropic MCP spec |
| **Enterprise Readiness Score** | ⭐⭐⭐⭐⭐ |

---

## Use Case

Salesforce added MCP server support to Agentforce, its enterprise AI agent platform. Enterprise customers use Agentforce agents to query Salesforce CRM data, update opportunity records, generate pipeline reports, and trigger workflow automations — all via MCP-based tool calls. Salesforce also exposes an official MCP server for external agents to connect to the Salesforce platform.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Salesforce CRM | CRM | Read/Write | OAuth 2.0 | Accounts, contacts, opportunities |
| Salesforce Flows | Automation | Read/Write | OAuth 2.0 | Trigger and monitor automations |
| Salesforce Analytics | BI | Read | OAuth 2.0 | Pipeline and revenue dashboards |
| Salesforce Service Cloud | Customer Service | Read/Write | OAuth 2.0 | Cases and knowledge base |
| Salesforce Data Cloud | CDP | Read | OAuth 2.0 | Unified customer data |

## Architecture Pattern

[Federated](../docs/patterns/federated.md)

Each Agentforce deployment is scoped to an org-level Salesforce instance. Enterprise tenants control access via Connected Apps and OAuth policies.

## Governance Controls

- **Connected App policies:** All MCP connections managed via Salesforce Connected Apps
- **Field-level security:** Existing Salesforce FLS applies to all agent-accessed fields
- **Shield encryption:** Agentforce respects Salesforce Shield Platform Encryption
- **Audit trail:** All agent operations logged to Salesforce Audit Trail

## Outcomes

- Sales teams query pipeline health and update opportunities without leaving their AI assistant
- Admins automate repetitive Salesforce maintenance tasks via agent workflows
- Enterprise customers reduce custom integration burden by reusing existing Salesforce permissions

## Source Links

1. [Salesforce Agentforce MCP Announcement](https://www.salesforce.com/news/press-releases/2025/03/agentforce/)
2. [Salesforce MCP Server Documentation](https://developer.salesforce.com/docs/einstein/genai/guide/mcp.html)

## Evidence Quality Notes

First-party documentation and press release from Salesforce. Agentforce MCP support is a publicly announced GA feature.
