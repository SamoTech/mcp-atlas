/** @type {import('next').NextConfig} */
const path = require('path')

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
