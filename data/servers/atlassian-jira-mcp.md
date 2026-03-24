# Server Profile: Atlassian Jira MCP

## Summary
Atlassian's official Jira MCP server allows AI agents to read and write issues, projects, sprints, and workflow transitions, hosted on Atlassian Forge infrastructure.

## Enterprise use cases
- Automated sprint planning and issue creation from requirements documents.
- Incident ticket creation and routing from monitoring agents.
- Cross-project dependency querying for engineering planning.
- Release note generation from completed sprint issues.

## Auth model
- Atlassian OAuth 2.0 (3-legged); all actions run as the authenticated user.
- Forge runtime enforces Atlassian's existing permission model.

## Common permissions
- Read issues, projects, sprints, epics.
- Create and transition issues.
- Comment on issues and update fields.

## Risk notes
- Project admin tokens can modify workflow configurations — use minimum scope.
- All actions logged in Atlassian admin audit log.
- Forge sandbox ensures no data leaves Atlassian infrastructure.

## Typical deployment pattern
- Enterprise hub-and-spoke with Confluence MCP.
- Developer bundle alongside GitHub MCP for full dev lifecycle coverage.

## Known public references
1. Atlassian developer blog MCP announcement.
2. Official repository: `atlassian/mcp-server-jira`.
