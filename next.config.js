/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['graph.facebook.com'] // Add Facebook domain for images
  },
  // Ensure data directory is preserved during builds
  distDir: '.next',
  // Add output configuration for dynamic routes
  output: 'standalone',
  // Move outputFileTracingExcludes under experimental
  experimental: {
    serverActions: true,
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Increase build timeout if needed
  staticPageGenerationTimeout: 120,
  // Enable strict mode for better error catching
  reactStrictMode: true,
  // Disable x-powered-by header
  poweredByHeader: false,
  // Add tracing excludes at root level
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@esbuild/linux-x64',
    ],
  },
};

module.exports = nextConfig;