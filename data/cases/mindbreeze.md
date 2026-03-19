# Case Study: Mindbreeze

## Overview

| Field | Value |
|-------|-------|
| **Company** | Mindbreeze |
| **Industry** | Enterprise Search / AI |
| **Headquarters** | Linz, Austria |
| **Deployment Date** | 2025 |
| **MCP Version** | Anthropic MCP spec |
| **Enterprise Readiness Score** | ⭐⭐⭐ |

---

## Use Case

Mindbreeze documents an enterprise operations workflow where an internal AI assistant uses MCP servers to perform multi-system incident investigation: gathering incident data, opening tickets, and querying internal documentation — all in a single governed agent workflow.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Ticketing System | ITSM | Read/Write | Internal Auth | Creates and queries incident tickets |
| Internal Docs | Knowledge Base | Read | Internal Auth | Policy and runbook lookup |
| Telemetry / Monitoring | Observability | Read | Internal Auth | Service health and incident data |

## Architecture Pattern

[Hub-and-Spoke](../docs/patterns/hub-and-spoke.md) + [Internal API Proxy](../docs/patterns/internal-api-proxy.md)

## Governance Controls

- **Access management:** Internally managed; specific controls not publicly detailed
- **Risk classification:** Not publicly specified
- **Approval gates:** Not publicly specified
- **Data policies:** Enterprise-internal; no public disclosure

## Outcomes

- Reduced manual steps in incident investigation workflows
- Agents navigate across systems without human context-switching

## Source Links

1. [The Role of Model Context Protocol in Enterprise AI — Mindbreeze Blog](https://www.mindbreeze.com/blog/the-role-of-model-context-protocol-in-enterprise-ai)

## Evidence Quality Notes

This case is presented as an architectural example on the Mindbreeze blog rather than a named customer story. Workflow pattern is credible and detailed but governance and outcome data are not disclosed. Treat as a solid reference architecture, not a measured deployment.
