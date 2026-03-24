'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/cases',     label: 'Cases' },
  { href: '/servers',   label: 'Servers' },
  { href: '/patterns',  label: 'Patterns' },
  { href: '/reports',   label: 'Reports' },
  { href: '/score',     label: 'Score' },
  { href: '/compare',   label: 'Compare' },
  { href: '/changelog', label: "What's New" },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-navy-800 bg-navy-900/95 backdrop-blur">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="MCP Atlas" width={32} height={32} className="rounded" />
          <span className="font-bold text-white">MCP <span className="text-cyan-400">Atlas</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`text-sm transition ${
                pathname.startsWith(l.href)
                  ? 'text-cyan-400 font-medium'
                  : 'text-navy-300 hover:text-cyan-400'
              }`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/search" aria-label="Search"
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg border border-navy-700 text-navy-400 hover:border-cyan-600 hover:text-cyan-400 transition text-sm">
            🔍
          </Link>
          <ThemeToggle />
          <a
            href="https://github.com/SamoTech/mcp-atlas/issues/new?template=case_submission.yml&title=Submit+Case&labels=case-submission"
            target="_blank" rel="noopener noreferrer"
            className="hidden md:block text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-700 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition"
          >
            + Submit Case
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg border border-navy-700 hover:border-cyan-600 transition"
          >
            <span className={`block w-5 h-0.5 bg-navy-300 transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-navy-300 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-navy-300 transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy-800 bg-navy-900 px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                pathname.startsWith(l.href)
                  ? 'bg-cyan-900/30 text-cyan-400'
                  : 'text-navy-300 hover:bg-navy-800 hover:text-white'
              }`}>
              {l.label}
            </Link>
          ))}
          <Link href="/search"
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-navy-300 hover:bg-navy-800 hover:text-white transition">
            🔍 Search
          </Link>
          <div className="pt-3 border-t border-navy-800 mt-2">
            <a
              href="https://github.com/SamoTech/mcp-atlas/issues/new?template=case_submission.yml&title=Submit+Case&labels=case-submission"
              target="_blank" rel="noopener noreferrer"
              className="block text-center px-3 py-2.5 rounded-lg bg-cyan-500/10 border border-cyan-700 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition"
            >
              + Submit Case
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
