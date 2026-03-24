import Link from 'next/link'
import type { ServerMeta } from '@/lib/index'

const categoryColors: Record<string, string> = {
  'developer-tools':    'bg-blue-900/50 text-blue-300 border-blue-800',
  'data-warehouse':     'bg-purple-900/50 text-purple-300 border-purple-800',
  'project-management': 'bg-orange-900/50 text-orange-300 border-orange-800',
  'collaboration':      'bg-green-900/50 text-green-300 border-green-800',
  'crm':                'bg-pink-900/50 text-pink-300 border-pink-800',
  'documents':          'bg-teal-900/50 text-teal-300 border-teal-800',
}

const categoryDescriptions: Record<string, string> = {
  'developer-tools':    'Code, repos, PRs, CI/CD pipelines',
  'data-warehouse':     'SQL queries, schema discovery, analytics',
  'project-management': 'Issues, sprints, roadmaps, backlogs',
  'collaboration':      'Channels, messages, threads, search',
  'crm':                'Contacts, deals, activity timelines',
  'documents':          'Files, folders, search, permissions',
}

interface Props {
  s: ServerMeta & { title: string }
}

export default function ServerCard({ s }: Props) {
  const color = categoryColors[s.category] ?? 'bg-navy-800/50 text-cyan-300 border-navy-700'
  const desc  = categoryDescriptions[s.category] ?? 'Enterprise MCP integration'
  return (
    <Link
      href={`/servers/${s.slug}`}
      className="block rounded-xl border border-navy-700 bg-navy-900 hover:border-cyan-600 transition p-5 space-y-3"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-white font-semibold text-lg leading-tight">{s.title}</h3>
        <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded border ${color}`}>
          {s.category}
        </span>
      </div>
      <p className="text-sm text-navy-400">{desc}</p>
      <span className="text-xs text-cyan-400">View enterprise profile →</span>
    </Link>
  )
}
