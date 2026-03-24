import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsletter — MCP Atlas',
  description: 'Get notified when new enterprise MCP case studies are published. Join the MCP Atlas newsletter.',
}

export default function NewsletterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-700 text-3xl">
          📬
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-white">Stay ahead of enterprise MCP</h1>
          <p className="text-navy-300 text-lg">
            Get notified when new verified case studies land. No noise — just real deployments, once a week.
          </p>
        </div>

        {/* Benefits */}
        <ul className="text-left space-y-2 text-sm text-navy-300">
          {[
            '📋 New case studies as they are verified',
            '📊 Monthly stats digest — adoption trends by industry',
            '🔔 Early access to new Atlas features',
            '🔒 No spam. Unsubscribe any time.',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Subscribe form — links to GitHub issue as waitlist */}
        <div className="rounded-xl border border-navy-700 bg-navy-900 p-6 space-y-4">
          <p className="text-sm text-navy-400">We're setting up the newsletter. Join the waitlist now and you'll be first on the list.</p>
          <a
            href="https://github.com/SamoTech/mcp-atlas/issues/new?template=newsletter_signup.yml&title=Newsletter+Signup&labels=newsletter"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 rounded-lg bg-cyan-500 text-navy-900 font-semibold hover:bg-cyan-400 transition"
          >
            Join the Waitlist →
          </a>
          <p className="text-xs text-navy-500">Opens a quick GitHub form. No account required for the newsletter itself.</p>
        </div>

        {/* Social proof */}
        <p className="text-sm text-navy-400">
          Already tracking <span className="text-cyan-400 font-semibold">20 verified cases</span> across 10 industries.
        </p>
      </div>
    </div>
  )
}
