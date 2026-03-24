import { ImageResponse } from 'next/og'
import { getAllCases } from '@/lib/loadCases'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  const cases = await getAllCases()
  return cases.map((c) => ({ slug: c.slug }))
}

export default async function OgImage({ params }: { params: { slug: string } }) {
  const cases = await getAllCases()
  const c = cases.find((x) => x.slug === params.slug)

  const title = c?.title ?? 'MCP Atlas Case Study'
  const score = Math.min(Math.max(c?.score ?? 0, 0), 5)
  const evidenceLevel = c?.evidence_level ?? 'unknown'
  const industry = c?.industry ?? ''
  const pattern = c?.pattern ?? ''

  // Score as filled/empty circles — pure ASCII, no unicode font needed
  const scoreBar = 'filled '.repeat(score).trim() + ' ' + 'empty '.repeat(5 - score).trim()
  const scoreDisplay = Array.from({ length: 5 }, (_, i) =>
    i < score ? '\u25CF' : '\u25CB'
  ).join(' ')

  const evidenceColor =
    evidenceLevel === 'high' ? '#34d399' : evidenceLevel === 'medium' ? '#fbbf24' : '#f87171'

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0f1e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, color: '#ffffff' }}>
            MCP
            <span style={{ color: '#22d3ee', marginLeft: 8 }}>Atlas</span>
          </div>
          <div style={{ display: 'flex', fontSize: 14, color: '#4a5568', marginLeft: 8 }}>
            Enterprise MCP Registry
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 52,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span
              style={{
                display: 'flex',
                fontSize: 22,
                color: '#22d3ee',
                letterSpacing: '4px',
              }}
            >
              {scoreDisplay}
            </span>
            <span
              style={{
                display: 'flex',
                fontSize: 13,
                fontWeight: 600,
                color: evidenceColor,
                border: `1px solid ${evidenceColor}`,
                borderRadius: 6,
                padding: '4px 10px',
                textTransform: 'uppercase',
                marginLeft: 8,
              }}
            >
              {evidenceLevel} evidence
            </span>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {industry !== '' && (
            <div style={{ display: 'flex', fontSize: 16, color: '#94a3b8' }}>
              Industry:
              <span style={{ color: '#e2e8f0', marginLeft: 4 }}>{industry}</span>
            </div>
          )}
          {pattern !== '' && (
            <div style={{ display: 'flex', fontSize: 16, color: '#94a3b8' }}>
              Pattern:
              <span style={{ color: '#e2e8f0', marginLeft: 4 }}>
                {pattern.replace(/-/g, ' ')}
              </span>
            </div>
          )}
          <div style={{ display: 'flex', fontSize: 16, color: '#94a3b8' }}>
            <span style={{ color: '#22d3ee' }}>mcp-atls.vercel.app</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
