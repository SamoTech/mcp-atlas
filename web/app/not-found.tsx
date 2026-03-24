import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24 space-y-6">
      <div className="text-6xl">&#x1F5FA;&#xFE0F;</div>
      <div className="space-y-2">
        <h1 className="text-5xl font-bold text-white">404</h1>
        <p className="text-navy-300 text-lg">This page isn’t on the map yet.</p>
      </div>
      <p className="text-navy-400 max-w-md">
        The case, server, or pattern you’re looking for may have moved or doesn’t exist.
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link href="/" className="px-5 py-2.5 rounded-lg bg-cyan-500 text-navy-900 font-semibold hover:bg-cyan-400 transition text-sm">
          Home
        </Link>
        <Link href="/cases" className="px-5 py-2.5 rounded-lg border border-navy-600 text-navy-300 hover:border-cyan-500 hover:text-cyan-400 transition text-sm">
          Browse Cases
        </Link>
        <Link href="/search" className="px-5 py-2.5 rounded-lg border border-navy-600 text-navy-300 hover:border-cyan-500 hover:text-cyan-400 transition text-sm">
          Search
        </Link>
      </div>
    </div>
  )
}
