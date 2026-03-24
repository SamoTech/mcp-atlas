/** @type {import('next').NextConfig} */
const path = require('path')
const fs = require('fs')

// Copy docs/assets/*.png into public/ so Next.js static export serves them
const assetsDir = path.join(__dirname, '..', 'docs', 'assets')
const publicDir = path.join(__dirname, 'public')
if (fs.existsSync(assetsDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
  for (const file of fs.readdirSync(assetsDir)) {
    if (file.endsWith('.png') || file.endsWith('.svg') || file.endsWith('.jpg')) {
      fs.copyFileSync(
        path.join(assetsDir, file),
        path.join(publicDir, file)
      )
    }
  }
}

// Generate static /api/cases.json from data/index.json at build time
const indexPath = path.join(__dirname, '..', 'data', 'index.json')
if (fs.existsSync(indexPath)) {
  const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'))
  const apiDir = path.join(publicDir, 'api')
  fs.mkdirSync(apiDir, { recursive: true })
  const payload = {
    version: '1.0',
    generated_at: new Date().toISOString(),
    count: index.cases.length,
    note: 'Static export. Filter client-side using the fields below.',
    cases: index.cases.map((c) => ({
      slug: c.slug,
      score: c.score,
      evidence_level: c.evidence_level,
      industry: c.industry || null,
      pattern: c.pattern || null,
      tags: c.tags,
      named_systems_count: c.named_systems_count,
      source_count: c.source_count,
      governance_disclosed: c.governance_disclosed,
      outcomes_disclosed: c.outcomes_disclosed,
      last_verified: c.last_verified,
      url: `https://mcp-atls.vercel.app/cases/${c.slug}/`,
    })),
  }
  fs.writeFileSync(
    path.join(apiDir, 'cases.json'),
    JSON.stringify(payload, null, 2)
  )
}

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  webpack(config) {
    config.resolve.alias['@data'] = path.join(__dirname, '..', 'data')
    config.resolve.alias['@docs'] = path.join(__dirname, '..', 'docs')
    config.resolve.alias['@reports'] = path.join(__dirname, '..', 'reports')
    return config
  },
}

module.exports = nextConfig
