# Server Profile: Linear MCP

## Summary
Linear's native MCP server connects AI coding agents to project issues, cycles, teams, and roadmaps via Linear's GraphQL API.

## Enterprise use cases
- Create and update issues from within AI coding environments.
- Query sprint cycle status and team workload.
- Triage and label incoming issues automatically.
- Fetch roadmap context to inform code generation decisions.

## Auth model
- Linear API key (Personal or OAuth app).
- All operations scoped to the authenticated workspace.

## Common permissions
- Read issues, teams, cycles, projects.
- Create and update issues, comments, labels.
- No cross-workspace access by design.

## Risk notes
- Wide API key scope can allow issue deletion — prefer read+write scoped tokens.
- No built-in rate-limit guardrail; agent loops can spam issue creation.

## Typical deployment pattern
- Developer bundle alongside GitHub MCP.
- Internal API proxy for project management automation.

## Known public references
1. Linear MCP Server changelog: `linear.app/changelog/mcp`.
2. Official repository: `linear/linear-mcp-server`.
