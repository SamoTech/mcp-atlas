'use client'

import { useState } from 'react'
import Link from 'next/link'

type Case = {
  slug: string
  title: string
  score: number
  evidence_level: string
  last_verified: string
  source_count: number
  named_systems_count: number
  governance_disclosed: boolean
  outcomes_disclosed: boolean
  tags: string[]
}

const evidenceColor: Record<string, string> = {
  high:   'text-emerald-400',
  medium: 'text-yellow-400',
  low:    'text-red-400',
}

function ScoreBar({ score }: { score: number }) {
  const pct = (score / 10) * 100
  const color = score >= 7 ? 'bg-emerald-500' : score >= 5 ? 'bg-yellow-500' : 'bg-red-500'
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 rounded-full bg-navy-700">
        <div className={`h-full rounded-full ${color} transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-white font-bold text-sm w-8 text-right">{score}/10</span>
    </div>
  )
}

function Check({ v }: { v: boolean }) {
  return <span className={v ? 'text-emerald-400' : 'text-red-400'}>{v ? '✔ Yes' : '✘ No'}</span>
}

export default function CompareClient({ cases }: { cases: Case[] }) {
  const [leftSlug,  setLeft]  = useState<string>('')
  const [rightSlug, setRight] = useState<string>('')

  const left  = cases.find((c) => c.slug === leftSlug)
  const right = cases.find((c) => c.slug === rightSlug)

  const rows: { label: string; render: (c: Case) => React.ReactNode }[] = [
    { label: 'Evidence Score',      render: (c) => <ScoreBar score={c.score} /> },
    { label: 'Evidence Level',      render: (c) => <span className={evidenceColor[c.evidence_level] ?? ''}>{c.evidence_level}</span> },
    { label: 'Named Systems',       render: (c) => <span className="text-white">{c.named_systems_count}</span> },
    { label: 'Sources',             render: (c) => <span className="text-white">{c.source_count}</span> },
    { label: 'Governance Disclosed',render: (c) => <Check v={c.governance_disclosed} /> },
    { label: 'Outcomes Disclosed',  render: (c) => <Check v={c.outcomes_disclosed} /> },
    { label: 'Last Verified',       render: (c) => <span className="text-navy-300 text-sm">{c.last_verified}</span> },
    { label: 'Tags',                render: (c) => (
        <div className="flex flex-wrap gap-1">
          {c.tags.map((t) => <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-navy-800 text-navy-400">{t}</span>)}
        </div>
      )
    },
  ]

  return (
    <div className="space-y-8">
      {/* Selectors */}
      <div className="grid md:grid-cols-2 gap-4">
        {([
          { value: leftSlug,  set: setLeft,  label: 'Case A' },
          { value: rightSlug, set: setRight, label: 'Case B' },
        ] as const).map(({ value, set, label }) => (
          <div key={label} className="space-y-1.5">
            <label className="text-xs font-semibold text-navy-400 uppercase tracking-wide">{label}</label>
            <select
              value={value}
              onChange={(e) => set(e.target.value)}
              className="w-full rounded-xl border border-navy-700 bg-navy-800 text-white px-3 py-2.5 text-sm focus:outline-none focus:border-cyan-500 transition"
            >
              <option value="">Select a case…</option>
              {cases.map((c) => (
                <option key={c.slug} value={c.slug}>{c.title}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      {left && right ? (
        <div className="rounded-2xl border border-navy-700 overflow-hidden">
          {/* Headers */}
          <div className="grid grid-cols-3 border-b border-navy-700">
            <div className="px-5 py-4 text-xs font-semibold text-navy-500 uppercase tracking-wide">Metric</div>
            <Link href={`/cases/${left.slug}`} className="px-5 py-4 border-l border-navy-700 hover:bg-navy-800/50 transition">
              <p className="text-white font-semibold text-sm">{left.title}</p>
              <p className="text-xs text-cyan-400 mt-0.5">View case →</p>
            </Link>
            <Link href={`/cases/${right.slug}`} className="px-5 py-4 border-l border-navy-700 hover:bg-navy-800/50 transition">
              <p className="text-white font-semibold text-sm">{right.title}</p>
              <p className="text-xs text-cyan-400 mt-0.5">View case →</p>
            </Link>
          </div>
          {rows.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 border-b border-navy-800 last:border-0 ${ i % 2 === 0 ? 'bg-navy-900' : 'bg-navy-900/60' }`}>
              <div className="px-5 py-4 text-xs font-medium text-navy-400 flex items-center">{row.label}</div>
              <div className="px-5 py-4 border-l border-navy-800 text-sm flex items-center">{row.render(left)}</div>
              <div className="px-5 py-4 border-l border-navy-800 text-sm flex items-center">{row.render(right)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-navy-700 py-20 text-center space-y-2">
          <p className="text-4xl">↔️</p>
          <p className="text-navy-400">Select two cases above to compare them.</p>
        </div>
      )}
    </div>
  )
}
