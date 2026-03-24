# Server Profile: Docker MCP

## Summary
Docker's MCP server exposes container lifecycle management — build, run, inspect, stop, and logs — as agent tools within a secure sandboxed environment.

## Enterprise use cases
- AI coding agents that build and test Docker images during development.
- Automated container health checks and log retrieval.
- Environment setup and teardown for CI pipelines driven by agents.
- Image vulnerability scanning triggered by AI security agents.

## Auth model
- Docker Desktop local daemon (no remote credentials required for local use).
- Docker Hub OAuth for registry push/pull operations.

## Common permissions
- Build and run containers.
- Read container logs and inspect state.
- Pull images from Docker Hub.
- Push images (requires Hub auth).

## Risk notes
- Container run with volume mounts can expose host filesystem — enforce no-mount policy.
- Privileged container access must be explicitly blocked at agent config level.
- Recommend read-only log/inspect mode for production monitoring agents.

## Typical deployment pattern
- Sandboxed developer bundle.
- CI/CD agent integration with scoped build permissions.

## Known public references
1. Docker MCP Toolkit announcement.
2. Docker Desktop MCP integration documentation.
