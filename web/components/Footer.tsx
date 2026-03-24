export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-900 mt-24">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy-400">
        <p>© {new Date().getFullYear()} Ossama Hashim — MCP Atlas is open source under MIT.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/SamoTech/mcp-atlas" target="_blank" rel="noopener noreferrer"
            className="hover:text-cyan-400 transition">GitHub</a>
          <a href="https://github.com/sponsors/SamoTech" target="_blank" rel="noopener noreferrer"
            className="hover:text-cyan-400 transition">♥ Sponsor</a>
          <a href="/reports" className="hover:text-cyan-400 transition">Reports</a>
        </div>
      </div>
    </footer>
  )
}
