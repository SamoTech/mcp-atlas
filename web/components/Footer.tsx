export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-900 mt-24">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy-400">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p>© {new Date().getFullYear()} Ossama Hashim — MCP Atlas is open source under MIT.</p>
          <div className="flex items-center gap-3 text-xs">
            <a href="/feed.xml" className="hover:text-cyan-400 transition flex items-center gap-1">
              <span>📶</span> RSS Feed
            </a>
            <span>·</span>
            <a href="/sitemap.xml" className="hover:text-cyan-400 transition">Sitemap</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/SamoTech/mcp-atlas"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-navy-700 hover:border-cyan-600 hover:text-cyan-400 transition"
          >
            <span>★</span>
            <span>Star on GitHub</span>
          </a>
          <a href="https://github.com/sponsors/SamoTech" target="_blank" rel="noopener noreferrer"
            className="hover:text-cyan-400 transition">♥ Sponsor</a>
          <a href="/reports" className="hover:text-cyan-400 transition">Reports</a>
        </div>
      </div>
    </footer>
  )
}
