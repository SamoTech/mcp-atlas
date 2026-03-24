import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { getSiteIndex, ServerMeta } from './index'
import { rewriteMarkdownLinks } from './rewriteLinks'

export interface ServerFull extends ServerMeta {
  title: string
  contentHtml: string
}

const SERVERS_DIR = path.join(process.cwd(), '..', 'data', 'servers')

export function getServerSlugs(): string[] {
  return fs
    .readdirSync(SERVERS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export async function getServerBySlug(slug: string): Promise<ServerFull> {
  const fullPath = path.join(SERVERS_DIR, `${slug}.md`)
  const raw = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content)
  const index = getSiteIndex()
  const meta = index.servers.find((s) => s.slug === slug)!
  return {
    ...meta,
    title: data.title ?? slug,
    contentHtml: rewriteMarkdownLinks(processed.toString()),
  }
}

export async function getAllServers(): Promise<ServerFull[]> {
  const slugs = getServerSlugs()
  return Promise.all(slugs.map(getServerBySlug))
}
