import { getAllServers } from '@/lib/loadServers'
import ServerCard from '@/components/ServerCard'

export const metadata = { title: 'Server Registry' }

export default async function ServersPage() {
  const servers = await getAllServers()

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Server Registry</h1>
      <p className="text-navy-400 mb-10">Enterprise MCP servers with auth models, risk notes, and deployment patterns.</p>
      <div className="grid md:grid-cols-3 gap-5">
        {servers.map((s) => <ServerCard key={s.slug} s={s} />)}
      </div>
    </div>
  )
}
