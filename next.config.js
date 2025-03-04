/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['graph.facebook.com', 'platform-lookaside.fbsbx.com', 'lh3.googleusercontent.com'],
    unoptimized: false,
  },
  experimental: {
    serverActions: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://bolt2-qmvt.vercel.app',
  },
}

module.exports = nextConfig