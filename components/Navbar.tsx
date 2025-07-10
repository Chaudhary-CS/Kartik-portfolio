// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import Image from 'next/image'

export default function Navbar() {
  const path = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [path])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about/', label: 'About' },
    { href: '/work-experience/', label: 'Work Experience' },
    { href: '/projects/', label: 'Projects' },
    { href: '/skills/', label: 'Skills' },
    { href: '/contact/', label: 'Contact' },
  ]

  const documentLinks = [
    { href: '/documents/kartik_chaudhary_cv.pdf', label: 'Resume' },
  ]

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-colors duration-300 ease-in-out
          ${scrolled 
            ? 'bg-black/50 backdrop-blur-md'
            : ''}
        `}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/kartik.jpg"
                alt="Kartik Chaudhary Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Kartik Chaudhary
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {links.map(({ href, label }) => {
                // Improved active detection for nested routes
                const isActive = href === '/' 
                  ? path === '/' 
                  : path.startsWith(href)
                return (
                  <li key={href} className="relative group">
                    <Link
                      href={href}
                      className={`
                        px-1 pb-1 transition-colors duration-200
                        ${isActive
                          ? 'font-bold text-white'
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
            
            {/* Resume/CV Downloads */}
            <div className="flex space-x-4 ml-4 pl-4 border-l border-gray-600">
              {documentLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  download
                  className={`
                    relative group flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium
                    transition-colors duration-200
                    ${scrolled
                      ? 'text-gray-200 hover:text-white hover:bg-white/10'
                      : 'text-white hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  <FaDownload className="text-xs" />
                  {label}
                  {/* teal underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-[2px] h-[2px] bg-teal-400
                      transition-all duration-200 w-0 group-hover:w-full
                    `}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-white transition-all duration-300"
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white transition-all duration-300"
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white transition-all duration-300"
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="relative z-50 flex flex-col items-center justify-center h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <ul className="flex flex-col space-y-8 text-center">
                {links.map(({ href, label }, index) => {
                  // Improved active detection for nested routes
                  const isActive = href === '/' 
                    ? path === '/' 
                    : path.startsWith(href)
                  return (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                      className="relative group"
                    >
                      <Link
                        href={href}
                        className={`
                          text-2xl transition-colors duration-200
                          ${isActive
                            ? 'text-white font-bold'
                            : 'text-white font-medium hover:text-teal-400'
                          }
                        `}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {label}
                        {/* underline */}
                        <span
                          className={`
                            absolute left-1/2 -translate-x-1/2 -bottom-[4px] h-[2px]
                            bg-teal-400 transition-all duration-200
                            ${isActive
                              ? 'w-full'
                              : 'w-0 group-hover:w-full'
                            }
                          `}
                        />
                      </Link>
                    </motion.li>
                  )
                })}
                
                {/* Mobile Resume/CV Downloads */}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 + links.length * 0.1 }}
                  className="pt-4 border-t border-gray-600"
                >
                  <div className="flex flex-col space-y-4">
                    {documentLinks.map(({ href, label }, index) => (
                      <motion.div
                        key={href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.1 + (links.length + 1) * 0.1 + index * 0.1 }}
                        className="relative group"
                      >
                        <a
                          href={href}
                          download
                          className="flex items-center justify-center gap-2 text-lg font-medium text-white hover:text-teal-400 transition-colors duration-200 pb-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <FaDownload className="text-sm" />
                          {label}
                        </a>
                        {/* teal underline */}
                        <span
                          className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-teal-400 transition-all duration-200 w-0 group-hover:w-full"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
