import { getAllCases } from '@/lib/loadCases'
import { getAllServers } from '@/lib/loadServers'
import { getAllPatterns } from '@/lib/loadPatterns'
import SearchClient from './SearchClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search — MCP Atlas',
  description: 'Search cases, servers, and patterns across MCP Atlas.',
}

export default async function SearchPage() {
  const [cases, servers, patterns] = await Promise.all([
    getAllCases(),
    getAllServers(),
    getAllPatterns(),
  ])

  const items = [
    ...cases.map((c) => ({
      type: 'case' as const,
      slug: c.slug,
      title: c.title,
      body: c.tags.join(' '),
      href: `/cases/${c.slug}`,
      badge: `Score ${c.score}/10`,
    })),
    ...servers.map((s) => ({
      type: 'server' as const,
      slug: s.slug,
      title: s.title,
      body: s.category,
      href: `/servers/${s.slug}`,
      badge: s.category,
    })),
    ...patterns.map((p) => ({
      type: 'pattern' as const,
      slug: p.slug,
      title: p.title,
      body: p.summary,
      href: `/patterns/${p.slug}`,
      badge: 'Pattern',
    })),
  ]

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Search</h1>
      <p className="text-navy-400 mb-8">Search across cases, servers, and patterns.</p>
      <SearchClient items={items} />
    </div>
  )
}
