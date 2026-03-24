import { ImageResponse } from 'next/og'
import { getAllCases } from '@/lib/cases'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  const cases = await getAllCases()
  return cases.map(c => ({ slug: c.slug }))
}

export default async function OgImage({ params }: { params: { slug: string } }) {
  const cases = await getAllCases()
  const c = cases.find(x => x.slug === params.slug)

  const title = c?.title ?? 'MCP Atlas Case Study'
  const score = c?.score ?? 0
  const evidenceLevel = c?.evidence_level ?? 'unknown'
  const industry = c?.industry ?? ''
  const pattern = c?.pattern ?? ''
  const stars = '★'.repeat(Math.min(score, 5)) + '☆'.repeat(Math.max(0, 5 - Math.min(score, 5)))

  const evidenceColor = evidenceLevel === 'high' ? '#34d399' : evidenceLevel === 'medium' ? '#fbbf24' : '#f87171'

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
        {/* Top: brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#ffffff' }}>
            MCP <span style={{ color: '#22d3ee' }}>Atlas</span>
          </div>
          <div style={{ fontSize: 14, color: '#4a5568', marginLeft: 8 }}>Enterprise MCP Registry</div>
        </div>

        {/* Middle: title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: 52, fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span style={{ fontSize: 28, color: '#22d3ee' }}>{stars}</span>
            <span style={{
              fontSize: 14, fontWeight: 600, color: evidenceColor,
              border: `1px solid ${evidenceColor}`, borderRadius: 6, padding: '4px 10px', textTransform: 'uppercase'
            }}>
              {evidenceLevel} evidence
            </span>
          </div>
        </div>

        {/* Bottom: meta */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {industry && (
            <div style={{ fontSize: 16, color: '#94a3b8' }}>
              🏭 <span style={{ color: '#e2e8f0' }}>{industry}</span>
            </div>
          )}
          {pattern && (
            <div style={{ fontSize: 16, color: '#94a3b8' }}>
              🏗 <span style={{ color: '#e2e8f0' }}>{pattern.replace(/-/g, ' ')}</span>
            </div>
          )}
          <div style={{ fontSize: 16, color: '#94a3b8' }}>
            🔗 <span style={{ color: '#22d3ee' }}>mcp-atls.vercel.app</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
