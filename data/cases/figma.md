---
title: "Figma — Design Agent & Dev Mode MCP"
---
# Case Study: Figma

## Overview

| Field | Value |
|-------|-------|
| **Company** | Figma |
| **Industry** | Design Tools / SaaS |
| **Headquarters** | San Francisco, CA |
| **Deployment Date** | 2025 |
| **MCP Version** | Anthropic MCP spec |
| **Enterprise Readiness Score** | ⭐⭐⭐⭐ |

---

## Use Case

Figma ships an official MCP server for Dev Mode that allows AI coding agents to read design files, extract component properties, retrieve design tokens, and generate code from frames. The primary use case is bridging the design-to-code gap — developers can ask their AI assistant to implement a screen directly from the Figma spec.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Figma Files | Design | Read | OAuth (user-scoped) | Frame, component, and style access |
| Figma Components | Design System | Read | OAuth | Component properties and variants |
| Figma Variables | Design Tokens | Read | OAuth | Color, spacing, typography tokens |
| Figma Annotations | Documentation | Read | OAuth | Dev Mode annotations and specs |

## Architecture Pattern

[Hub-and-Spoke](../docs/patterns/hub-and-spoke.md)

The Figma MCP server acts as the single read-access hub for all design data. AI coding agents (Claude, Cursor, Copilot) connect as spokes.

## Governance Controls

- **User-scoped OAuth:** Each connection uses the authenticated user's Figma permissions
- **Read-only for agents:** MCP server exposes only read tools; no write to Figma files
- **Dev Mode gating:** Full access requires Figma Dev Mode license

## Outcomes

- Developers can implement designs without manually re-reading specs
- Design tokens extracted automatically for use in codebases
- Reduced handoff friction between design and engineering teams

## Source Links

1. [Figma Dev Mode MCP Server Announcement](https://www.figma.com/blog/introducing-figma-ai/)
2. [Figma MCP Server Repository](https://github.com/figma/figma-developer-mcp)

## Evidence Quality Notes

First-party MCP server with public GitHub repository. GA product with documented MCP integration.
