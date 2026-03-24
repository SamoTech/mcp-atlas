import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') ?? 'MCP Atlas'
  const score = searchParams.get('score') ?? ''
  const type  = searchParams.get('type')  ?? 'page'

  const typeLabel: Record<string, string> = {
    case: 'Case Study', server: 'MCP Server', pattern: 'Architecture Pattern', page: '',
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #070E15 0%, #0D1B2A 60%, #0a2233 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #00D4FF, #0080FF)',
        }} />

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #00D4FF, #0080FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '24px',
          }}>🗺️</div>
          <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700 }}>
            MCP <span style={{ color: '#00D4FF' }}>Atlas</span>
          </span>
          {typeLabel[type] && (
            <span style={{
              marginLeft: '8px', fontSize: '13px', padding: '4px 12px',
              borderRadius: '999px', border: '1px solid #1a4a6a',
              color: '#00D4FF', background: 'rgba(0,212,255,0.08)',
            }}>{typeLabel[type]}</span>
          )}
        </div>

        {/* Title */}
        <div style={{
          color: '#ffffff', fontSize: title.length > 50 ? '38px' : '48px',
          fontWeight: 800, lineHeight: 1.15, maxWidth: '900px', marginBottom: '28px',
        }}>{title}</div>

        {/* Score badge */}
        {score && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)',
              borderRadius: '12px', padding: '10px 20px',
            }}>
              <span style={{ color: '#00D4FF', fontSize: '18px', fontWeight: 700 }}>
                Evidence Score {score}/10
              </span>
            </div>
            <span style={{ color: '#547FA0', fontSize: '16px' }}>mcp-atls.vercel.app</span>
          </div>
        )}

        {!score && (
          <span style={{ color: '#547FA0', fontSize: '16px' }}>mcp-atls.vercel.app</span>
        )}

        {/* Bottom grid decoration */}
        <div style={{
          position: 'absolute', bottom: '32px', right: '80px',
          display: 'flex', gap: '8px', opacity: 0.15,
        }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              width: '6px', height: `${20 + (i % 4) * 10}px`,
              background: '#00D4FF', borderRadius: '3px',
            }} />
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
