# Server Profile: Notion MCP

## Summary
Notion's official MCP server lets agents read, create, search, and update pages, databases, and blocks across a connected workspace, scoped strictly to shared content.

## Enterprise use cases
- Knowledge base search and retrieval for AI assistants.
- Automated document generation and template population.
- Database record creation (e.g., project trackers, CRM lite).
- Meeting notes ingestion and structured summarization.

## Auth model
- Notion OAuth 2.0; workspace-scoped integration token.
- Access is limited to pages/databases explicitly shared with the integration.

## Common permissions
- Read page content and database entries.
- Create and update pages and database rows.
- Search across shared workspace content.

## Risk notes
- Unshared pages are completely invisible to the MCP server by design.
- Write operations create full history entries — no silent edits.
- Token leakage exposes all shared workspace content to the holder.

## Typical deployment pattern
- Productivity bundle with Google Drive and Slack.
- Internal API proxy for knowledge retrieval agents.

## Known public references
1. Notion MCP Server launch: `notion.so/blog/mcp`.
2. Official repository: `makenotion/notion-mcp-server`.
