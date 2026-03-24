# Server Profile: Cloudflare MCP

## Summary
Cloudflare's official MCP server exposes its developer platform — Workers, KV, R2, AI Gateway, and Durable Objects — as agent-callable tools.

## Enterprise use cases
- Deploy and update Cloudflare Workers from AI coding agents.
- Query AI Gateway logs and cost metrics programmatically.
- Manage KV namespaces and R2 buckets for agent-driven infrastructure tasks.
- Inspect firewall rules and WAF analytics.

## Auth model
- Cloudflare API token with scoped service permissions.
- Risk-tiered: read ops need basic token; destructive ops require elevated OAuth scope.

## Common permissions
- Read Workers, KV, R2, AI Gateway, DNS records.
- Write/deploy Workers and manage KV entries.
- Delete requires explicit elevated scope.

## Risk notes
- Deploy access enables code execution on Cloudflare's global network — treat as high-risk write.
- Recommend separate read-only tokens for analytics agents vs. deployment agents.

## Typical deployment pattern
- Sandboxed developer tool for CI/CD automation.
- Risk-tiered gateway in DevOps workflows.

## Known public references
1. Cloudflare blog: MCP server announcement.
2. Official repository: `cloudflare/mcp-server-cloudflare`.
