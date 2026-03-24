/**
 * Rewrites relative markdown file links to proper web routes.
 * e.g. ../docs/patterns/hub-and-spoke.md  -> /patterns/hub-and-spoke
 *      ../data/cases/block.md             -> /cases/block
 *      ../data/servers/github-mcp.md      -> /servers/github-mcp
 *      ../reports/2026-q1-...md           -> /reports/2026-q1-...
 */
export function rewriteMarkdownLinks(html: string): string {
  return html
    // docs/patterns/*.md  (with optional ../ prefix)
    .replace(/href="[^"]*docs\/patterns\/([^"]+)\.md"/g, 'href="/patterns/$1"')
    // data/cases/*.md
    .replace(/href="[^"]*data\/cases\/([^"]+)\.md"/g, 'href="/cases/$1"')
    // data/servers/*.md
    .replace(/href="[^"]*data\/servers\/([^"]+)\.md"/g, 'href="/servers/$1"')
    // reports/*.md
    .replace(/href="[^"]*reports\/([^"]+)\.md"/g, 'href="/reports/$1"')
    // any remaining bare *.md link that slipped through
    .replace(/href="([^"]+)\.md"/g, (_, p) => {
      const slug = p.split('/').pop() ?? p
      return `href="/patterns/${slug}"`
    })
}
