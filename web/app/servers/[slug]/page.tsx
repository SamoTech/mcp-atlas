import { getServerSlugs, getServerBySlug } from '@/lib/loadServers'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getServerSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = await getServerBySlug(params.slug)
  return { title: s.title }
}

export default async function ServerDetailPage({ params }: { params: { slug: string } }) {
  const s = await getServerBySlug(params.slug)
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{s.title}</h1>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-navy-800 text-cyan-400 border border-cyan-800">
          {s.category}
        </span>
      </div>
      <article className="prose" dangerouslySetInnerHTML={{ __html: s.contentHtml }} />
    </div>
  )
}
