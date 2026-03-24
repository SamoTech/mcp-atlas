import { getReportSlugs, getReportBySlug } from '@/lib/loadReports'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getReportSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const r = await getReportBySlug(params.slug)
  return { title: `${r.title} — MCP Atlas Report` }
}

export default async function ReportDetailPage({ params }: { params: { slug: string } }) {
  const r = await getReportBySlug(params.slug)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6">
        <a href="/reports" className="text-sm text-cyan-400 hover:underline">← Reports</a>
      </div>
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold text-white">{r.title}</h1>
        {r.date && <p className="text-navy-400 text-sm">{r.date}</p>}
      </div>
      <article
        className="prose prose-invert prose-table:text-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: r.contentHtml }}
      />
    </div>
  )
}
