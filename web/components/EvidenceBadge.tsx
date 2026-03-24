import clsx from 'clsx'

type Level = 'high' | 'medium' | 'low'

const styles: Record<Level, string> = {
  high:   'bg-emerald-900 text-emerald-300 border-emerald-700',
  medium: 'bg-yellow-900 text-yellow-300 border-yellow-700',
  low:    'bg-red-900 text-red-300 border-red-700',
}

interface Props {
  level: Level
}

export default function EvidenceBadge({ level }: Props) {
  return (
    <span
      className={clsx(
        'inline-block px-2 py-0.5 rounded text-xs font-semibold border uppercase tracking-wide',
        styles[level]
      )}
    >
      {level} evidence
    </span>
  )
}
