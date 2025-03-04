/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  reactStrictMode: true,
  images: {
    domains: ['graph.facebook.com', 'platform-lookaside.fbsbx.com', 'lh3.googleusercontent.com'],
    unoptimized: true,
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
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // Disable minification in webpack as well
    if (config.optimization && config.optimization.minimizer) {
      config.optimization.minimizer = [];
    }
    
    return config;
  },
}

module.exports = nextConfig