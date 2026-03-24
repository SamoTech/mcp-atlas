import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing — MCP Atlas',
  description: 'Free public registry + Pro private workspaces for enterprise teams.',
  openGraph: {
    images: [{ url: '/api/og?title=Pricing&type=page', width: 1200, height: 630 }],
  },
}

const FREE_FEATURES = [
  'All 10+ verified enterprise case studies',
  'Server registry & architecture patterns',
  'Evidence Score calculator',
  'Compare any two deployments',
  'Full-text search',
  'RSS feed + Changelog',
  'Submit a case via GitHub',
]

const PRO_FEATURES = [
  'Everything in Free',
  '🔒 Private workspace — map your internal stack',
  '🔒 Team collaboration — invite teammates',
  '🔒 Stack Mapper — match your servers to reference architectures',
  '🔒 Export compliance-ready Markdown & PDF reports',
  '🔒 Unlimited private case entries',
  '🔒 Priority access to new reports',
]

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12 space-y-3">
        <h1 className="text-4xl font-bold text-white">Simple Pricing</h1>
        <p className="text-navy-400 text-lg">The registry is free forever. Pro unlocks private workspaces for your team.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Free */}
        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-8 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-2">Free</p>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-white">$0</span>
              <span className="text-navy-400 mb-1">/month</span>
            </div>
            <p className="text-navy-400 text-sm mt-2">Forever free. No credit card needed.</p>
          </div>
          <ul className="space-y-2.5">
            {FREE_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-navy-300">
                <span className="text-emerald-400 mt-0.5">✓</span> {f}
              </li>
            ))}
          </ul>
          <Link
            href="/cases"
            className="block text-center px-4 py-3 rounded-xl border border-navy-600 text-navy-300 font-semibold hover:border-cyan-600 hover:text-white transition"
          >
            Browse Cases →
          </Link>
        </div>

        {/* Pro */}
        <div className="rounded-2xl border-2 border-cyan-600 bg-navy-900 p-8 space-y-6 relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="px-3 py-1 rounded-full bg-cyan-600 text-white text-xs font-bold tracking-wide">COMING SOON</span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">Pro</p>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-navy-400 mb-1">/month per team</span>
            </div>
            <p className="text-navy-400 text-sm mt-2">Private workspaces + compliance exports.</p>
          </div>
          <ul className="space-y-2.5">
            {PRO_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-navy-300">
                <span className="text-cyan-400 mt-0.5">✓</span> {f.replace('🔒 ', '')}
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/SamoTech/mcp-atlas/issues/new?title=Pro+Waitlist&body=I%27m+interested+in+MCP+Atlas+Pro.%0A%0ATeam+size%3A+%0AUse+case%3A+"
            target="_blank" rel="noopener noreferrer"
            className="block text-center px-4 py-3 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition"
          >
            Join the Waitlist →
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16 space-y-6">
        <h2 className="text-xl font-bold text-white text-center">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is the registry really free forever?',
              a: 'Yes. All public case studies, server profiles, patterns, and reports will always be free and open-source on GitHub.',
            },
            {
              q: 'What does “private workspace” mean?',
              a: 'A secure area where your team can document internal MCP deployments that you don’t want public. Data stays encrypted and only visible to your team.',
            },
            {
              q: 'When does Pro launch?',
              a: 'We are targeting Q2 2026. Join the waitlist to get early access and influence the feature set.',
            },
            {
              q: 'Can I contribute case studies without Pro?',
              a: 'Absolutely. Public case submissions are always free via GitHub issues. Pro is only for private internal mappings.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-navy-700 bg-navy-900 px-6 py-5 space-y-1">
              <p className="text-white font-semibold text-sm">{q}</p>
              <p className="text-navy-400 text-sm">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
