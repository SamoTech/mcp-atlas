'use client'

import { useState } from 'react'
import Link from 'next/link'

const ALL_SERVERS = [
  'GitHub MCP', 'Snowflake MCP', 'Jira MCP', 'Slack MCP',
  'Salesforce MCP', 'Google Drive MCP', 'Notion MCP',
  'Linear MCP', 'Confluence MCP', 'PagerDuty MCP',
  'Datadog MCP', 'AWS S3 MCP', 'Azure DevOps MCP',
]

type Case = {
  slug: string
  title: string
  score: number
  tags: string[]
  named_systems_count: number
}

function matchScore(selected: string[], c: Case): number {
  // Heuristic: match by tags and named system count
  const tagHits = selected.filter((s) =>
    c.tags.some((t) => s.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(s.split(' ')[0].toLowerCase()))
  ).length
  return tagHits
}

export default function StackMapperClient({ cases }: { cases: Case[] }) {
  const [selected, setSelected] = useState<string[]>([])

  function toggle(s: string) {
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s])
  }

  const ranked = [...cases]
    .map((c) => ({ ...c, match: matchScore(selected, c) }))
    .sort((a, b) => b.match - a.match || b.score - a.score)

  return (
    <div className="space-y-8">
      {/* Server picker */}
      <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-semibold">Your MCP Servers</h2>
          {selected.length > 0 && (
            <button onClick={() => setSelected([])} className="text-xs text-navy-400 hover:text-white transition">Clear all</button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_SERVERS.map((s) => {
            const active = selected.includes(s)
            return (
              <button
                key={s}
                onClick={() => toggle(s)}
                className={`text-sm px-3 py-1.5 rounded-xl border transition ${
                  active
                    ? 'bg-cyan-600 border-cyan-500 text-white font-medium'
                    : 'border-navy-700 text-navy-400 hover:border-cyan-700 hover:text-cyan-400'
                }`}
              >
                {active ? '✓ ' : ''}{s}
              </button>
            )
          })}
        </div>
        {selected.length > 0 && (
          <p className="text-xs text-navy-500">{selected.length} server{selected.length !== 1 ? 's' : ''} selected</p>
        )}
      </div>

      {/* Results */}
      <div className="space-y-3">
        <h2 className="text-white font-semibold">Closest Reference Architectures</h2>
        {selected.length === 0 ? (
          <p className="text-navy-400 text-sm">Select servers above to see matching deployments.</p>
        ) : (
          ranked.map((c, i) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="flex items-center justify-between rounded-xl border border-navy-700 bg-navy-900 hover:border-cyan-600 transition px-5 py-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {i === 0 && <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-900/40 text-cyan-400 border border-cyan-800 font-semibold">Best match</span>}
                  <p className="text-white font-medium">{c.title}</p>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {c.tags.map((t) => <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-navy-800 text-navy-400">{t}</span>)}
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-4">
                <span className="text-xs text-navy-400">{c.match} tag{c.match !== 1 ? 's' : ''} matched</span>
                <span className="text-white font-bold text-sm">{c.score}<span className="text-navy-500">/10</span></span>
                <span className="text-navy-500">→</span>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Pro upsell */}
      <div className="rounded-2xl border border-dashed border-navy-700 bg-navy-900/40 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-semibold">🔒 Export Architecture Report — Coming in Pro</p>
          <p className="text-navy-400 text-sm mt-1">Generate a compliance-ready PDF report of your stack mapped against public reference architectures.</p>
        </div>
        <a href="/pricing" className="shrink-0 text-sm font-semibold px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-700 text-cyan-400 hover:bg-cyan-500/20 transition">
          See Pricing →
        </a>
      </div>
    </div>
  )
}
