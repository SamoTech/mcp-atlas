import { getAllCases } from '@/lib/cases'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stats — MCP Atlas',
  description: 'Live statistics on enterprise MCP deployments: evidence levels, architecture patterns, industry breakdown, and adoption trends.',
}

export default async function StatsPage() {
  const cases = await getAllCases()

  // Evidence level breakdown
  const evidenceCounts = cases.reduce((acc: Record<string, number>, c) => {
    acc[c.evidence_level] = (acc[c.evidence_level] || 0) + 1
    return acc
  }, {})

  // Pattern breakdown
  const patternCounts = cases.reduce((acc: Record<string, number>, c) => {
    const p = c.pattern || 'unknown'
    acc[p] = (acc[p] || 0) + 1
    return acc
  }, {})

  // Industry breakdown
  const industryCounts = cases.reduce((acc: Record<string, number>, c) => {
    const ind = c.industry || 'other'
    acc[ind] = (acc[ind] || 0) + 1
    return acc
  }, {})

  // Score distribution
  const avgScore = (cases.reduce((s, c) => s + c.score, 0) / cases.length).toFixed(1)
  const highEvidence = cases.filter(c => c.evidence_level === 'high').length
  const withOutcomes = cases.filter(c => c.outcomes_disclosed).length
  const withGovernance = cases.filter(c => c.governance_disclosed).length

  const patternColors: Record<string, string> = {
    'hub-and-spoke': 'bg-cyan-500',
    'federated': 'bg-violet-500',
    'bidirectional': 'bg-emerald-500',
    'sandboxed-developer': 'bg-amber-500',
    'risk-tiered': 'bg-rose-500',
    'unknown': 'bg-navy-600',
  }

  const industryColors: Record<string, string> = {
    'developer-tools': 'bg-cyan-500',
    'fintech': 'bg-emerald-500',
    'enterprise': 'bg-violet-500',
    'ai': 'bg-amber-500',
    'crm': 'bg-rose-500',
    'infrastructure': 'bg-blue-500',
    'automation': 'bg-pink-500',
    'e-commerce': 'bg-orange-500',
    'productivity': 'bg-teal-500',
    'saas': 'bg-indigo-500',
    'other': 'bg-navy-600',
  }

  const maxPatternCount = Math.max(...Object.values(patternCounts))
  const maxIndustryCount = Math.max(...Object.values(industryCounts))

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">Registry Statistics</h1>
        <p className="text-navy-300">Live data across {cases.length} verified enterprise MCP deployments.</p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: 'Total Cases', value: cases.length, color: 'text-cyan-400' },
          { label: 'High Evidence', value: highEvidence, color: 'text-emerald-400' },
          { label: 'Avg Score', value: avgScore, color: 'text-amber-400' },
          { label: 'Outcomes Disclosed', value: withOutcomes, color: 'text-violet-400' },
        ].map(k => (
          <div key={k.label} className="rounded-xl border border-navy-700 bg-navy-900 p-5 text-center">
            <p className={`text-4xl font-bold ${k.color}`}>{k.value}</p>
            <p className="text-sm text-navy-400 mt-1">{k.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Evidence Level */}
        <div className="rounded-xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-lg font-semibold text-white mb-5">Evidence Level</h2>
          <div className="space-y-3">
            {[['high', 'bg-emerald-500', 'text-emerald-300'], ['medium', 'bg-yellow-500', 'text-yellow-300'], ['low', 'bg-red-500', 'text-red-300']].map(([level, bar, text]) => {
              const count = evidenceCounts[level] || 0
              const pct = cases.length > 0 ? Math.round((count / cases.length) * 100) : 0
              return (
                <div key={level}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={`font-medium capitalize ${text}`}>{level}</span>
                    <span className="text-navy-400">{count} cases · {pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-navy-800">
                    <div className={`h-2 rounded-full ${bar} transition-all`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Architecture Patterns */}
        <div className="rounded-xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-lg font-semibold text-white mb-5">Architecture Patterns</h2>
          <div className="space-y-3">
            {Object.entries(patternCounts).sort((a, b) => b[1] - a[1]).map(([pattern, count]) => {
              const pct = Math.round((count / maxPatternCount) * 100)
              const color = patternColors[pattern] || 'bg-navy-600'
              return (
                <div key={pattern}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-navy-200 capitalize">{pattern.replace(/-/g, ' ')}</span>
                    <span className="text-navy-400">{count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-navy-800">
                    <div className={`h-2 rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Industry Breakdown */}
      <div className="rounded-xl border border-navy-700 bg-navy-900 p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-5">Industry Breakdown</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {Object.entries(industryCounts).sort((a, b) => b[1] - a[1]).map(([industry, count]) => {
            const pct = Math.round((count / maxIndustryCount) * 100)
            const color = industryColors[industry] || 'bg-navy-600'
            return (
              <div key={industry}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-navy-200 capitalize">{industry.replace(/-/g, ' ')}</span>
                  <span className="text-navy-400">{count}</span>
                </div>
                <div className="h-2 rounded-full bg-navy-800">
                  <div className={`h-2 rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Disclosure stats */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-navy-700 bg-navy-900 p-6 flex items-center gap-4">
          <div className="text-4xl font-bold text-cyan-400">{Math.round((withGovernance / cases.length) * 100)}%</div>
          <div>
            <p className="text-white font-semibold">Governance Disclosed</p>
            <p className="text-sm text-navy-400">{withGovernance} of {cases.length} cases document access controls</p>
          </div>
        </div>
        <div className="rounded-xl border border-navy-700 bg-navy-900 p-6 flex items-center gap-4">
          <div className="text-4xl font-bold text-emerald-400">{Math.round((withOutcomes / cases.length) * 100)}%</div>
          <div>
            <p className="text-white font-semibold">Outcomes Disclosed</p>
            <p className="text-sm text-navy-400">{withOutcomes} of {cases.length} cases include measurable results</p>
          </div>
        </div>
      </div>
    </div>
  )
}
