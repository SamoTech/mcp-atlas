import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { rewriteMarkdownLinks } from './rewriteLinks'

export interface PatternMeta {
  slug: string
  title: string
  summary: string
}

export interface PatternFull extends PatternMeta {
  contentHtml: string
}

const PATTERNS_DIR = path.join(process.cwd(), '..', 'docs', 'patterns')

export function getPatternSlugs(): string[] {
  if (!fs.existsSync(PATTERNS_DIR)) return []
  return fs
    .readdirSync(PATTERNS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export async function getPatternBySlug(slug: string): Promise<PatternFull> {
  const fullPath = path.join(PATTERNS_DIR, `${slug}.md`)
  const raw = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content)
  return {
    slug,
    title: data.title ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    summary: data.summary ?? '',
    contentHtml: rewriteMarkdownLinks(processed.toString()),
  }
}

export async function getAllPatterns(): Promise<PatternFull[]> {
  const slugs = getPatternSlugs()
  return Promise.all(slugs.map(getPatternBySlug))
}
