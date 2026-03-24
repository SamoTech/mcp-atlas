import { getAllReports } from '@/lib/loadReports'
import Link from 'next/link'

export const metadata = { title: 'Reports' }

export default async function ReportsPage() {
  const reports = await getAllReports()

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Reports</h1>
      <p className="text-navy-400 mb-10">Enterprise MCP adoption research, published quarterly.</p>
      <div className="space-y-4">
        {reports.map((r) => (
          <Link
            key={r.slug}
            href={`/reports/${r.slug}`}
            className="flex items-center justify-between rounded-xl border border-navy-700 bg-navy-900 hover:border-cyan-600 transition px-6 py-5"
          >
            <div className="space-y-1">
              <h2 className="text-white font-semibold">{r.title}</h2>
              <p className="text-xs text-navy-400">{r.date ?? ''}</p>
            </div>
            <span className="text-cyan-400 text-sm shrink-0">Read →</span>
          </Link>
        ))}
      </div>
      {reports.length === 0 && (
        <p className="text-center text-navy-400 py-20">No reports yet.</p>
      )}
    </div>
  )
}
