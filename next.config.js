/** @type {import('next').NextConfig} */
const nextConfig = {
  serverActions: true,
  output: 'export',
  images: { unoptimized: true },
}

module.exports = nextConfig
