# Server Profile: Jira MCP

## Summary
Jira MCP lets agents search, create, and update work items across engineering and operations teams.

## Enterprise use cases
- Ticket triage.
- Sprint planning support.
- Incident and task creation from chat workflows.

## Auth model
- API token or OAuth.

## Common permissions
- Search issues.
- Create comments and tickets.
- Update status fields.

## Risk notes
- Write access can pollute workflows with noisy tickets.
- Cross-project scope needs careful permission boundaries.

## Typical deployment pattern
- Sandboxed developer bundle.
- Risk-tiered access with confirmation on write.

## Known public references
1. Block Goose enterprise rollout.
