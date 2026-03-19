# Case Study: Block

## Overview

| Field | Value |
|-------|-------|
| **Company** | Block, Inc. |
| **Industry** | Fintech / Payments |
| **Headquarters** | San Francisco, CA |
| **Deployment Date** | Early 2025 |
| **MCP Version** | Compatible with Anthropic MCP spec |
| **Enterprise Readiness Score** | ⭐⭐⭐⭐⭐ |

---

## Use Case

Block deployed its internal AI agent **Goose** company-wide on top of MCP. The goal was to give all employees — not just engineers — access to an AI agent capable of querying internal systems, automating workflows, and reducing time on repetitive tasks.

Usage expanded beyond the engineering org to include design, product, support, risk, data, and operations teams.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| GitHub | Developer Tools | Read/Write | OAuth | Scoped to repo-level permissions |
| Jira | Project Management | Read/Write | API Token | Included in approved dev bundle |
| Slack | Messaging | Read | Bot Token | Message-read only; no admin permissions |
| Snowflake | Data Warehouse | Read | Service Account | Read-only by policy; write requires approval |
| Google Drive | Document Storage | Read/Write | OAuth | Approved productivity bundle |
| Internal APIs | Proprietary | Read/Write | Internal Auth | Custom MCP servers written in-house |

## Architecture Pattern

[Sandboxed Developer](../docs/patterns/sandboxed-developer.md) + [Hub-and-Spoke](../docs/patterns/hub-and-spoke.md)

Block writes its own internal MCP servers and bundles approved servers for distribution. Access is managed through risk-tiered tool behavior restrictions.

## Governance Controls

- **Access management:** Approved MCP server bundles distributed per role/team
- **Risk classification:** Tool behaviors restricted by risk level
- **Approval gates:** Write operations to sensitive systems require elevated approval
- **Data policies:** LLM data access routed through enterprise-managed infrastructure with data-use protections

## Outcomes

- Thousands of employees use Goose daily across all departments
- Many users report saving **50–75% of time** on common tasks
- Some multi-day projects compressed to hours
- Non-technical teams (support, design, risk) independently run data queries and workflows

## Source Links

1. [MCP in the Enterprise: Real World Adoption at Block — Goose Blog](https://block.github.io/goose/blog/2025/04/21/mcp-in-enterprise/)
2. [How Block Operationalized MCP at Scale — YouTube](https://www.youtube.com/watch?v=IDWqWdLESgY)

## Evidence Quality Notes

All systems, governance controls, and outcome metrics are directly stated in the published Goose blog post. This is the strongest publicly documented enterprise MCP deployment as of March 2026.
