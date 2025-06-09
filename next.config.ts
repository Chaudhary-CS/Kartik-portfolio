// next.config.ts
import { NextConfig } from 'next'
import withMDX from '@next/mdx'

const withMdx = withMDX({
  extension: /\.mdx?$/
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts','tsx','js','jsx','md','mdx'],
  output: 'export',          // ← add this
  images: {
    unoptimized: true,    // ← add this
  },
}

export default withMdx(nextConfig)
