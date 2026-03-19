# Pattern: Sandboxed Developer

## Summary

Each developer (or team) receives a pre-approved MCP server bundle managed by the organization. Developers cannot add arbitrary servers. The bundle is versioned, audited, and updated centrally.

## Diagram

```
[Org MCP Team]
      │ publishes approved bundles
      ▼
[Developer Environment]
  ├── GitHub MCP  (approved)
  ├── Jira MCP    (approved)
  ├── Slack MCP   (approved)
  └── Snowflake MCP (approved, read-only)
```

## When to use

- Developer productivity programs at scale
- When security and compliance teams need to pre-screen all tool access
- When onboarding speed matters (no per-developer setup decisions)

## Trade-offs

| Pro | Con |
|-----|-----|
| Consistent security posture | Less developer flexibility |
| Easy to audit and update | Approval lag for new tools |
| Fast onboarding | May frustrate power users |

## Real-world reference

Block distributes approved MCP server bundles across its developer organization.
