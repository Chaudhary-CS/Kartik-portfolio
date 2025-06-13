// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const path = usePathname()
  const [scrolled, setScrolled] = useState(false)

  // On mount, listen for window scroll and update `scrolled`
  useEffect(() => {
    const handleScroll = () => {
      // when Y offset > 50px, mark as scrolled
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // initialize immediately
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-colors duration-300 ease-in-out
        ${scrolled 
          ? 'bg-black/50 backdrop-blur-md'
          : ''}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="relative group">
          <span className="text-xl font-bold text-white transition-colors duration-200">
            Sami Melhem
          </span>
          {/* teal underline */}
          <span
            className={`
              absolute left-0 -bottom-[2px] h-[2px] bg-teal-400
              transition-all duration-200 w-0 group-hover:w-full
            `}
          />
        </Link>
        <ul className="flex space-x-8">
          {links.map(({ href, label }) => {
            const isActive = path === href
            return (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  className={`
                    px-1 pb-1 transition-colors duration-200
                    ${isActive
                      ? 'font-semibold text-white'
                      : scrolled
                        ? 'text-gray-200 hover:text-white'
                        : 'text-white hover:text-white'
                    }
                  `}
                >
                  {label}
                  {/* underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-[2px] h-[2px]
                      bg-teal-400 transition-all duration-200
                      ${isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                      }
                    `}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
