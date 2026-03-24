import clsx from 'clsx'

interface Props {
  tag: string
  className?: string
}

export default function TagBadge({ tag, className }: Props) {
  return (
    <span
      className={clsx(
        'inline-block px-2 py-0.5 rounded-full text-xs font-medium',
        'bg-navy-800 text-cyan-400 border border-cyan-800',
        className
      )}
    >
      {tag}
    </span>
  )
}
