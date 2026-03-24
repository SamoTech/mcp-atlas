/** @type {import('next').NextConfig} */
const path = require('path')
const fs = require('fs')

// Copy docs/assets/*.png into public/ so Next.js static export serves them
const assetsDir = path.join(__dirname, '..', 'docs', 'assets')
const publicDir = path.join(__dirname, 'public')
if (fs.existsSync(assetsDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
  for (const file of fs.readdirSync(assetsDir)) {
    if (file.endsWith('.png') || file.endsWith('.svg') || file.endsWith('.jpg')) {
      fs.copyFileSync(
        path.join(assetsDir, file),
        path.join(publicDir, file)
      )
    }
  }
}

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  webpack(config) {
    config.resolve.alias['@data'] = path.join(__dirname, '..', 'data')
    config.resolve.alias['@docs'] = path.join(__dirname, '..', 'docs')
    config.resolve.alias['@reports'] = path.join(__dirname, '..', 'reports')
    return config
  },
}

module.exports = nextConfig
