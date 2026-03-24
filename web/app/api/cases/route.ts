import { getAllCases } from '@/lib/loadCases'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const industry = searchParams.get('industry')
  const pattern = searchParams.get('pattern')
  const evidence = searchParams.get('evidence')
  const tag = searchParams.get('tag')
  const minScore = searchParams.get('min_score')

  let cases = await getAllCases()

  if (industry) cases = cases.filter(c => c.industry === industry)
  if (pattern) cases = cases.filter(c => c.pattern === pattern)
  if (evidence) cases = cases.filter(c => c.evidence_level === evidence)
  if (tag) cases = cases.filter(c => c.tags?.includes(tag))
  if (minScore) cases = cases.filter(c => c.score >= parseInt(minScore))

  return NextResponse.json({
    version: '1.0',
    generated_at: new Date().toISOString(),
    count: cases.length,
    filters: { industry, pattern, evidence, tag, min_score: minScore },
    cases: cases.map(c => ({
      slug: c.slug,
      title: c.title,
      score: c.score,
      evidence_level: c.evidence_level,
      industry: c.industry,
      pattern: c.pattern,
      tags: c.tags,
      named_systems_count: c.named_systems_count,
      source_count: c.source_count,
      governance_disclosed: c.governance_disclosed,
      outcomes_disclosed: c.outcomes_disclosed,
      last_verified: c.last_verified,
      url: `https://mcp-atls.vercel.app/cases/${c.slug}`,
    })),
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    }
  })
}
