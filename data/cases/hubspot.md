---
title: "HubSpot — CRM AI Agent Integration"
---
# Case Study: HubSpot

## Overview

| Field | Value |
|-------|-------|
| **Company** | HubSpot |
| **Industry** | CRM / Marketing Automation |
| **Headquarters** | Cambridge, MA |
| **Deployment Date** | 2025 |
| **MCP Version** | Anthropic MCP spec |
| **Enterprise Readiness Score** | ⭐⭐⭐⭐ |

---

## Use Case

HubSpot ships an official MCP server exposing contacts, companies, deals, tickets, and engagement data to AI agents. Sales and marketing teams use AI assistants to query pipeline status, create and update contact records, summarize deal history, and draft follow-up emails — all through natural-language prompts.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| HubSpot CRM | CRM | Read/Write | OAuth (Private App) | Contacts, companies, deals |
| HubSpot Marketing | Marketing Automation | Read | OAuth | Campaign performance data |
| HubSpot Tickets | Customer Service | Read/Write | OAuth | Support ticket management |
| HubSpot Engagements | Activity Log | Read | OAuth | Calls, emails, meetings |

## Architecture Pattern

[Bidirectional](../docs/patterns/bidirectional.md)

Agents both read CRM context and write updates back — creating notes, updating deal stages, and logging activities bidirectionally.

## Governance Controls

- **Private App tokens:** Each integration uses a scoped Private App with minimum CRM scopes
- **GDPR compliance:** HubSpot's existing data processing agreements cover agent-accessed data
- **Field-level write restrictions:** Admins can restrict which CRM fields agents are allowed to modify

## Outcomes

- Sales reps query deal history and contact context without switching to the CRM UI
- Marketing teams get instant campaign performance summaries
- Reduced data entry burden through automated activity logging

## Source Links

1. [HubSpot MCP Server Repository](https://github.com/HubSpot/hubspot-mcp-server)
2. [HubSpot AI Agent Integrations](https://developers.hubspot.com/docs/api/overview)

## Evidence Quality Notes

First-party MCP server with public repository. Official HubSpot developer documentation confirms MCP integration.
