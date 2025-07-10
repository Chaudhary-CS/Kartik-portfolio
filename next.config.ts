// next.config.ts
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts','tsx','js','jsx'],
  // output: 'export', // Removed to enable API routes
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
