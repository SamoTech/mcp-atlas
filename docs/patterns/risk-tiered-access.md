---
title: Risk-Tiered Access
summary: MCP tools are classified by risk level (read / write / admin) with progressively stricter auth gates — governs what agents can do, not just what they can see.
---

# Pattern: Risk-Tiered Access

## Summary

MCP tools are grouped into risk tiers. Low-risk read-only tools are freely available to all agents. Higher-risk write and admin tools require additional authentication, human approval, or are blocked entirely for automated agents.

## Tiers

| Tier | Examples | Auth Required |
|------|----------|---------------|
| Read | Search docs, query status | API key |
| Write | Create ticket, send message | OAuth + scope |
| Admin | Deploy code, delete records | MFA + human approval |

## When to use

- When agents need write access but blast radius must be controlled
- Regulated environments with data classification requirements
- When different agent types (human-in-the-loop vs. fully automated) need different permissions

## Real-world reference

Linear and Cloudflare both implement risk-tiered MCP access in their published server implementations.
