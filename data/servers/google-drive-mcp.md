# Server Profile: Google Drive MCP

## Summary
Google Drive MCP lets agents retrieve, summarize, and organize enterprise document context.

## Enterprise use cases
- Policy lookup.
- Knowledge retrieval.
- Document drafting and version-aware summarization.

## Auth model
- OAuth with file- and folder-level scopes.

## Common permissions
- Read files.
- Search document metadata.
- Create or update selected documents.

## Risk notes
- Over-broad scopes may expose sensitive docs.
- Write access can overwrite source material.

## Typical deployment pattern
- Productivity bundle.
- Risk-tiered read/write separation.

## Known public references
1. Block Goose enterprise rollout.
