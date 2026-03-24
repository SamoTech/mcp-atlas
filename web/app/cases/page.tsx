import { getAllCases } from '@/lib/loadCases'
import CasesClient from './CasesClient'

export const metadata = { title: 'Enterprise Cases' }

export default async function CasesPage() {
  const cases = await getAllCases()
  return <CasesClient cases={cases} />
}
