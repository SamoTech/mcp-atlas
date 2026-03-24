import { getAllCases } from '@/lib/loadCases'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog — MCP Atlas',
  description: 'Recently added and updated MCP case studies on MCP Atlas.',
  openGraph: {
    images: [{ url: '/api/og?title=Changelog+%E2%80%94+What%27s+New&type=page', width: 1200, height: 630 }],
  },
}

export default async function ChangelogPage() {
  const cases = await getAllCases()
  const sorted = [...cases].sort(
    (a, b) => new Date(b.last_verified).getTime() - new Date(a.last_verified).getTime()
  )

  // Group by date
  const groups: Record<string, typeof sorted> = {}
  for (const c of sorted) {
    if (!groups[c.last_verified]) groups[c.last_verified] = []
    groups[c.last_verified].push(c)
  }

  const evidenceColor: Record<string, string> = {
    high:   'bg-emerald-900/40 text-emerald-400 border-emerald-800',
    medium: 'bg-yellow-900/40 text-yellow-400 border-yellow-800',
    low:    'bg-red-900/40 text-red-400 border-red-800',
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Changelog</h1>
        <p className="text-navy-400">Every case study added or updated, newest first.</p>
        <div className="mt-4 flex items-center gap-3">
          <a
            href="/feed.xml"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-navy-700 text-navy-400 hover:border-cyan-600 hover:text-cyan-400 transition"
          >
            📶 Subscribe via RSS
          </a>
          <span className="text-navy-600 text-xs">{cases.length} cases total</span>
        </div>
      </div>

      <div className="space-y-10">
        {Object.entries(groups).map(([date, items]) => (
          <div key={date}>
            <div className="flex items-center gap-3 mb-4">
              <time className="text-sm font-semibold text-cyan-400">{date}</time>
              <div className="flex-1 h-px bg-navy-800" />
            </div>
            <div className="space-y-3">
              {items.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="flex items-center justify-between rounded-xl border border-navy-700 bg-navy-900 hover:border-cyan-600 transition px-5 py-4"
                >
                  <div className="space-y-1">
                    <p className="text-white font-medium">{c.title}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map((t) => (
                        <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-navy-800 text-navy-400">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="text-white font-bold text-sm">{c.score}<span className="text-navy-500">/10</span></span>
                    <span className={`text-xs px-2 py-0.5 rounded border font-medium ${evidenceColor[c.evidence_level] ?? evidenceColor.low}`}>
                      {c.evidence_level}
                    </span>
                    <span className="text-navy-500">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
