'use client'

import { motion } from 'motion/react'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { Check } from 'lucide-react'

interface Package {
  title: string
  oldPrice: string
  newPrice: string
  subtitle: string
  features: string[]
  popular?: boolean
}

const packages: Package[] = [
  {
    title: 'Starter Package',
    oldPrice: '₦350,000 - ₦450,000',
    newPrice: '₦250,000 - ₦350,000',
    subtitle: 'Perfect for small businesses or personal brands.',
    features: [
      '1 - 5 pages custom website',
      'UI/UX design customization',
      'Mobile-responsive design',
      'Basic SEO setup',
      'Contact form integration',
      'Social media and WhatsApp integration',
      '1 revision',
      'Delivery: 5–7 working days',
    ],
  },
  {
    title: 'Business Package',
    oldPrice: '₦500,000 - ₦600,000',
    newPrice: '₦400,000 – ₦500,000',
    subtitle: 'For growing businesses and service-based companies.',
    features: [
      '5 to 10 pages',
      'UI/UX design customization',
      'Blog or portfolio section',
      'SEO optimization',
      'Contact form with email notification',
      'Social media integration',
      'WhatsApp integration',
      'Analytics setup',
      '2 revisions',
      'Delivery: 10–14 working days',
    ],
    popular: true,
  },
  {
    title: 'Enterprise Package',
    oldPrice: '₦800,000 - ₦1,200,000',
    newPrice: '₦700,000 - ₦1,000,000',
    subtitle: 'For large businesses and complex requirements.',
    features: [
      'Unlimited pages',
      'Custom UI/UX design',
      'Advanced SEO optimization',
      'E-commerce functionality',
      'Payment gateway integration',
      'Admin dashboard',
      'User authentication',
      'API integrations',
      '3 months support',
      'Unlimited revisions',
      'Delivery: 21–30 working days',
    ],
  },
]

export default function PricePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-6">
              Pricing Plans
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Choose Your
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Transparent pricing with no hidden fees. Choose the package that
              best fits your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border-2 border-[#D4AF37]'
                    : 'bg-gradient-to-br from-[#141414] to-[#0B0B0B] border border-[#D4AF37]/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-[#0B0B0B] text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{pkg.subtitle}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="text-gray-500 line-through text-sm">
                    {pkg.oldPrice}
                  </div>
                  <div className="text-3xl font-bold text-[#D4AF37]">
                    {pkg.newPrice}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className={`block w-full py-3 text-center font-semibold rounded-lg transition-all ${
                    pkg.popular
                      ? 'bg-[#D4AF37] text-[#0B0B0B] hover:shadow-lg hover:shadow-[#D4AF37]/25'
                      : 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
