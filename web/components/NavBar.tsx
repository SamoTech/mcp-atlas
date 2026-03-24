import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/cases',    label: 'Cases' },
  { href: '/servers',  label: 'Servers' },
  { href: '/patterns', label: 'Patterns' },
  { href: '/reports',  label: 'Reports' },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-800 bg-navy-900/90 backdrop-blur">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="MCP Atlas" width={32} height={32} className="rounded" />
          <span className="font-bold text-white">MCP <span className="text-cyan-400">Atlas</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm text-navy-300 hover:text-cyan-400 transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com/SamoTech/mcp-atlas'}
          target="_blank" rel="noopener noreferrer"
          className="text-xs font-medium px-3 py-1.5 rounded-lg border border-navy-600 text-navy-300 hover:border-cyan-500 hover:text-cyan-400 transition"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  )
}
