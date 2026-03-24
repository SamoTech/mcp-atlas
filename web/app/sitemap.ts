import { MetadataRoute } from 'next'
import { getCaseSlugs } from '@/lib/loadCases'
import { getServerSlugs } from '@/lib/loadServers'
import { getPatternSlugs } from '@/lib/loadPatterns'
import { getReportSlugs } from '@/lib/loadReports'

const BASE = 'https://mcp-atls.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const cases    = getCaseSlugs().map((s) => ({ url: `${BASE}/cases/${s}`,    lastModified: new Date(), changeFrequency: 'weekly'  as const, priority: 0.8 }))
  const servers  = getServerSlugs().map((s) => ({ url: `${BASE}/servers/${s}`,  lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 }))
  const patterns = getPatternSlugs().map((s) => ({ url: `${BASE}/patterns/${s}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 }))
  const reports  = getReportSlugs().map((s) => ({ url: `${BASE}/reports/${s}`,  lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 }))

  return [
    { url: BASE,               lastModified: new Date(), changeFrequency: 'daily'   as const, priority: 1.0 },
    { url: `${BASE}/cases`,    lastModified: new Date(), changeFrequency: 'daily'   as const, priority: 0.9 },
    { url: `${BASE}/servers`,  lastModified: new Date(), changeFrequency: 'weekly'  as const, priority: 0.7 },
    { url: `${BASE}/patterns`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/reports`,  lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE}/score`,    lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${BASE}/search`,   lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    ...cases, ...servers, ...patterns, ...reports,
  ]
}
