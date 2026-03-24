interface Props {
  score: number
  max?: number
}

export default function ScoreStars({ score, max = 5 }: Props) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`Score ${score} of ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={i < score ? 'text-cyan-400' : 'text-navy-700'}
        >
          ★
        </span>
      ))}
    </span>
  )
}
