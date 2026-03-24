import { getAllCases } from '@/lib/loadCases'
import StackMapperClient from './StackMapperClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stack Mapper — MCP Atlas',
  description: 'Map your MCP stack against public reference architectures and see how you compare.',
  openGraph: {
    images: [{ url: '/api/og?title=Stack+Mapper&type=page', width: 1200, height: 630 }],
  },
}

export default async function StackPage() {
  const cases = await getAllCases()
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10 text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-800 bg-cyan-900/20 text-cyan-400 text-xs font-semibold mb-4">
          🗺️ Phase 3 — Stack Mapper
        </div>
        <h1 className="text-3xl font-bold text-white">Map Your MCP Stack</h1>
        <p className="text-navy-400 max-w-xl mx-auto">Select the servers you’ve deployed, then see which public reference architectures match your stack most closely.</p>
      </div>
      <StackMapperClient cases={cases} />
    </div>
  )
}
