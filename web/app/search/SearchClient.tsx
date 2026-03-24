'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type Item = {
  type: 'case' | 'server' | 'pattern'
  slug: string
  title: string
  body: string
  href: string
  badge: string
}

const typeColors: Record<Item['type'], string> = {
  case:    'bg-cyan-900/40 text-cyan-400 border-cyan-800',
  server:  'bg-purple-900/40 text-purple-400 border-purple-800',
  pattern: 'bg-emerald-900/40 text-emerald-400 border-emerald-800',
}

const typeLabels: Record<Item['type'], string> = {
  case: 'Case', server: 'Server', pattern: 'Pattern',
}

export default function SearchClient({ items }: { items: Item[] }) {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return []
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.body.toLowerCase().includes(q) ||
        i.slug.toLowerCase().includes(q)
    )
  }, [query, items])

  return (
    <div className="space-y-4">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400 text-lg">🔍</span>
        <input
          type="text"
          autoFocus
          placeholder="Search cases, servers, patterns…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-800 border border-navy-700 text-white placeholder-navy-500 focus:outline-none focus:border-cyan-500 transition text-sm"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 hover:text-white transition text-lg"
          >×</button>
        )}
      </div>

      {query && results.length === 0 && (
        <p className="text-center text-navy-400 py-12">No results for &ldquo;{query}&rdquo;</p>
      )}

      {results.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-navy-500">{results.length} result{results.length !== 1 ? 's' : ''}</p>
          {results.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-xl border border-navy-700 bg-navy-900 hover:border-cyan-600 transition px-4 py-3.5"
            >
              <div className="space-y-0.5">
                <p className="text-white font-medium text-sm">{item.title}</p>
                {item.body && <p className="text-navy-400 text-xs line-clamp-1">{item.body}</p>}
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <span className={`text-xs px-2 py-0.5 rounded border font-medium ${typeColors[item.type]}`}>
                  {typeLabels[item.type]}
                </span>
                <span className="text-navy-500 text-sm">→</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {!query && (
        <div className="text-center py-16 text-navy-500">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-sm">Start typing to search…</p>
        </div>
      )}
    </div>
  )
}
