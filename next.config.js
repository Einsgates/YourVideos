/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'jiayuan-albert.github.io',
      'lh3.googleusercontent.com'
    ]
  },
  // swcMinify: true,
}

module.exports = nextConfig
