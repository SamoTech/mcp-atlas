# MCP Atlas — Architecture

## Phase 1: Registry (Current)

MCP Atlas in Phase 1 is a **static data repository**. All case studies, server profiles, and patterns are Markdown files following validated schemas. The GitHub repo itself is the product.

```
mcp-atlas/
├── data/         ← Structured case study and server data (Markdown + JSON)
├── docs/         ← Architecture patterns, governance models
├── scripts/      ← Validation and build automation
└── README.md     ← The primary user interface
```

## Phase 2: Web Platform

A Next.js frontend with FastAPI backend and Postgres database.

```
web/           ← Next.js 14, Tailwind CSS, React Query
api/           ← FastAPI, SQLAlchemy, Postgres
  ├── routes/  ← /cases, /servers, /patterns, /search
  ├── models/  ← Case, Server, Pattern, Score
  └── services/← scoring engine, search, ingestion
```

**Search:** Sentence-transformers embeddings over case text stored in pgvector.

**Scoring:** Enterprise Readiness Score computed automatically from schema fields at ingest time, then reviewed by maintainer.

## Phase 3: Private Workspaces

Authenticated enterprise workspaces (NextAuth.js) where teams map their internal MCP stack privately and compare against public reference architectures.

Data isolation: workspace data lives in separate Postgres schemas. Never mixed with public registry data.
