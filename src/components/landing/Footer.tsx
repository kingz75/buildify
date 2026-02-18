'use client'

import { motion } from 'motion/react'
import { Github, Linkedin, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaXTwitter, FaFacebook } from 'react-icons/fa6'

const footerLinks = {
  services: [
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Apps', href: '/services' },
    { name: 'AI Solutions', href: '/services' },
    { name: 'Cloud & DevOps', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  {
    icon: FaFacebook,
    href: 'https://www.facebook.com/profile.php?id=61578775401344',
    label: 'Facebook',
  },
  { icon: FaXTwitter, href: 'https://x.com/buildifycode', label: 'Twitter' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/buildify-code-98023038a/',
    label: 'LinkedIn',
  },
  { icon: Github, href: 'https://github.com/kingz75/', label: 'GitHub' },
]

export function Footer() {
  const pathname = usePathname()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigation = (href: string) => {
    if (href === '#') return

    if (href.startsWith('/#')) {
      const hash = href.substring(2)
      if (pathname === '/') {
        const element = document.querySelector(`#${hash}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.href = href
      }
    }
  }

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/10 relative">
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A227] flex items-center justify-center hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5 text-[#0B0B0B]" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/mainlogo.svg" alt="" className="h-16" />
            </Link>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-sm">
              Premium software development agency crafting digital excellence.
              We transform visions into world-class products.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[#141414] border border-[#D4AF37]/20 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4
              className="text-white font-semibold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              className="text-white font-semibold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4
              className="text-white font-semibold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D4AF37]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} BuildifyCode. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Crafted <span className="text-[#D4AF37]">♦</span> in Abuja
          </p>
        </div>
      </div>
    </footer>
  )
}
