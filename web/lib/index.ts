import path from 'path'
import fs from 'fs'

export interface CaseMeta {
  slug: string
  score: number
  evidence_level: 'high' | 'medium' | 'low'
  last_verified: string
  source_count: number
  named_systems_count: number
  governance_disclosed: boolean
  outcomes_disclosed: boolean
  tags: string[]
}

export interface ServerMeta {
  slug: string
  category: string
}

export interface ReportMeta {
  slug: string
  title: string
}

export interface SiteIndex {
  version: string
  generated_at: string
  cases: CaseMeta[]
  servers: ServerMeta[]
  reports: ReportMeta[]
}

let _cache: SiteIndex | null = null

export function getSiteIndex(): SiteIndex {
  if (_cache) return _cache
  const filePath = path.join(process.cwd(), '..', 'data', 'index.json')
  const raw = fs.readFileSync(filePath, 'utf-8')
  _cache = JSON.parse(raw) as SiteIndex
  return _cache
}
