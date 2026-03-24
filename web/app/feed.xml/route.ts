import { getAllCases } from '@/lib/loadCases'

const BASE = 'https://mcp-atls.vercel.app'

export async function GET() {
  const cases = await getAllCases()

  const items = cases
    .map(
      (c) => `
  <item>
    <title><![CDATA[${c.title}]]></title>
    <link>${BASE}/cases/${c.slug}</link>
    <guid>${BASE}/cases/${c.slug}</guid>
    <description><![CDATA[Evidence score ${c.score}/10 · ${c.tags.join(', ')}]]></description>
    <pubDate>${new Date(c.last_verified).toUTCString()}</pubDate>
  </item>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MCP Atlas — New Cases</title>
    <link>${BASE}</link>
    <description>New enterprise MCP case studies added to MCP Atlas.</description>
    <language>en-us</language>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
