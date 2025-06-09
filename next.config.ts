// next.config.ts
import withMDX from '@next/mdx'
import { NextConfig } from 'next'

const mdx = withMDX({
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // **only** allow mdx _imports_, not mdx pages:
  pageExtensions: ['ts','tsx','js','jsx','md'],
}

export default mdx(nextConfig)
