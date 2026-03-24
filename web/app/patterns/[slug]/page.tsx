import { getPatternSlugs, getPatternBySlug } from '@/lib/loadPatterns'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getPatternSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await getPatternBySlug(params.slug)
  return {
    title: `${p.title} — Architecture Pattern`,
    description: p.summary,
    openGraph: {
      title: `${p.title} — MCP Atlas`,
      description: p.summary,
      images: [{ url: `/api/og?title=${encodeURIComponent(p.title)}&type=pattern`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function PatternDetailPage({ params }: { params: { slug: string } }) {
  const p = await getPatternBySlug(params.slug)
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-xs text-navy-400 mb-6 flex items-center gap-1.5">
        <a href="/" className="hover:text-cyan-400 transition">Home</a>
        <span>/</span>
        <a href="/patterns" className="hover:text-cyan-400 transition">Patterns</a>
        <span>/</span>
        <span className="text-white">{p.title}</span>
      </nav>
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold text-white">{p.title}</h1>
        {p.summary && <p className="text-navy-300 text-lg">{p.summary}</p>}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: p.title,
          description: p.summary,
          url: `https://mcp-atls.vercel.app/patterns/${p.slug}`,
          publisher: { '@type': 'Organization', name: 'MCP Atlas', url: 'https://mcp-atls.vercel.app' },
        }) }}
      />
      <article className="prose prose-invert prose-table:text-sm max-w-none" dangerouslySetInnerHTML={{ __html: p.contentHtml }} />
    </div>
  )
}
