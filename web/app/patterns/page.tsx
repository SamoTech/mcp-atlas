import { getAllPatterns } from '@/lib/loadPatterns'
import Link from 'next/link'

export const metadata = { title: 'Architecture Patterns' }

export default async function PatternsPage() {
  const patterns = await getAllPatterns()
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Architecture Patterns</h1>
      <p className="text-navy-400 mb-10">Battle-tested MCP deployment patterns extracted from real enterprise rollouts.</p>
      <div className="grid md:grid-cols-2 gap-5">
        {patterns.map((p) => (
          <Link key={p.slug} href={`/patterns/${p.slug}`}
            className="block rounded-xl border border-navy-700 bg-navy-900 hover:border-cyan-600 p-5 transition">
            <h2 className="text-white font-semibold text-lg mb-1">{p.title}</h2>
            {p.description && <p className="text-sm text-navy-400">{p.description}</p>}
            <p className="text-xs text-cyan-500 mt-3">Read pattern →</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
