// components/Hero.tsx
'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* 2) Dark overlay */}
      <div className="fixed inset-0 bg-black/50" />

      {/* 3) Your hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Sami Melhem</h1>
        <p className="text-xl mb-6">
          Computer Science junior at Texas A&M • Clarinetist • Data Science & AI Enthusiast
        </p>
        <div className="flex gap-4">
          <Link href="/projects" className="btn-primary">See Projects</Link>
          <Link href="/blog" className="btn-outline">Read My Blog</Link>
        </div>
      </div>
    </section>
  )
}
