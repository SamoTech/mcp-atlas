# MCP Atlas

<div align="center">

![MCP Atlas Banner](docs/assets/banner.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployments Tracked](https://img.shields.io/badge/Deployments%20Tracked-12-blue)](#case-studies)
[![Stars](https://img.shields.io/github/stars/SamoTech/mcp-atlas?style=social)](https://github.com/SamoTech/mcp-atlas)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-GitHub%20Sponsors-ff69b4)](https://github.com/sponsors/SamoTech)

**The definitive registry of real-world enterprise MCP deployments.**

Verified case studies · Server registries · Architecture patterns · Governance models

[Explore Cases](#case-studies) · [Architecture Patterns](#architecture-patterns) · [Server Registry](#server-registry) · [Contribute](CONTRIBUTING.md)

</div>

---

## What is MCP Atlas?

Model Context Protocol (MCP) is the emerging standard for connecting AI agents to external tools, data, and systems. But most content about MCP is vendor tutorials, speculative demos, or abstract architecture diagrams.

**MCP Atlas is different.** It exists to answer four questions enterprises actually ask:

1. **Who is using MCP in production?** — Real named deployments, not "company X" anonymizations
2. **Which systems are connected?** — Actual tool and data source inventory per deployment
3. **What governance controls exist?** — Access policies, approval gates, risk tiers
4. **Which architecture pattern worked?** — Not what should work — what *did* work

Every entry has an **Enterprise Readiness Score** (1–5) based on proof depth, named systems, governance evidence, and workflow clarity.

---

## Case Studies

| Company | Industry | MCP Use Case | Systems Connected | Readiness Score | Profile |
|---------|----------|--------------|-------------------|:---------------:|---------|
| Block | Fintech | Dev + cross-functional productivity | GitHub, Jira, Slack, Snowflake, Google Drive | ⭐⭐⭐⭐⭐ | [View →](data/cases/block.md) |
| Gong | Revenue Intelligence | Cross-system AI agent unification | Salesforce, HubSpot, Microsoft Copilot | ⭐⭐⭐⭐ | [View →](data/cases/gong.md) |
| Mindbreeze | Enterprise Search | Incident investigation assistant | Ticketing, internal docs, telemetry | ⭐⭐⭐ | [View →](data/cases/mindbreeze.md) |

> **Transparency note:** Cases are scored by evidence quality, not company size or marketing. "Architecturally vague" claims receive a score of 1 regardless of vendor reputation.

---

## Architecture Patterns

Six battle-tested patterns extracted from real deployments:

| Pattern | Description | Best For | Reference |
|---------|-------------|----------|-----------|
| Hub-and-Spoke | Central MCP Gateway routes to N servers | Large orgs with centralized IT | [View →](docs/patterns/hub-and-spoke.md) |
| Federated Registry | Teams own their MCP servers; central discovery only | Platform-engineering orgs | [View →](docs/patterns/federated-registry.md) |
| Risk-Tiered Access | Tools classified by risk; different approval chains | Regulated industries | [View →](docs/patterns/risk-tiered-access.md) |
| Bidirectional Bridge | Agent reads AND writes across platforms | Revenue and CRM workflows | [View →](docs/patterns/bidirectional-bridge.md) |
| Internal API Proxy | MCP wraps proprietary internal APIs | Enterprises avoiding direct LLM data access | [View →](docs/patterns/internal-api-proxy.md) |
| Sandboxed Developer | Per-developer MCP bundles, org-managed | Dev productivity programs | [View →](docs/patterns/sandboxed-developer.md) |

---

## Server Registry

MCP servers documented with enterprise context:

| Server | Category | Used By | Auth | Enterprise Notes |
|--------|----------|---------|------|------------------|
| GitHub MCP | Developer Tools | Block | OAuth | Scoped to repo-level permissions in enterprise rollout |
| Snowflake MCP | Data Warehouse | Block | Service Account | Read-only by policy; write routes require approval |
| Jira MCP | Project Management | Block | API Token | Approved in Block's developer bundle |
| Slack MCP | Messaging | Block | Bot Token | Message-read scoped; no admin perms |
| Salesforce MCP | CRM | Gong | OAuth | Bidirectional; write-back gated by Gong logic |
| Google Drive MCP | Document Storage | Block | OAuth | Included in approved productivity bundle |

---

## Enterprise Readiness Score Rubric

| Score | Meaning |
|-------|---------|
| ⭐ | Claim made, zero technical evidence |
| ⭐⭐ | Architecturally described, no named systems |
| ⭐⭐⭐ | Named systems + workflow described |
| ⭐⭐⭐⭐ | Named systems + governance controls documented |
| ⭐⭐⭐⭐⭐ | All above + measured user/business outcomes |

---

## Project Structure

```
mcp-atlas/
├── data/
│   ├── cases/          # Individual enterprise case study files
│   ├── servers/        # MCP server profiles
│   └── schema/         # JSON schemas for validated data entry
├── docs/
│   ├── patterns/       # Architecture pattern deep-dives
│   ├── governance/     # Governance model templates
│   ├── ARCHITECTURE.md # Project architecture
│   └── assets/        # Images, diagrams
├── web/                # Next.js frontend (Phase 2)
├── api/                # FastAPI backend (Phase 2)
├── scripts/            # Data validation + build scripts
├── CONTRIBUTING.md
├── CHANGELOG.md
└── README.md
```

---

## Roadmap

### Phase 1 — Registry Foundation ✅ (Current)
- [x] Repo structure, schema, contributing guide
- [x] 3 seed case studies (Block, Gong, Mindbreeze)
- [x] 6 architecture patterns documented
- [x] Server registry started
- [ ] 10 total verified enterprise profiles
- [ ] JSON schema validation for all entries
- [ ] First downloadable Enterprise MCP Adoption Report (PDF)

### Phase 2 — Web Platform 🔜
- [ ] Next.js searchable frontend
- [ ] FastAPI backend + Postgres database
- [ ] Semantic search over case studies
- [ ] Company submission form with verification workflow
- [ ] Enterprise Readiness Score calculator

### Phase 3 — Private Workspaces 🔮
- [ ] Private workspace for internal enterprise mapping
- [ ] Compare your MCP stack against public reference architectures
- [ ] Team collaboration on internal case studies
- [ ] Export compliance-ready MCP architecture reports

---

## Contributing

The most valuable contribution is a **verified enterprise case study.** See [CONTRIBUTING.md](CONTRIBUTING.md) for the submission template and evidence standards.

We also welcome:
- New architecture patterns with real-world evidence
- Additional MCP server profiles with enterprise context
- Governance model templates from real policies
- Corrections to existing entries

---

## Monetization

MCP Atlas is free and open-source. Sustainability comes from:

- **GitHub Sponsors** — support the registry maintainer
- **Phase 3 Private Workspaces** — paid tier for enterprise teams
- **Enterprise MCP Adoption Report** — annual premium PDF report
- **Sponsored Architecture Reviews** — verified architecture write-ups by MCP vendors

---

## Sponsor

<a href="https://github.com/sponsors/SamoTech">
  <img src="https://img.shields.io/badge/Sponsor%20MCP%20Atlas-GitHub%20Sponsors-ff69b4?style=for-the-badge&logo=github" />
</a>

---

## Contact

**Ossama Hashim** — [@OssamaHashim](https://twitter.com/OssamaHashim) · [samo.hossam@gmail.com](mailto:samo.hossam@gmail.com)

[![GitHub](https://img.shields.io/badge/GitHub-SamoTech-black?logo=github)](https://github.com/SamoTech)

---

<div align="center">
Built to turn enterprise MCP adoption from speculation into evidence.
</div>
