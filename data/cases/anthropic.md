---
title: "Anthropic — Claude.ai & Internal Tooling"
---
# Case Study: Anthropic

## Overview

| Field | Value |
|-------|-------|
| **Company** | Anthropic |
| **Industry** | AI / Foundation Models |
| **Headquarters** | San Francisco, CA |
| **Deployment Date** | 2024 |
| **MCP Version** | Anthropic MCP spec (original authors) |
| **Enterprise Readiness Score** | ⭐⭐⭐⭐⭐ |

---

## Use Case

Anthropic created the Model Context Protocol and deployed it internally before open-sourcing it. Claude.ai's computer use and tool use features are built on MCP primitives. Internally, Anthropic teams use Claude + MCP to connect to their own development tools, documentation, research repositories, and operational dashboards.

## Connected Systems

| System | Type | Direction | Auth Method | Notes |
|--------|------|-----------|-------------|-------|
| Claude.ai Tools | AI Platform | Read/Write | API Key | Computer use, file tools, web search |
| Anthropic API | Foundation Model | Read/Write | API Key | Direct tool-calling |
| Internal Research Repos | Knowledge | Read | Internal Auth | Research papers and datasets |
| Operational Dashboards | Monitoring | Read | Internal Auth | Model performance and safety metrics |
| GitHub (anthropic-tools) | Developer Tools | Read/Write | OAuth | Open-source tooling repos |

## Architecture Pattern

[Hub-and-Spoke](../docs/patterns/hub-and-spoke.md)

Claude acts as the orchestrating hub; MCP servers register as spokes exposing tools. This is the canonical reference architecture for MCP.

## Governance Controls

- **Safety layers:** Constitutional AI and prompt injection filters apply before and after tool calls
- **Tool approval:** Tool schemas reviewed for safety before enabling in Claude.ai
- **Computer use sandboxing:** Computer use runs in isolated virtual desktop environments

## Outcomes

- Claude.ai's tool use is the most widely adopted consumer MCP deployment globally
- MCP spec adoption grew to hundreds of enterprise integrations within months of open-sourcing
- Internal productivity improvements across research and engineering teams

## Source Links

1. [Model Context Protocol — Official Specification](https://modelcontextprotocol.io)
2. [Anthropic MCP Announcement Blog Post](https://www.anthropic.com/news/model-context-protocol)

## Evidence Quality Notes

Anthropic is the original creator of MCP. All claims are verifiable through the official MCP specification and public blog posts.
