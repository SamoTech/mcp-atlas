# Case Study: Gong

## Overview

| Field | Value |
|-------|-------|
| **Company** | Gong.io |
| **Industry** | Revenue Intelligence / Sales AI |
| **Headquarters** | San Francisco, CA |
| **Deployment Date** | October 2025 |
| **MCP Version** | Anthropic MCP spec |
| **Enterprise Readiness Score** | ⭐⭐⭐⭐ |

---

## Use Case

Gong introduced MCP support to solve bidirectional enterprise AI fragmentation. Gong's own AI features now pull in data from external tools (inbound), while external enterprise agents — Microsoft Copilot, HubSpot AI, Salesforce — can query Gong's revenue intelligence data (outbound).

This turns Gong into a shared intelligence layer across the full revenue stack rather than a siloed application.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Salesforce | CRM | Both | OAuth | Bidirectional; write-back gated by Gong logic |
| HubSpot | CRM / Marketing | Both | OAuth | Part of announced MCP integration |
| Microsoft Copilot | AI Agent | Inbound query | MCP Protocol | External agents query Gong via MCP Server |
| Internal Gong data | Revenue Intelligence | Read | MCP Gateway | Deal data, call intelligence, pipeline |

## Architecture Pattern

[Bidirectional Bridge](../docs/patterns/bidirectional-bridge.md)

Gong exposes an MCP Gateway (for inbound agent queries) and an MCP Server (for outbound context enrichment). This makes MCP a bidirectional protocol rather than a one-way data source.

## Governance Controls

- **Access management:** MCP Gateway controls which external agents can query Gong
- **Risk classification:** Revenue data access gated by deal-level permissions
- **Approval gates:** Write-back to CRM requires Gong-side logic validation
- **Data policies:** Not publicly detailed beyond access controls

## Outcomes

- Announced as a platform capability; adoption metrics not yet publicly disclosed
- Enables cross-platform AI workflows without manual data export or API stitching

## Source Links

1. [Gong Press Release — MCP Support Announcement](https://www.prnewswire.com/news-releases/gong-introduces-model-context-protocol-mcp-support-to-unify-enterprise-ai-agents-from-hubspot-microsoft-salesforce-and-others-302282013.html)
2. [Gong Official — MCP Announcement](https://www.gong.io/press/gong-introduces-model-context-protocol-mcp-support-to-unify-enterprise-ai-agents-from-hubspot-microsoft-salesforce-and-others/)

## Evidence Quality Notes

Systems and architecture are confirmed by press release. Governance details and outcome metrics are not publicly disclosed. Score of 4/5 reflects named systems + architecture with partial governance evidence.
