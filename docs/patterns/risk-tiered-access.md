# Pattern: Risk-Tiered Access

## Summary

MCP tools are classified into risk tiers (e.g., read-only, write, admin). Each tier has different approval requirements and authentication paths. Agents are granted access to tiers, not individual tools.

## Tiers (example)

| Tier | Examples | Approval Required |
|------|----------|------------------|
| Tier 1 — Read | Search, query, read docs | Automatic |
| Tier 2 — Write | Create tickets, update records | User confirmation |
| Tier 3 — Admin | Deploy, delete, bulk export | Manager approval |

## When to use

- Regulated industries (finance, healthcare, legal)
- Enterprises with existing RBAC or zero-trust infrastructure
- Any deployment where write operations carry compliance risk

## Real-world reference

Block explicitly uses risk-tiered tool behavior restrictions across its enterprise Goose deployment.
