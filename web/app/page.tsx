import Image from 'next/image'
import Link from 'next/link'
import { getSiteIndex } from '@/lib/index'
import { getAllCases } from '@/lib/loadCases'
import CaseCard from '@/components/CaseCard'

export default async function HomePage() {
  const index = getSiteIndex()
  const cases = await getAllCases()

  const stats = [
    { label: 'Cases Verified',     value: index.cases.length },
    { label: 'Servers Documented', value: index.servers.length },
    { label: 'Reports Published',  value: index.reports.length },
    { label: 'Architecture Patterns', value: 6 },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 border-b border-navy-800">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <Image src="/logo.png" alt="MCP Atlas" width={80} height={80}
            className="mx-auto mb-6 rounded-2xl" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MCP <span className="text-cyan-400">Atlas</span>
          </h1>
          <p className="text-lg md:text-xl text-navy-300 max-w-2xl mx-auto mb-8">
            The definitive registry of real-world enterprise MCP deployments.
            Evidence-scored. Architecture-documented. Open source.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cases"
              className="px-6 py-3 rounded-lg bg-cyan-500 text-navy-900 font-semibold hover:bg-cyan-400 transition">
              Explore Cases
            </Link>
            <Link href="/servers"
              className="px-6 py-3 rounded-lg border border-navy-600 text-navy-300 hover:border-cyan-500 hover:text-cyan-400 transition">
              Server Registry
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-navy-800 bg-navy-900/50">
        <div className="mx-auto max-w-5xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-cyan-400">{s.value}</p>
              <p className="text-sm text-navy-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cases */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Featured Cases</h2>
          <Link href="/cases" className="text-sm text-cyan-400 hover:underline">View all →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c) => <CaseCard key={c.slug} c={c} />)}
        </div>
      </section>
    </div>
  )
}
