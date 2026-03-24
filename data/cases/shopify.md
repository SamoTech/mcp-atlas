---
title: "Shopify — Sidekick AI Agent"
---
# Case Study: Shopify

## Overview

| Field | Value |
|-------|-------|
| **Company** | Shopify |
| **Industry** | E-commerce Platform |
| **Headquarters** | Ottawa, Canada |
| **Deployment Date** | 2025 |
| **MCP Version** | Anthropic MCP spec |
| **Enterprise Readiness Score** | ⭐⭐⭐⭐ |

---

## Use Case

Shopify's Sidekick AI assistant is powered in part by MCP tooling that connects the agent to merchant store data — products, orders, customers, analytics, and theme settings. Merchants can ask Sidekick to update product descriptions, generate discount codes, analyze sales, and manage inventory without leaving the admin interface.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Shopify Admin API | Store Management | Read/Write | OAuth (merchant-scoped) | Products, orders, customers |
| Shopify Analytics | BI / Reporting | Read | OAuth | Sales and traffic metrics |
| Shopify Themes | Storefront | Read/Write | OAuth | Theme customization |
| Shopify Inventory | Operations | Read/Write | OAuth | Multi-location stock management |

## Architecture Pattern

[Federated](../docs/patterns/federated.md)

Each merchant's Sidekick instance is scoped to their own store data via merchant-level OAuth tokens. No cross-merchant data leakage.

## Governance Controls

- **Merchant-scoped tokens:** Each agent session bound to a single merchant's OAuth credentials
- **Scope restrictions:** Sidekick requests minimum API scopes per action type
- **Human confirmation:** Destructive actions (bulk delete, price changes) require merchant approval

## Outcomes

- Merchants report significantly reduced time to create and update product catalogs
- Sidekick handles common admin tasks that previously required developer intervention
- High adoption among non-technical merchants on Plus and Advanced plans

## Source Links

1. [Shopify Sidekick Official Page](https://www.shopify.com/sidekick)
2. [Shopify MCP Server Repository](https://github.com/Shopify/dev-mcp)

## Evidence Quality Notes

First-party MCP server with public repository. Sidekick is a GA product with public documentation.
