'use client'

import { useState } from 'react'

const criteria = [
  {
    id: 'named_systems',
    label: 'Named Systems',
    description: 'Are the specific software/vendor systems named (not just "internal tools")?',
    weight: 2,
  },
  {
    id: 'governance',
    label: 'Governance Disclosed',
    description: 'Is the auth model, access control, or approval workflow described?',
    weight: 2,
  },
  {
    id: 'outcomes',
    label: 'Outcomes Disclosed',
    description: 'Are measurable outcomes stated (time saved, error rates, productivity %)?',
    weight: 2,
  },
  {
    id: 'sources',
    label: 'Verifiable Sources',
    description: 'Is there a public blog post, talk, or press release to cross-reference?',
    weight: 2,
  },
  {
    id: 'architecture',
    label: 'Architecture Detail',
    description: 'Is the MCP deployment pattern described (hub-and-spoke, proxy, etc)?',
    weight: 1,
  },
  {
    id: 'scale',
    label: 'Scale Mentioned',
    description: 'Is the number of users, agents, or requests per day mentioned?',
    weight: 1,
  },
]

const maxScore = criteria.reduce((sum, c) => sum + c.weight, 0)

function scoreToLabel(score: number): { label: string; color: string } {
  if (score >= 8) return { label: 'High Evidence', color: 'text-emerald-400' }
  if (score >= 5) return { label: 'Medium Evidence', color: 'text-yellow-400' }
  return { label: 'Low Evidence', color: 'text-red-400' }
}

export default function ScoreCalculator() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(criteria.map((c) => [c.id, 0]))
  )

  const total = criteria.reduce((sum, c) => sum + (values[c.id] ?? 0) * c.weight, 0)
  const pct = Math.round((total / maxScore) * 100)
  const { label, color } = scoreToLabel(total)

  return (
    <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white">Evidence Score Calculator</h2>
        <p className="text-sm text-navy-400 mt-1">Rate a case study before submitting — see if it meets the bar.</p>
      </div>

      <div className="space-y-4">
        {criteria.map((c) => (
          <div key={c.id} className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-white">
                {c.label}
                <span className="ml-1.5 text-xs text-navy-400">×{c.weight}</span>
              </label>
              <span className="text-xs text-cyan-400 font-mono">{values[c.id]}/1</span>
            </div>
            <p className="text-xs text-navy-400">{c.description}</p>
            <input
              type="range"
              min={0}
              max={1}
              step={1}
              value={values[c.id]}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, [c.id]: Number(e.target.value) }))
              }
              className="w-full h-1.5 rounded-full accent-cyan-400 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Score display */}
      <div className="rounded-xl border border-navy-700 bg-navy-800 p-5 flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-white">{total}<span className="text-navy-400 text-lg">/{maxScore}</span></p>
          <p className={`text-sm font-semibold mt-0.5 ${color}`}>{label}</p>
        </div>
        <div className="text-right">
          <div className="w-24 h-2 rounded-full bg-navy-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-xs text-navy-400 mt-1">{pct}% of max</p>
        </div>
      </div>

      <a
        href={`https://github.com/SamoTech/mcp-atlas/issues/new?template=case_submission.yml&title=Case+Submission&labels=case-submission`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center rounded-lg border border-cyan-700 bg-cyan-900/30 hover:bg-cyan-800/40 text-cyan-400 font-medium text-sm py-2.5 transition"
      >
        Submit this case on GitHub →
      </a>
    </div>
  )
}
