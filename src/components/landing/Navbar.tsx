'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Price', href: '/price' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false)

    // Handle hash links on home page
    if (href.startsWith('/#')) {
      const hash = href.substring(2)
      if (pathname === '/') {
        const element = document.querySelector(`#${hash}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Navigate to home page with hash - use replace to avoid history stack issues
        window.location.replace(href)
      }
    }
  }

  // Handle hash navigation on initial page load
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash.substring(1)
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#D4AF37]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="">
              <img src="/mainlogo.svg" alt="" className="lg:h-16 h-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  !link.href.startsWith('/#') && pathname === link.href
                return link.href.startsWith('/#') ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium tracking-wide"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                        : 'text-gray-300 hover:text-[#D4AF37]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <button
                onClick={() => handleNavigation('/#contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0B0B0B] font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300"
              >
                Build With Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#D4AF37] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/98 backdrop-blur-lg md:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => {
                const isActive =
                  !link.href.startsWith('/#') && pathname === link.href
                return link.href.startsWith('/#') ? (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigation(link.href)}
                    className="text-2xl text-white hover:text-[#D4AF37] transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {link.name}
                  </motion.button>
                ) : (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl transition-colors duration-300 ${
                        isActive
                          ? 'text-[#D4AF37]'
                          : 'text-white hover:text-[#D4AF37]'
                      }`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => handleNavigation('/#contact')}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0B0B0B] font-semibold rounded-lg"
              >
                Build With Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
