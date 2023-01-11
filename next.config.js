/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'gateway.ipfscdn.io'],
  },
}

module.exports = nextConfig
