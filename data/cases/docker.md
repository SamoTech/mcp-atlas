---
title: "Docker — AI Agent Dev Environment"
---
# Case Study: Docker

## Overview

| Field | Value |
|-------|-------|
| **Company** | Docker |
| **Industry** | Developer Tools / Infrastructure |
| **Headquarters** | San Francisco, CA |
| **Deployment Date** | 2025 |
| **MCP Version** | Anthropic MCP spec |
| **Enterprise Readiness Score** | ⭐⭐⭐⭐ |

---

## Use Case

Docker ships an official MCP server that exposes container management, image operations, Docker Hub access, and Docker Scout security scanning to AI agents. Developers use AI assistants to build images, run containers, inspect logs, check vulnerabilities, and push to registries — all through natural-language commands.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Docker Engine | Container Runtime | Read/Write | Docker socket | Local container management |
| Docker Hub | Registry | Read/Write | PAT | Image push/pull and search |
| Docker Scout | Security Scanning | Read | PAT | CVE and vulnerability reports |
| Docker Compose | Orchestration | Read/Write | Docker socket | Multi-container stack management |

## Architecture Pattern

[Sandboxed Developer](../docs/patterns/sandboxed-developer.md)

Each developer runs the MCP server locally against their own Docker socket. Enterprise deployments can point to remote Docker contexts.

## Governance Controls

- **Socket access controls:** Docker socket exposure limited to approved agent processes
- **Read-only mode:** Scout scanning tools are read-only by design
- **Network policy:** Agent-started containers inherit Docker network policies

## Outcomes

- Developers build, run, and debug containers via AI assistant without memorizing CLI flags
- Docker Scout integration enables AI-driven security triage
- Reduced friction for developers new to containerization

## Source Links

1. [Docker MCP Server Repository](https://github.com/docker/mcp-servers)
2. [Docker AI Agent Tools Blog Post](https://www.docker.com/blog/docker-mcp-catalog-and-toolkit-ga/)

## Evidence Quality Notes

First-party open-source MCP server with public repository and official Docker blog post.
