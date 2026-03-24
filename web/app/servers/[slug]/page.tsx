import { getServerSlugs, getServerBySlug } from '@/lib/loadServers'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getServerSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = await getServerBySlug(params.slug)
  return {
    title: `${s.title} — MCP Server`,
    description: `Enterprise MCP server profile for ${s.title}. Category: ${s.category}.`,
    openGraph: {
      title: `${s.title} — MCP Atlas`,
      description: `Enterprise MCP server · ${s.category}`,
      images: [{ url: `/api/og?title=${encodeURIComponent(s.title)}&type=server`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function ServerDetailPage({ params }: { params: { slug: string } }) {
  const s = await getServerBySlug(params.slug)
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-xs text-navy-400 mb-6 flex items-center gap-1.5">
        <a href="/" className="hover:text-cyan-400 transition">Home</a>
        <span>/</span>
        <a href="/servers" className="hover:text-cyan-400 transition">Servers</a>
        <span>/</span>
        <span className="text-white">{s.title}</span>
      </nav>
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold text-white">{s.title}</h1>
        <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold border uppercase tracking-wide bg-navy-800 text-cyan-400 border-cyan-800">{s.category}</span>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: s.title,
          description: `Enterprise MCP server profile: ${s.title}`,
          url: `https://mcp-atls.vercel.app/servers/${s.slug}`,
          publisher: { '@type': 'Organization', name: 'MCP Atlas', url: 'https://mcp-atls.vercel.app' },
        }) }}
      />
      <article className="prose prose-invert prose-table:text-sm max-w-none" dangerouslySetInnerHTML={{ __html: s.contentHtml }} />
    </div>
  )
}
