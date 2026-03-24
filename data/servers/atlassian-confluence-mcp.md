# Server Profile: Atlassian Confluence MCP

## Summary
Atlassian's official Confluence MCP server gives agents access to the enterprise knowledge base — pages, spaces, search, and version history — hosted on Forge.

## Enterprise use cases
- Knowledge retrieval for engineering and support AI assistants.
- Automated page creation for architecture decisions and runbooks.
- Compliance documentation generation from templates.
- Search across org-wide documentation for AI-driven onboarding.

## Auth model
- Atlassian OAuth 2.0; space and page permissions enforced natively.
- Users only see content their Atlassian account can access.

## Common permissions
- Read pages, spaces, attachments.
- Create and update pages.
- Search across accessible spaces.

## Risk notes
- Broad space access tokens can expose sensitive internal documentation.
- Recommend scoping to specific spaces for external-facing agents.

## Typical deployment pattern
- Paired with Jira MCP for full project + knowledge coverage.
- Hub-and-spoke enterprise knowledge gateway.

## Known public references
1. Official repository: `atlassian/mcp-server-confluence`.
