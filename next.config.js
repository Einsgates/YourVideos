/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
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
