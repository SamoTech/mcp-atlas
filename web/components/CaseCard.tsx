import Link from 'next/link'
import type { CaseMeta } from '@/lib/index'
import ScoreStars from './ScoreStars'
import EvidenceBadge from './EvidenceBadge'
import TagBadge from './TagBadge'

interface Props {
  c: CaseMeta & { title: string }
}

export default function CaseCard({ c }: Props) {
  return (
    <Link
      href={`/cases/${c.slug}`}
      className="block rounded-xl border border-navy-700 bg-navy-900 hover:border-cyan-600 transition p-5 space-y-3"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-white font-semibold text-lg leading-tight">{c.title}</h3>
        <ScoreStars score={c.score} />
      </div>

      <EvidenceBadge level={c.evidence_level} />

      <div className="text-sm text-navy-300 space-y-1">
        <p>{c.named_systems_count} named systems · {c.source_count} sources</p>
        <p className="text-xs text-navy-400">Verified {c.last_verified}</p>
      </div>

      <div className="flex flex-wrap gap-1">
        {c.tags.map((t) => (
          <TagBadge key={t} tag={t} />
        ))}
      </div>
    </Link>
  )
}
