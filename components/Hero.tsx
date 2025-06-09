// components/Hero.tsx
'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center text-center space-y-4">
      <h1 className="text-5xl font-bold">Hi, I’m Sami Melhem</h1>
      <p className="text-xl text-gray-700">
        Computer Science junior at Texas A&M | Clarinetist | Data Science & AI Enthusiast
      </p>
      <div className="space-x-4">
        <Link href="/projects" className="btn-primary">See Projects</Link>
        <Link href="/blog" className="btn-outline">Read My Blog</Link>
      </div>
    </section>
  );
}
