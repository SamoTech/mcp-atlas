import { getReportSlugs, getReportBySlug } from '@/lib/loadReports'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getReportSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const r = await getReportBySlug(params.slug)
  return { title: r.title }
}

export default async function ReportDetailPage({ params }: { params: { slug: string } }) {
  const r = await getReportBySlug(params.slug)
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">{r.title}</h1>
      <article className="prose" dangerouslySetInnerHTML={{ __html: r.contentHtml }} />
    </div>
  )
}
