import { getReportSlugs, getReportBySlug } from '@/lib/loadReports'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getReportSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const r = await getReportBySlug(params.slug)
  return {
    title: `${r.title} — MCP Atlas Report`,
    description: `${r.title}${r.date ? ' · ' + r.date : ''}`,
    openGraph: {
      title: r.title,
      description: `MCP Atlas Research Report${r.date ? ' · ' + r.date : ''}`,
      images: [{ url: `/api/og?title=${encodeURIComponent(r.title)}&type=page`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function ReportDetailPage({ params }: { params: { slug: string } }) {
  const r = await getReportBySlug(params.slug)
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-xs text-navy-400 mb-6 flex items-center gap-1.5">
        <a href="/" className="hover:text-cyan-400 transition">Home</a>
        <span>/</span>
        <a href="/reports" className="hover:text-cyan-400 transition">Reports</a>
        <span>/</span>
        <span className="text-white">{r.title}</span>
      </nav>
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold text-white">{r.title}</h1>
        {r.date && <p className="text-navy-400 text-sm">{r.date}</p>}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Report',
          headline: r.title,
          datePublished: r.date,
          url: `https://mcp-atls.vercel.app/reports/${r.slug}`,
          publisher: { '@type': 'Organization', name: 'MCP Atlas', url: 'https://mcp-atls.vercel.app' },
        }) }}
      />
      <article className="prose prose-invert prose-table:text-sm max-w-none" dangerouslySetInnerHTML={{ __html: r.contentHtml }} />
    </div>
  )
}
