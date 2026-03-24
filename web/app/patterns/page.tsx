import { getAllPatterns } from '@/lib/loadPatterns'
import Link from 'next/link'

export const metadata = { title: 'Architecture Patterns' }

const patternIcons: Record<string, string> = {
  'hub-and-spoke': '🕸️',
  'federated-registry': '🗂️',
  'risk-tiered-access': '🛡️',
  'bidirectional-bridge': '↔️',
  'internal-api-proxy': '🔌',
  'sandboxed-developer': '📦',
}

export default async function PatternsPage() {
  const patterns = await getAllPatterns()

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Architecture Patterns</h1>
      <p className="text-navy-400 mb-10">Battle-tested MCP deployment patterns extracted from real enterprise deployments.</p>
      <div className="grid md:grid-cols-2 gap-5">
        {patterns.map((p) => (
          <Link
            key={p.slug}
            href={`/patterns/${p.slug}`}
            className="block rounded-xl border border-navy-700 bg-navy-900 hover:border-cyan-600 transition p-6 space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{patternIcons[p.slug] ?? '🔷'}</span>
              <h2 className="text-white font-semibold text-lg leading-tight">{p.title}</h2>
            </div>
            <p className="text-sm text-navy-300">{p.summary}</p>
            <span className="text-xs text-cyan-400">View pattern →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
