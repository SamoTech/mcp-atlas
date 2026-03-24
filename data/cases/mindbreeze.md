---
title: "Mindbreeze — Enterprise Knowledge & Ops"
---
# Case Study: Mindbreeze

## Overview

| Field | Value |
|-------|-------|
| **Company** | Mindbreeze GmbH |
| **Industry** | Enterprise Search / Knowledge Management |
| **Headquarters** | Linz, Austria |
| **Deployment Date** | 2025 |
| **MCP Version** | Anthropic MCP spec |
| **Enterprise Readiness Score** | ⭐⭐⭐ |

---

## Use Case

Mindbreeze integrated MCP into its enterprise AI platform to connect AI agents with internal knowledge bases, incident response systems, and operational data. The focus is on surfacing relevant enterprise knowledge to AI agents in real time.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Mindbreeze InSpire | Enterprise Search | Read | Internal Auth | Core knowledge index |
| ITSM / Ticketing | Incident Response | Read/Write | API Token | Incident context retrieval |
| Internal Knowledge Bases | Documents | Read | Internal Auth | Policy docs, runbooks |

## Architecture Pattern

[Knowledge Gateway](../docs/patterns/knowledge-gateway.md)

Mindbreeze acts as an MCP server exposing its enterprise search index to external AI agents.

## Governance Controls

- Governance details not publicly disclosed
- Presumed enterprise SSO and role-based access per standard Mindbreeze deployment

## Outcomes

- Outcome metrics not publicly disclosed
- Platform capability announced for enterprise AI agent integrations

## Source Links

1. [Mindbreeze MCP Integration Announcement](https://www.mindbreeze.com/en/news/mindbreeze-mcp)

## Evidence Quality Notes

Single source; systems named but governance and outcomes not disclosed. Score of 3/5 reflects partial evidence depth.
