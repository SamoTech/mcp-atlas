# MCP Atlas

<div align="center">

![MCP Atlas Banner](docs/assets/banner.png)

[![Live Site](https://img.shields.io/badge/Live%20Site-mcp--atls.vercel.app-cyan?style=flat&logo=vercel)](https://mcp-atls.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Cases Verified](https://img.shields.io/badge/Cases%20Verified-10-blue)](#case-studies)
[![Servers Documented](https://img.shields.io/badge/Servers%20Documented-6-green)](#server-registry)
[![Stars](https://img.shields.io/github/stars/SamoTech/mcp-atlas?style=social)](https://github.com/SamoTech/mcp-atlas)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-GitHub%20Sponsors-ff69b4)](https://github.com/sponsors/SamoTech)

**The definitive registry of real-world enterprise MCP deployments.**

Verified case studies · Server registries · Architecture patterns · Governance models

🌐 **[mcp-atls.vercel.app](https://mcp-atls.vercel.app)** — Live searchable web platform

[Explore Cases](#case-studies) · [Architecture Patterns](#architecture-patterns) · [Server Registry](#server-registry) · [Reports](#reports) · [Contribute](CONTRIBUTING.md)

</div>

---

## What is MCP Atlas?

Model Context Protocol (MCP) is the emerging standard for connecting AI agents to external tools, data, and systems. But most content about MCP is vendor tutorials, speculative demos, or abstract architecture diagrams.

**MCP Atlas is different.** It exists to answer four questions enterprises actually ask:

1. **Who is using MCP in production?** — Real named deployments, not "company X" anonymizations
2. **Which systems are connected?** — Actual tool and data source inventory per deployment
3. **What governance controls exist?** — Access policies, approval gates, risk tiers
4. **Which architecture pattern worked?** — Not what should work — what *did* work

Every entry has an **Evidence Score** (1–10) based on proof depth, named systems, governance evidence, and outcome clarity. Use the **[Score Calculator](https://mcp-atls.vercel.app/score)** to self-assess before submitting.

---

## What’s New

### v0.4.0 — Phase 2 Complete
- ✅ **10 verified enterprise case studies** — Block, Gong, Mindbreeze, Cloudflare, Linear, Replit, Sourcegraph, Zapier, Atlassian, Notion
- ✅ **Full-text search** — instant search across cases, servers, and patterns at [/search](https://mcp-atls.vercel.app/search)
- ✅ **Compare Cases** — side-by-side comparison of any two deployments at [/compare](https://mcp-atls.vercel.app/compare)
- ✅ **Changelog / What’s New** — every case grouped by date at [/changelog](https://mcp-atls.vercel.app/changelog)
- ✅ **Evidence Score Calculator** — self-assess a case before submitting at [/score](https://mcp-atlas.vercel.app/score)
- ✅ **Dark / Light mode** — toggle persisted to localStorage
- ✅ **Mobile-responsive nav** — hamburger menu with active-link highlighting
- ✅ **Per-page OG images** — dynamic social preview cards for every page
- ✅ **SEO** — `sitemap.xml`, `robots.txt`, JSON-LD on all detail pages
- ✅ **RSS feed** — subscribe to new cases at [/feed.xml](https://mcp-atls.vercel.app/feed.xml)

### v0.3.0
- ✅ Live Next.js web platform — [mcp-atls.vercel.app](https://mcp-atls.vercel.app)
- ✅ Case study cards with evidence score + tag filtering
- ✅ Server registry, architecture patterns, and reports pages
- ✅ Full dark-mode UI with score badges and responsive layout

### v0.2.0
- ✅ GitHub Actions CI — validates every push and pull request
- ✅ Structured issue templates for new case studies
- ✅ Server registry profiles for six enterprise MCP servers
- ✅ Governance docs: access models and evidence policy
- ✅ Machine-readable `data/index.json`
- ✅ First report: [Enterprise MCP Adoption Report — Q1 2026](reports/2026-q1-enterprise-mcp-adoption.md)

---

## Case Studies

| Company | Industry | Pattern | Score | Profile |
|---------|----------|---------|:-----:|---------|
| Block | Fintech | Hub-and-Spoke | 5/10 | [View →](data/cases/block.md) |
| Gong | Revenue Intelligence | Bidirectional Bridge | 4/10 | [View →](data/cases/gong.md) |
| Mindbreeze | Enterprise Search | Internal API Proxy | 3/10 | [View →](data/cases/mindbreeze.md) |
| Cloudflare | Infrastructure | Internal API Proxy + Risk-Tiered | 7/10 | [View →](data/cases/cloudflare.md) |
| Linear | Developer Tools | Internal API Proxy | 6/10 | [View →](data/cases/linear.md) |
| Replit | Developer Tools | Sandboxed Developer | 7/10 | [View →](data/cases/replit.md) |
| Sourcegraph | Code Intelligence | Hub-and-Spoke | 6/10 | [View →](data/cases/sourcegraph.md) |
| Zapier | Automation | Federated Registry | 6/10 | [View →](data/cases/zapier.md) |
| Atlassian | Project Management | Internal API Proxy | 7/10 | [View →](data/cases/atlassian.md) |
| Notion | Knowledge Management | Internal API Proxy | 6/10 | [View →](data/cases/notion.md) |

> **Transparency note:** Cases are scored by evidence quality, not company size or marketing.

---

## Architecture Patterns

| Pattern | Description | Best For | Reference |
|---------|-------------|----------|-----------|
| Hub-and-Spoke | Central MCP Gateway routes to N servers | Large orgs with centralized IT | [View →](docs/patterns/hub-and-spoke.md) |
| Federated Registry | Teams own their MCP servers; central discovery only | Platform-engineering orgs | [View →](docs/patterns/federated-registry.md) |
| Risk-Tiered Access | Tools classified by risk; different approval chains | Regulated industries | [View →](docs/patterns/risk-tiered-access.md) |
| Bidirectional Bridge | Agent reads AND writes across platforms | Revenue and CRM workflows | [View →](docs/patterns/bidirectional-bridge.md) |
| Internal API Proxy | MCP wraps proprietary internal APIs | Enterprises with existing REST APIs | [View →](docs/patterns/internal-api-proxy.md) |
| Sandboxed Developer | Per-developer MCP bundles, org-managed | Dev productivity programs | [View →](docs/patterns/sandboxed-developer.md) |

---

## Server Registry

| Server | Category | Used By | Auth | Profile |
|--------|----------|---------|------|---------|
| GitHub MCP | Developer Tools | Block, Sourcegraph | OAuth | [View →](data/servers/github-mcp.md) |
| Snowflake MCP | Data Warehouse | Block | Service Account | [View →](data/servers/snowflake-mcp.md) |
| Jira MCP | Project Management | Block, Atlassian | API Token | [View →](data/servers/jira-mcp.md) |
| Slack MCP | Messaging | Block | Bot Token | [View →](data/servers/slack-mcp.md) |
| Salesforce MCP | CRM | Gong | OAuth | [View →](data/servers/salesforce-mcp.md) |
| Google Drive MCP | Document Storage | Block | OAuth | [View →](data/servers/google-drive-mcp.md) |

---

## Reports

| Report | Date | Link |
|--------|------|------|
| Enterprise MCP Adoption — Q1 2026 | March 2026 | [Read →](reports/2026-q1-enterprise-mcp-adoption.md) |

---

## Evidence Score Rubric

| Score | Meaning |
|-------|---------|
| 1–2 | Claim made, zero technical evidence |
| 3–4 | Architecturally described, no named systems |
| 5–6 | Named systems + workflow described |
| 7–8 | Named systems + governance controls documented |
| 9–10 | All above + measured user/business outcomes published |

---

## Governance

- [Access Models](docs/governance/access-models.md) — Read-only, write-confirm, admin-gated
- [Evidence Policy](docs/governance/evidence-policy.md) — Scoring rules, inference rules, correction policy

---

## Project Structure

```
mcp-atlas/
├── data/
│   ├── cases/          # 10 verified enterprise case study files
│   ├── servers/        # 6 MCP server profiles
│   ├── schema/         # Templates for data entry
│   └── index.json      # Machine-readable catalog
├── docs/
│   ├── patterns/       # 6 architecture pattern deep-dives
│   ├── governance/     # Evidence policy and access models
│   └── assets/         # Banner, logo
├── reports/            # Enterprise MCP adoption reports
├── scripts/            # Validation scripts
├── web/                # Next.js web platform (Vercel)
│   ├── app/            # App Router pages
│   ├── components/     # Shared UI components
│   └── lib/            # Data loaders
├── CONTRIBUTING.md
├── CHANGELOG.md
└── README.md
```

---

## Roadmap

### Phase 1 — Registry Foundation ✅
- [x] Repo structure, schema, contributing guide
- [x] 3 seed case studies (Block, Gong, Mindbreeze)
- [x] 6 architecture patterns documented
- [x] 6 MCP server profiles
- [x] Governance docs and evidence policy
- [x] CI validation workflow
- [x] Q1 2026 Enterprise MCP Adoption Report
- [x] Machine-readable `data/index.json`
- [x] 10 total verified enterprise profiles

### Phase 2 — Web Platform ✅ Complete
- [x] Next.js searchable frontend — **live at [mcp-atls.vercel.app](https://mcp-atls.vercel.app)**
- [x] Case study cards with evidence score + tag filtering
- [x] Server registry, patterns, and reports pages
- [x] Dark / light mode UI, score badges, responsive layout
- [x] Full-text search across cases, servers, and patterns
- [x] Enterprise Readiness Score calculator
- [x] Company submission form with GitHub issue workflow
- [x] Compare Cases — side-by-side deployment comparison
- [x] Changelog / What’s New page
- [x] Per-page OG images, `sitemap.xml`, `robots.txt`, JSON-LD
- [x] RSS feed for new case subscriptions
- [x] Mobile hamburger nav with active-link highlighting

### Phase 3 — Private Workspaces 🔮 Next
- [ ] Private workspace for internal enterprise mapping
- [ ] Compare your MCP stack against public reference architectures
- [ ] Team collaboration on internal case studies
- [ ] Export compliance-ready MCP architecture reports
- [ ] Paid tier with Stripe billing

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
