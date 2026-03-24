import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { getSiteIndex, CaseMeta } from './index'
import { rewriteMarkdownLinks } from './rewriteLinks'

export interface CaseFull extends CaseMeta {
  title: string
  contentHtml: string
}

const CASES_DIR = path.join(process.cwd(), '..', 'data', 'cases')

export function getCaseSlugs(): string[] {
  return fs
    .readdirSync(CASES_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export async function getCaseBySlug(slug: string): Promise<CaseFull> {
  const fullPath = path.join(CASES_DIR, `${slug}.md`)
  const raw = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(raw)
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content)
  const index = getSiteIndex()
  const meta = index.cases.find((c) => c.slug === slug)!
  return {
    ...meta,
    title: data.title ?? slug,
    contentHtml: rewriteMarkdownLinks(processed.toString()),
  }
}

export async function getAllCases(): Promise<CaseFull[]> {
  const slugs = getCaseSlugs()
  return Promise.all(slugs.map(getCaseBySlug))
}
