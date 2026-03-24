# Server Profile: Stripe MCP

## Summary
Stripe's official MCP server exposes the full Payments API surface — transactions, customers, refunds, payment links, webhook events, and Radar fraud rules — as callable agent tools.

## Enterprise use cases
- Query transaction histories and reconcile payments without Dashboard access.
- Automate customer lookup and refund workflows.
- Debug webhook delivery failures via natural language.
- Generate payment links and invoice customers programmatically.

## Auth model
- Restricted API key with minimum required permission scopes.
- Test mode vs. live mode separation enforced at key configuration level.

## Common permissions
- Read charges, customers, invoices, subscriptions.
- Write refunds, payment links, customer metadata.
- Read webhook event log.
- Read Radar fraud rules (no write by default).

## Risk notes
- Live mode keys can trigger real financial transactions — always use restricted keys.
- Refund and dispute write operations require explicit elevated scope.
- Stripe API logs all calls; no additional audit layer needed.

## Typical deployment pattern
- Sandboxed developer bundle (test mode).
- Restricted live key with read-only scope for analytics agents.
- Hub-and-spoke gateway in regulated fintech environments.

## Known public references
1. Stripe official MCP server: `github.com/stripe/agent-toolkit`.
2. Stripe Agent Toolkit documentation.
