import Link from 'next/link'
import type { ServerMeta } from '@/lib/index'

const categoryColors: Record<string, string> = {
  'developer-tools':   'bg-blue-900 text-blue-300',
  'data-warehouse':    'bg-purple-900 text-purple-300',
  'project-management':'bg-orange-900 text-orange-300',
  'collaboration':     'bg-green-900 text-green-300',
  'crm':               'bg-pink-900 text-pink-300',
  'documents':         'bg-teal-900 text-teal-300',
}

interface Props {
  s: ServerMeta & { title: string }
}

export default function ServerCard({ s }: Props) {
  const color = categoryColors[s.category] ?? 'bg-navy-800 text-cyan-300'
  return (
    <Link
      href={`/servers/${s.slug}`}
      className="block rounded-xl border border-navy-700 bg-navy-900 hover:border-cyan-600 transition p-5 space-y-3"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold text-lg">{s.title}</h3>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
          {s.category}
        </span>
      </div>
      <p className="text-sm text-navy-400">View enterprise profile →</p>
    </Link>
  )
}
