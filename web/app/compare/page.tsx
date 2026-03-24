import { getAllCases } from '@/lib/loadCases'
import CompareClient from './CompareClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare Cases — MCP Atlas',
  description: 'Compare two enterprise MCP case studies side by side.',
  openGraph: {
    images: [{ url: '/api/og?title=Compare+Cases&type=page', width: 1200, height: 630 }],
  },
}

export default async function ComparePage() {
  const cases = await getAllCases()
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">Compare Cases</h1>
        <p className="text-navy-400">Select two enterprise MCP deployments to compare side by side.</p>
      </div>
      <CompareClient cases={cases} />
    </div>
  )
}
