# MCP Atlas — Web Frontend

Next.js 14 static site that reads directly from the repo's markdown files.

## Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS** (custom navy + cyan theme)
- **TypeScript** (strict)
- **gray-matter + remark** (markdown parsing)
- **Vercel** (deployment)

## Getting started

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Outputs to `web/out/` as a fully static site.

## Deploy to Vercel

1. Import the repo on [vercel.com](https://vercel.com)
2. Set **Root Directory** to `web`
3. Framework: **Next.js**
4. Deploy — no env vars required for the base site

## Data sources

| Page | Data from |
|------|-----------|
| `/cases` | `data/cases/*.md` + `data/index.json` |
| `/servers` | `data/servers/*.md` |
| `/patterns` | `docs/patterns/*.md` |
| `/reports` | `reports/*.md` |

All data is read at **build time** via the loaders in `web/lib/`.
