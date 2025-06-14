// components/Hero.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 1) Dark Overlay */}
      <div className="fixed inset-0 bg-black/50" />

      {/* 2) Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 space-y-8">
        {/* Circular Portrait */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-xl">
            <Image
            src="/images/sami.jpg"
            alt="Sami Melhem"
            width={256}
            height={256}
            className="object-cover"
            unoptimized                 // required for static export
            />
        </div>

        {/* Text */}
        <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
                {`Hi, I'm Sami Melhem`}
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
                {`Computer Science junior at Texas A&M • Clarinetist • Data Science & AI Enthusiast`}
            </p>
        </div>
        {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
            {[
                { href: '/projects', label: 'See Projects' },
                { href: '/blog',    label: 'Read My Blog' },
            ].map(({ href, label }) => (
            <Link
                key={href}
                href={href}
                className="relative inline-block px-1 pb-1 text-white text-lg font-medium group"
            >
                {label}
                <span
                    className="
                        absolute left-0 -bottom-[2px] h-[2px] bg-teal-400
                        w-0 group-hover:w-full transition-all duration-200
                    "
                />
            </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
