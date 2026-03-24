import type { Metadata } from 'next'
import WorkspaceClient from './WorkspaceClient'

export const metadata: Metadata = {
  title: 'Private Workspace — MCP Atlas',
  description: 'Map your internal MCP stack, add private case studies, and export compliance-ready architecture reports.',
  openGraph: {
    images: [{ url: '/api/og?title=Private+Workspace&type=page', width: 1200, height: 630 }],
  },
}

export default function WorkspacePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10 text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-800 bg-cyan-900/20 text-cyan-400 text-xs font-semibold mb-4">
          🔒 Phase 3 — Private Workspaces
        </div>
        <h1 className="text-3xl font-bold text-white">Your Private Workspace</h1>
        <p className="text-navy-400 max-w-xl mx-auto">Map your internal MCP deployments, track your stack, and export compliance-ready reports — all private to your team.</p>
      </div>
      <WorkspaceClient />
    </div>
  )
}
