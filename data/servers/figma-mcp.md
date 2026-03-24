# Server Profile: Figma MCP

## Summary
Figma's MCP server gives AI coding agents read access to design files, components, variables, and dev-mode metadata to bridge the design-to-code workflow.

## Enterprise use cases
- Generate React/CSS components directly from Figma design tokens.
- Retrieve component specs and measurements for code generation.
- Extract design system variables for consistent styling automation.
- Inspect layer structure and assets for design QA agents.

## Auth model
- Figma Personal Access Token or OAuth app.
- Read-only access by default; no write operations on design files.

## Common permissions
- Read file content, frames, components, styles.
- Read dev mode metadata and variable collections.
- Export assets (images, SVGs).

## Risk notes
- Token scope covers all files the user can access — use a dedicated service account for agents.
- Proprietary design assets may be exposed if token is shared broadly.

## Typical deployment pattern
- Developer bundle alongside GitHub MCP for design-to-code pipelines.
- Hub-and-spoke creative workflow integration.

## Known public references
1. Figma Dev Mode MCP announcement.
2. Figma developer documentation: MCP integration.
