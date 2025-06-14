'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from "./Navbar"
import Footer from "./Footer"
import VantaNet from "./VantaNet"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <VantaNet />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          className="pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
} 