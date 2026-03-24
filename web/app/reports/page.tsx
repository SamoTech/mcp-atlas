import { getAllReports } from '@/lib/loadReports'
import Link from 'next/link'

export const metadata = { title: 'Reports' }

export default async function ReportsPage() {
  const reports = await getAllReports()
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Reports</h1>
      <p className="text-navy-400 mb-10">Enterprise MCP adoption research and analysis.</p>
      <div className="space-y-4">
        {reports.map((r) => (
          <Link key={r.slug} href={`/reports/${r.slug}`}
            className="block rounded-xl border border-navy-700 bg-navy-900 hover:border-cyan-600 p-5 transition">
            <h2 className="text-white font-semibold text-lg">{r.title}</h2>
            <p className="text-sm text-navy-400 mt-1">Read report →</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
