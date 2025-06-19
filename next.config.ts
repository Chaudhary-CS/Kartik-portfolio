// next.config.ts
import { NextConfig } from 'next'
import withMDX from '@next/mdx'

const withMdx = withMDX({
  extension: /\.mdx?$/
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts','tsx','js','jsx','md','mdx'],
  // output: 'export', // Temporarily disabled to test navigation
  // trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default withMdx(nextConfig)
