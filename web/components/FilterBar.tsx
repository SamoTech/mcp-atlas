'use client'
import clsx from 'clsx'

interface FilterBarProps {
  scores: number[]
  activeScore: number | null
  onScoreChange: (s: number | null) => void
  tags?: string[]
  activeTag: string | null
  onTagChange: (t: string | null) => void
}

export default function FilterBar({
  scores, activeScore, onScoreChange,
  tags, activeTag, onTagChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-xs text-navy-400 uppercase tracking-wide">Score</span>
      {scores.map((s) => (
        <button key={s}
          onClick={() => onScoreChange(activeScore === s ? null : s)}
          className={clsx(
            'px-3 py-1 rounded-full text-xs font-medium border transition',
            activeScore === s
              ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
              : 'border-navy-600 text-navy-400 hover:border-cyan-700'
          )}
        >
          {'\u2605'.repeat(s)}
        </button>
      ))}

      {tags && tags.length > 0 && (
        <>
          <span className="text-xs text-navy-400 uppercase tracking-wide ml-4">Tag</span>
          {tags.map((t) => (
            <button key={t}
              onClick={() => onTagChange(activeTag === t ? null : t)}
              className={clsx(
                'px-2 py-0.5 rounded-full text-xs font-medium border transition',
                activeTag === t
                  ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                  : 'border-navy-600 text-navy-400 hover:border-cyan-700'
              )}
            >
              {t}
            </button>
          ))}
        </>
      )}
    </div>
  )
}
