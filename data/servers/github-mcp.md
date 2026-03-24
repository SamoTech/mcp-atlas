# Server Profile: GitHub MCP

## Summary
GitHub MCP connects agents to repositories, issues, pull requests, actions, code search, and project workflows.

## Enterprise use cases
- Code review triage.
- PR drafting and issue routing.
- Repository search and engineering knowledge retrieval.

## Auth model
- OAuth or PAT with scoped repository permissions.

## Common permissions
- Read repository metadata.
- Read and write issues and pull requests.
- Search code and discussions.

## Risk notes
- Write access can trigger workflow side effects.
- Repo-wide tokens may expose sensitive code.

## Typical deployment pattern
- Sandboxed developer bundle.
- Hub-and-spoke gateway in regulated environments.

## Known public references
1. Block Goose enterprise rollout.
