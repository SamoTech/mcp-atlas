import { getCaseSlugs, getCaseBySlug } from '@/lib/loadCases'
import ScoreStars from '@/components/ScoreStars'
import EvidenceBadge from '@/components/EvidenceBadge'
import TagBadge from '@/components/TagBadge'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const c = await getCaseBySlug(params.slug)
  return {
    title: c.title,
    description: `Evidence score ${c.score}/10 · ${c.source_count} sources · ${c.named_systems_count} named systems`,
    openGraph: {
      title: `${c.title} — MCP Atlas`,
      description: `Evidence score ${c.score}/10 · ${c.tags.join(', ')}`,
      images: [{
        url: `/api/og?title=${encodeURIComponent(c.title)}&score=${c.score}&type=case`,
        width: 1200,
        height: 630,
      }],
    },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function CaseDetailPage({ params }: { params: { slug: string } }) {
  const c = await getCaseBySlug(params.slug)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6">
        <a href="/cases" className="text-sm text-cyan-400 hover:underline">← Cases</a>
      </div>
      <div className="mb-8 space-y-3">
        <h1 className="text-3xl font-bold text-white">{c.title}</h1>
        <div className="flex flex-wrap items-center gap-3">
          <ScoreStars score={c.score} />
          <EvidenceBadge level={c.evidence_level} />
          <span className="text-xs text-navy-400">{c.named_systems_count} systems · {c.source_count} sources · verified {c.last_verified}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {c.tags.map((t) => <TagBadge key={t} tag={t} />)}
        </div>
      </div>
      <article
        className="prose prose-invert prose-table:text-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: c.contentHtml }}
      />
    </div>
  )
}
