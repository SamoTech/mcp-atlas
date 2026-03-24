import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { getSiteIndex, ReportMeta } from './index'
import { rewriteMarkdownLinks } from './rewriteLinks'

export interface ReportFull extends ReportMeta {
  date?: string
  contentHtml: string
}

const REPORTS_DIR = path.join(process.cwd(), '..', 'reports')

export function getReportSlugs(): string[] {
  if (!fs.existsSync(REPORTS_DIR)) return []
  return fs
    .readdirSync(REPORTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export async function getReportBySlug(slug: string): Promise<ReportFull> {
  const fullPath = path.join(REPORTS_DIR, `${slug}.md`)
  const raw = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content)
  const index = getSiteIndex()
  const meta = index.reports.find((r) => r.slug === slug)
  return {
    slug,
    title: data.title ?? meta?.title ?? slug,
    date: data.date ?? undefined,
    contentHtml: rewriteMarkdownLinks(processed.toString()),
  }
}

export async function getAllReports(): Promise<ReportFull[]> {
  const slugs = getReportSlugs()
  return Promise.all(slugs.map(getReportBySlug))
}
