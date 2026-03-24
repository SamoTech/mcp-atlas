'use client'
import { useEffect, useState } from 'react'
import CaseCard from '@/components/CaseCard'
import SearchBar from '@/components/SearchBar'
import FilterBar from '@/components/FilterBar'
import type { CaseFull } from '@/lib/loadCases'

export default function CasesPage() {
  const [cases, setCases] = useState<CaseFull[]>([])
  const [query, setQuery] = useState('')
  const [activeScore, setActiveScore] = useState<number | null>(null)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/cases.json').then((r) => r.json()).then(setCases)
  }, [])

  const allTags = [...new Set(cases.flatMap((c) => c.tags))].sort()

  const filtered = cases.filter((c) => {
    if (activeScore && c.score !== activeScore) return false
    if (activeTag && !c.tags.includes(activeTag)) return false
    if (query) {
      const q = query.toLowerCase()
      return c.title.toLowerCase().includes(q) || c.tags.some((t) => t.includes(q))
    }
    return true
  })

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Enterprise Cases</h1>
      <p className="text-navy-400 mb-8">Real named deployments, scored by evidence depth.</p>

      <div className="space-y-4 mb-8">
        <SearchBar onSearch={setQuery} placeholder="Search cases, tags..." />
        <FilterBar
          scores={[5,4,3,2,1]}
          activeScore={activeScore}
          onScoreChange={setActiveScore}
          tags={allTags}
          activeTag={activeTag}
          onTagChange={setActiveTag}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {filtered.map((c) => <CaseCard key={c.slug} c={c} />)}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-navy-400 py-20">No cases match your filters.</p>
      )}
    </div>
  )
}
