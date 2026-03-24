import { getPatternSlugs, getPatternBySlug } from '@/lib/loadPatterns'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getPatternSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await getPatternBySlug(params.slug)
  return { title: p.title }
}

export default async function PatternDetailPage({ params }: { params: { slug: string } }) {
  const p = await getPatternBySlug(params.slug)
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">{p.title}</h1>
      <article className="prose" dangerouslySetInnerHTML={{ __html: p.contentHtml }} />
    </div>
  )
}
