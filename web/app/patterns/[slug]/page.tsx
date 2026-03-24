import { getPatternSlugs, getPatternBySlug } from '@/lib/loadPatterns'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getPatternSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await getPatternBySlug(params.slug)
  return { title: `${p.title} — Architecture Pattern` }
}

export default async function PatternDetailPage({ params }: { params: { slug: string } }) {
  const p = await getPatternBySlug(params.slug)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6">
        <a href="/patterns" className="text-sm text-cyan-400 hover:underline">← Architecture Patterns</a>
      </div>
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold text-white">{p.title}</h1>
        {p.summary && (
          <p className="text-navy-300 text-lg">{p.summary}</p>
        )}
      </div>
      <article
        className="prose prose-invert prose-table:text-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: p.contentHtml }}
      />
    </div>
  )
}
