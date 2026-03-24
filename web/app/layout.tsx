import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'MCP Atlas', template: '%s — MCP Atlas' },
  description: 'The definitive registry of real-world enterprise MCP deployments.',
  openGraph: {
    siteName: 'MCP Atlas',
    images: ['/banner.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
