# MCP Atlas

<div align="center">

![MCP Atlas Banner](docs/assets/banner.png)

[![Live Site](https://img.shields.io/badge/Live%20Site-mcp--atls.vercel.app-cyan?style=flat&logo=vercel)](https://mcp-atls.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Cases Verified](https://img.shields.io/badge/Cases%20Verified-20-blue)](#case-studies)
[![Servers Documented](https://img.shields.io/badge/Servers%20Documented-16-green)](#server-registry)
[![Reports](https://img.shields.io/badge/Reports-3-orange)](#reports)
[![Stars](https://img.shields.io/github/stars/SamoTech/mcp-atlas?style=social)](https://github.com/SamoTech/mcp-atlas)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-GitHub%20Sponsors-ff69b4)](https://github.com/sponsors/SamoTech)

**The definitive registry of real-world enterprise MCP deployments.**

Verified case studies · Server registries · Architecture patterns · Governance models · Security reports

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

## What's New

### v0.5.0 — Data Expansion
- ✅ **20 verified enterprise case studies** — full index including GitHub, Stripe, Shopify, Figma, OpenAI, Microsoft, Anthropic, Salesforce, Docker, HubSpot, and more
- ✅ **16 MCP server profiles** — expanded registry with Stripe, Notion, Linear, Atlassian (Jira + Confluence), Cloudflare, Docker, Figma, OpenAI, HubSpot
- ✅ **3 Q1 2026 research reports** — Enterprise Adoption, Security Risk Landscape, Architecture Patterns Deep Dive
- ✅ **`@tailwindcss/typography`** added — report pages now render tables and rich markdown correctly
- ✅ **`loadReports` sanitize fix** — remark-html `sanitize: false` enables full HTML/table rendering in reports

### v0.4.0 — Phase 2 Complete
- ✅ **Full-text search** — instant search across cases, servers, and patterns at [/search](https://mcp-atls.vercel.app/search)
- ✅ **Compare Cases** — side-by-side comparison of any two deployments at [/compare](https://mcp-atls.vercel.app/compare)
- ✅ **Changelog / What's New** — every case grouped by date at [/changelog](https://mcp-atls.vercel.app/changelog)
- ✅ **Evidence Score Calculator** — self-assess a case before submitting at [/score](https://mcp-atls.vercel.app/score)
- ✅ **Dark / Light mode** — toggle persisted to localStorage
- ✅ **Mobile-responsive nav** — hamburger menu with active-link highlighting
- ✅ **Per-page OG images** — dynamic social preview cards for every page
- ✅ **SEO** — `sitemap.xml`, `robots.txt`, JSON-LD on all detail pages
- ✅ **RSS feed** — subscribe to new cases at [/feed.xml](https://mcp-atls.vercel.app/feed.xml)

### v0.3.0
- ✅ Live Next.js web platform — [mcp-atls.vercel.app](https://mcp-atls.vercel.app)
- ✅ Case study cards with evidence score + tag filtering
- ✅ Server registry, architecture patterns, and reports pages

---

## Case Studies

| Company | Industry | Pattern | Score | Profile |
|---------|----------|---------|:-----:|---------|
| Microsoft | Enterprise | Federated Registry | 9/10 | [View →](data/cases/microsoft.md) |
| Anthropic | AI | Hub-and-Spoke | 9/10 | [View →](data/cases/anthropic.md) |
| GitHub | Developer Tools | Hub-and-Spoke | 8/10 | [View →](data/cases/github.md) |
| Stripe | Fintech | Sandboxed Developer | 8/10 | [View →](data/cases/stripe.md) |
| OpenAI | AI | Hub-and-Spoke | 8/10 | [View →](data/cases/openai.md) |
| Salesforce | CRM | Federated Registry | 8/10 | [View →](data/cases/salesforce.md) |
| Cloudflare | Infrastructure | Risk-Tiered | 7/10 | [View →](data/cases/cloudflare.md) |
| Replit | Developer Tools | Sandboxed Developer | 7/10 | [View →](data/cases/replit.md) |
| Atlassian | Enterprise | Hub-and-Spoke | 7/10 | [View →](data/cases/atlassian.md) |
| Shopify | E-Commerce | Federated Registry | 7/10 | [View →](data/cases/shopify.md) |
| Figma | Developer Tools | Hub-and-Spoke | 7/10 | [View →](data/cases/figma.md) |
| Sourcegraph | Developer Tools | Hub-and-Spoke | 6/10 | [View →](data/cases/sourcegraph.md) |
| Zapier | Automation | Federated Registry | 6/10 | [View →](data/cases/zapier.md) |
| Notion | Productivity | Hub-and-Spoke | 6/10 | [View →](data/cases/notion.md) |
| Linear | Developer Tools | Hub-and-Spoke | 6/10 | [View →](data/cases/linear.md) |
| HubSpot | CRM | Bidirectional Bridge | 6/10 | [View →](data/cases/hubspot.md) |
| Docker | Infrastructure | Sandboxed Developer | 6/10 | [View →](data/cases/docker.md) |
| Block | Fintech | Hub-and-Spoke | 5/10 | [View →](data/cases/block.md) |
| Gong | Revenue Intelligence | Bidirectional Bridge | 4/10 | [View →](data/cases/gong.md) |
| Mindbreeze | Enterprise Search | Hub-and-Spoke | 3/10 | [View →](data/cases/mindbreeze.md) |

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

| Server | Category | Auth Model | Risk Level | Profile |
|--------|----------|------------|------------|---------|
| GitHub MCP | Developer Tools | OAuth / Fine-grained PAT | Medium | [View →](data/servers/github-mcp.md) |
| Snowflake MCP | Data Warehouse | Service Account / OAuth | Medium | [View →](data/servers/snowflake-mcp.md) |
| Jira MCP | Project Management | API Token | Low–Medium | [View →](data/servers/jira-mcp.md) |
| Slack MCP | Collaboration | Bot Token / OAuth | Medium | [View →](data/servers/slack-mcp.md) |
| Salesforce MCP | CRM | OAuth | High | [View →](data/servers/salesforce-mcp.md) |
| Google Drive MCP | Documents | OAuth | Medium | [View →](data/servers/google-drive-mcp.md) |
| Stripe MCP | Fintech | Restricted API Key | High | [View →](data/servers/stripe-mcp.md) |
| Notion MCP | Productivity | OAuth / Integration Token | Low–Medium | [View →](data/servers/notion-mcp.md) |
| Linear MCP | Project Management | API Key / OAuth | Low | [View →](data/servers/linear-mcp.md) |
| Atlassian Jira MCP | Project Management | OAuth (Forge) | Medium | [View →](data/servers/atlassian-jira-mcp.md) |
| Atlassian Confluence MCP | Knowledge Base | OAuth (Forge) | Medium | [View →](data/servers/atlassian-confluence-mcp.md) |
| Cloudflare MCP | Infrastructure | Risk-Tiered API Token | High | [View →](data/servers/cloudflare-mcp.md) |
| Docker MCP | Developer Tools | Local Daemon / Hub OAuth | Medium | [View →](data/servers/docker-mcp.md) |
| Figma MCP | Design | PAT / OAuth (Read-only) | Low | [View →](data/servers/figma-mcp.md) |
| OpenAI MCP | AI Platform | Project-Scoped API Key | High | [View →](data/servers/openai-mcp.md) |
| HubSpot MCP | CRM | Private App Token / OAuth | High | [View →](data/servers/hubspot-mcp.md) |

---

## Reports

| Report | Date | Summary | Link |
|--------|------|---------|------|
| Enterprise MCP Adoption — Q1 2026 | March 2026 | 20 cases, industry breakdown, governance maturity, top deployments | [Read →](reports/2026-q1-enterprise-mcp-adoption.md) |
| MCP Security Risk Landscape — Q1 2026 | March 2026 | 7 risk categories, mitigations, security maturity by pattern, controls checklist | [Read →](reports/2026-q1-mcp-security-risks.md) |
| MCP Architecture Patterns Deep Dive — Q1 2026 | March 2026 | Full trade-off analysis of all 5 patterns, component breakdowns, selection guide | [Read →](reports/2026-q1-mcp-architecture-patterns.md) |

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
│   ├── cases/                     # 20 verified enterprise case study files
│   ├── servers/                   # 16 MCP server profiles
│   │   ├── github-mcp.md
│   │   ├── snowflake-mcp.md
│   │   ├── jira-mcp.md
│   │   ├── slack-mcp.md
│   │   ├── salesforce-mcp.md
│   │   ├── google-drive-mcp.md
│   │   ├── stripe-mcp.md
│   │   ├── notion-mcp.md
│   │   ├── linear-mcp.md
│   │   ├── atlassian-jira-mcp.md
│   │   ├── atlassian-confluence-mcp.md
│   │   ├── cloudflare-mcp.md
│   │   ├── docker-mcp.md
│   │   ├── figma-mcp.md
│   │   ├── openai-mcp.md
│   │   └── hubspot-mcp.md
│   ├── schema/                    # Templates for data entry
│   └── index.json                 # Machine-readable catalog (v0.5.0)
├── docs/
│   ├── patterns/                  # 6 architecture pattern deep-dives
│   ├── governance/                # Evidence policy and access models
│   └── assets/                    # Banner, logo
├── reports/                       # Q1 2026 research reports
│   ├── 2026-q1-enterprise-mcp-adoption.md
│   ├── 2026-q1-mcp-security-risks.md
│   └── 2026-q1-mcp-architecture-patterns.md
├── scripts/                       # Validation scripts
├── web/                           # Next.js 14 web platform (Vercel)
│   ├── app/
│   │   ├── page.tsx               # Homepage — featured cases + stats
│   │   ├── layout.tsx             # Root layout with nav/footer
│   │   ├── globals.css            # Tailwind base styles
│   │   ├── sitemap.ts             # Dynamic sitemap.xml
│   │   ├── robots.ts              # robots.txt
│   │   ├── not-found.tsx          # 404 page
│   │   ├── cases/[slug]/          # Case study detail pages
│   │   ├── servers/[slug]/        # Server profile detail pages
│   │   ├── patterns/[slug]/       # Architecture pattern detail pages
│   │   ├── reports/[slug]/        # Report detail pages
│   │   ├── search/                # Full-text search page
│   │   ├── compare/               # Side-by-side case comparison
│   │   ├── score/                 # Evidence Score Calculator
│   │   ├── changelog/             # What's New — cases by date
│   │   ├── stats/                 # Registry statistics dashboard
│   │   ├── stack/                 # MCP Stack Builder
│   │   ├── pricing/               # Pricing / Phase 3 teaser
│   │   ├── newsletter/            # Newsletter signup
│   │   ├── workspace/             # Private Workspace (Phase 3)
│   │   ├── feed.xml/              # RSS feed route
│   │   └── api/                   # API routes (OG image, etc.)
│   ├── components/                # Shared UI components
│   ├── lib/
│   │   ├── index.ts               # getSiteIndex() — reads data/index.json
│   │   ├── loadCases.ts           # Case study loader
│   │   ├── loadServers.ts         # Server profile loader
│   │   ├── loadPatterns.ts        # Architecture pattern loader
│   │   ├── loadReports.ts         # Report loader (remark → HTML)
│   │   └── rewriteLinks.ts        # Markdown internal link rewriter
│   ├── tailwind.config.ts         # Tailwind + typography plugin
│   └── package.json
├── vercel.json                    # Vercel build config (rootDirectory: web)
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
- [x] Machine-readable `data/index.json`

### Phase 2 — Web Platform ✅ Complete
- [x] Next.js 14 searchable frontend — **live at [mcp-atls.vercel.app](https://mcp-atls.vercel.app)**
- [x] Case study cards with evidence score + tag filtering
- [x] Server registry, patterns, and reports pages
- [x] Dark / light mode UI, score badges, responsive layout
- [x] Full-text search across cases, servers, and patterns
- [x] Enterprise Readiness Score calculator
- [x] Compare Cases — side-by-side deployment comparison
- [x] Changelog / What's New page
- [x] Per-page OG images, `sitemap.xml`, `robots.txt`, JSON-LD
- [x] RSS feed for new case subscriptions
- [x] Mobile hamburger nav with active-link highlighting

### Phase 2.5 — Data Expansion ✅ Complete
- [x] 20 total verified enterprise case studies
- [x] 16 MCP server profiles (Stripe, Notion, Linear, Atlassian ×2, Cloudflare, Docker, Figma, OpenAI, HubSpot)
- [x] 3 Q1 2026 research reports (Adoption, Security, Architecture)
- [x] `@tailwindcss/typography` — rich report rendering
- [x] `index.json` v0.5.0

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
