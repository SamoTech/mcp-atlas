import { getServerSlugs, getServerBySlug } from '@/lib/loadServers'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getServerSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = await getServerBySlug(params.slug)
  return { title: `${s.title} — MCP Server` }
}

export default async function ServerDetailPage({ params }: { params: { slug: string } }) {
  const s = await getServerBySlug(params.slug)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6">
        <a href="/servers" className="text-sm text-cyan-400 hover:underline">← Server Registry</a>
      </div>
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold text-white">{s.title}</h1>
        <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold border uppercase tracking-wide bg-navy-800 text-cyan-400 border-cyan-800">
          {s.category}
        </span>
      </div>
      <article
        className="prose prose-invert prose-table:text-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: s.contentHtml }}
      />
    </div>
  )
}
