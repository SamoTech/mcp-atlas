# Server Profile: Snowflake MCP

## Summary
Snowflake MCP exposes warehouse queries and data exploration to agents under enterprise controls.

## Enterprise use cases
- Analyst self-service.
- Support and operations query acceleration.
- Metric lookup for internal copilots.

## Auth model
- Service account or delegated enterprise identity.

## Common permissions
- Read-only SQL execution.
- Catalog discovery.

## Risk notes
- Broad table access can leak regulated data.
- Write paths should be disabled or approval-gated.

## Typical deployment pattern
- Read-only risk tier.
- Internal API proxy for policy enforcement.

## Known public references
1. Block Goose enterprise rollout.
