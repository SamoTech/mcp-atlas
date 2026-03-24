import ScoreCalculator from '@/components/ScoreCalculator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Score Calculator — MCP Atlas',
  description: 'Rate an MCP case study before submitting. See if it meets the evidence bar.',
}

export default function ScorePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="mb-10 text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">Evidence Score Calculator</h1>
        <p className="text-navy-400">Use this to self-assess a case study before submitting it to MCP Atlas.</p>
      </div>
      <ScoreCalculator />
      <div className="mt-10 rounded-xl border border-navy-700 bg-navy-900 p-5 space-y-3">
        <h3 className="text-white font-semibold">How scoring works</h3>
        <ul className="text-sm text-navy-300 space-y-1.5">
          <li>🟢 <strong className="text-white">8–10</strong> — High evidence. Publishable as-is.</li>
          <li>🟡 <strong className="text-white">5–7</strong> — Medium evidence. Include with caveats.</li>
          <li>🔴 <strong className="text-white">0–4</strong> — Low evidence. Needs more verification before publishing.</li>
        </ul>
      </div>
    </div>
  )
}
