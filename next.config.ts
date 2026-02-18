import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.appwrite.io',
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-select',
      '@radix-ui/react-tooltip',
      'lucide-react',
    ],
  },
  // Use webpack for now (Turbopack doesn't support all features yet)
  turbopack: {},
}

export default nextConfig
