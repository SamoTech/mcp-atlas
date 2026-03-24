'use client'

import { useState, useEffect } from 'react'

type PrivateCase = {
  id: string
  company: string
  useCase: string
  systems: string
  pattern: string
  notes: string
  createdAt: string
}

const STORAGE_KEY = 'mcp_atlas_workspace'

function loadCases(): PrivateCase[] {
  if (typeof window === 'undefined') return []
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') } catch { return [] }
}

function saveCases(cases: PrivateCase[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases))
}

const PATTERNS = [
  'Hub-and-Spoke',
  'Federated Registry',
  'Risk-Tiered Access',
  'Bidirectional Bridge',
  'Internal API Proxy',
  'Sandboxed Developer',
  'Other',
]

const empty = { company: '', useCase: '', systems: '', pattern: PATTERNS[0], notes: '' }

export default function WorkspaceClient() {
  const [cases, setCases]     = useState<PrivateCase[]>([])
  const [form, setForm]       = useState(empty)
  const [adding, setAdding]   = useState(false)
  const [exported, setExported] = useState(false)

  useEffect(() => { setCases(loadCases()) }, [])

  function add() {
    if (!form.company.trim() || !form.useCase.trim()) return
    const next = [...cases, { ...form, id: crypto.randomUUID(), createdAt: new Date().toISOString() }]
    setCases(next); saveCases(next); setForm(empty); setAdding(false)
  }

  function remove(id: string) {
    const next = cases.filter((c) => c.id !== id)
    setCases(next); saveCases(next)
  }

  function exportMd() {
    const md = [
      '# MCP Atlas — Private Workspace Export',
      `_Exported ${new Date().toLocaleDateString()}_`,
      '',
      ...cases.map((c, i) => [
        `## ${i + 1}. ${c.company}`,
        `**Use Case:** ${c.useCase}`,
        `**Systems:** ${c.systems || '—'}`,
        `**Pattern:** ${c.pattern}`,
        c.notes ? `**Notes:** ${c.notes}` : '',
        '',
      ].filter(Boolean).join('\n')),
    ].join('\n')
    const blob = new Blob([md], { type: 'text/markdown' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob)
    a.download = 'mcp-workspace-export.md'; a.click()
    setExported(true); setTimeout(() => setExported(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-navy-400">{cases.length} private {cases.length === 1 ? 'entry' : 'entries'} — stored locally in your browser</p>
        <div className="flex gap-2">
          {cases.length > 0 && (
            <button
              onClick={exportMd}
              className="text-xs px-3 py-1.5 rounded-lg border border-navy-700 text-navy-400 hover:border-cyan-600 hover:text-cyan-400 transition"
            >
              {exported ? '✅ Downloaded!' : '⬇️ Export Markdown'}
            </button>
          )}
          <button
            onClick={() => setAdding(true)}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-700 text-cyan-400 hover:bg-cyan-500/20 transition"
          >
            + Add Entry
          </button>
        </div>
      </div>

      {/* Add form */}
      {adding && (
        <div className="rounded-2xl border border-cyan-800 bg-cyan-900/10 p-6 space-y-4">
          <h3 className="text-white font-semibold">New Private Entry</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { key: 'company',  label: 'Company / Team',    placeholder: 'e.g. Acme Corp' },
              { key: 'useCase',  label: 'Use Case',          placeholder: 'e.g. Dev productivity' },
              { key: 'systems',  label: 'Systems Connected', placeholder: 'e.g. GitHub, Jira, Slack' },
            ].map(({ key, label, placeholder }) => (
              <div key={key} className="space-y-1.5">
                <label className="text-xs font-medium text-navy-400">{label}</label>
                <input
                  value={(form as Record<string, string>)[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full rounded-xl border border-navy-700 bg-navy-800 text-white px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 transition placeholder:text-navy-600"
                />
              </div>
            ))}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-navy-400">Architecture Pattern</label>
              <select
                value={form.pattern}
                onChange={(e) => setForm({ ...form, pattern: e.target.value })}
                className="w-full rounded-xl border border-navy-700 bg-navy-800 text-white px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 transition"
              >
                {PATTERNS.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-navy-400">Notes (optional)</label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Governance notes, outcomes, blockers…"
              rows={3}
              className="w-full rounded-xl border border-navy-700 bg-navy-800 text-white px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 transition placeholder:text-navy-600 resize-none"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={() => setAdding(false)} className="text-sm text-navy-400 hover:text-white px-4 py-2 transition">Cancel</button>
            <button
              onClick={add}
              disabled={!form.company.trim() || !form.useCase.trim()}
              className="text-sm font-semibold px-4 py-2 rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Save Entry
            </button>
          </div>
        </div>
      )}

      {/* Entries list */}
      {cases.length === 0 && !adding ? (
        <div className="rounded-2xl border border-dashed border-navy-700 py-20 text-center space-y-3">
          <p className="text-4xl">🗂️</p>
          <p className="text-white font-medium">No private entries yet</p>
          <p className="text-navy-400 text-sm">Add your internal MCP deployments to build your private map.</p>
          <button
            onClick={() => setAdding(true)}
            className="mt-2 text-sm font-semibold px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-700 text-cyan-400 hover:bg-cyan-500/20 transition"
          >
            + Add your first entry
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {cases.map((c) => (
            <div key={c.id} className="rounded-xl border border-navy-700 bg-navy-900 px-5 py-4 flex items-start justify-between gap-4">
              <div className="space-y-1 min-w-0">
                <p className="text-white font-semibold">{c.company}</p>
                <p className="text-navy-400 text-sm">{c.useCase}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {c.systems && <span className="text-xs px-2 py-0.5 rounded bg-navy-800 text-navy-300">{c.systems}</span>}
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-900">{c.pattern}</span>
                </div>
                {c.notes && <p className="text-navy-500 text-xs mt-1 italic">{c.notes}</p>}
              </div>
              <button
                onClick={() => remove(c.id)}
                className="text-navy-600 hover:text-red-400 transition text-lg shrink-0 mt-0.5"
                aria-label="Remove entry"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pro upsell */}
      <div className="rounded-2xl border border-dashed border-navy-700 bg-navy-900/40 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-semibold">🔒 Team Collaboration — Coming in Pro</p>
          <p className="text-navy-400 text-sm mt-1">Share your workspace with teammates, assign owners, and track internal MCP rollouts together.</p>
        </div>
        <a
          href="/pricing"
          className="shrink-0 text-sm font-semibold px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-700 text-cyan-400 hover:bg-cyan-500/20 transition"
        >
          See Pricing →
        </a>
      </div>
    </div>
  )
}
