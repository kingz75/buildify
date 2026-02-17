import { createFileRoute } from '@tanstack/react-router'
import { motion, Variants } from 'framer-motion'

import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import watsap from '/watsapw.svg'
import promo from '/promoicon.svg'
import mark from '/mark.svg'
import priceicon from '/priceicon.svg'

interface Package {
  title: string
  oldPrice: string
  newPrice: string
  subtitle: string
  features: string[]
}

interface PriceCardProps {
  pkg: Package
  index: number
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
      'Contact form integration',
      'Social media and WhatsApp integration',
      '3 revision',
      'Delivery: 7-10 working days',
    ],
  },
  {
    title: 'E-Commerce Package',
    oldPrice: '₦800,000 - ₦900,000',
    newPrice: '₦700,000 - ₦800,000',
    subtitle: 'For businesses selling online.',
    features: [
      'Product listings (up to 50)',
      'UI/UX design customization',
      'Admin dashboard',
      'Inventory management',
      'Shopping cart & payment gateway',
      'Order tracking system',
      'Training session for usage',
      'Delivery: 10-15 working days',
    ],
  },
  {
    title: 'Web App / Enterprise Solutions',
    oldPrice: '₦900,000+',
    newPrice: '₦800,000+',
    subtitle: 'Built from scratch based on client requirements.',
    features: [
      'UI/UX design customization',
      'Full-stack development (Frontend + Backend)',
      'Admin control panel',
      'API integration',
      'Security & performance optimization',
      'Ongoing maintenance (optional)',
      '5+ revision (Custom)',
      'Timelines & pricing based on scope',
    ],
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' as const },
  }),
}

function PriceCard({ pkg, index }: PriceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index * 0.2}
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 20px 40px rgba(212, 175, 55, 0.25)',
        y: -10,
      }}
      className="bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] rounded-3xl bg-center bg-cover bg-no-repeat w-full lg:pl-[48px] pl-5 pr-2 py-5 lg:py-[81px] relative mt-5 lg:mt-0 border border-[#D4AF37]/30 transition duration-300"
    >
      <div className="flex justify-between ">
        <h2 className="text-white font-extrabold text-[24px] lg:text-[32px] w-[60%]">
          {pkg.title}
        </h2>
        <div className=" place-items-start w-[40%]">
          <img src={promo} alt="Promo" className="lg:py-[20px] lg:px-[40px]" />
        </div>
      </div>

      <p className="text-[#FFFFFF80] text-[16px] lg:text-[18px] mt-2 lg:mt-3">
        {pkg.subtitle}
      </p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={index * 0.25 + 0.1}
        className="mt-[40px] lg:mt-[90px]"
      >
        <p className="text-white font-extrabold text-[18px] lg:text-[20px] line-through opacity-70">
          {pkg.oldPrice}
        </p>
        <p className="text-white font-extrabold text-[26px] lg:text-[40px] mt-3 lg:mt-4">
          {pkg.newPrice}
        </p>
      </motion.div>

      <div className="text-[#FFFFFFCC] text-[16px] lg:text-[18px] mt-[20px] lg:mt-[60px] leading-[40px] lg:leading-[62px] space-y-2">
        {pkg.features.map((feature: string, i: number) => (
          <p key={i} className="flex items-start lg:items-center gap-2">
            <img src={mark} alt="Checkmark" className="mt-[10px] lg:mt-0" />
            {feature}
          </p>
        ))}
      </div>

      <motion.div whileHover={{ scale: 1.1 }} className="mt-9">
        <a
          href="https://wa.me/2349077876166"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 bg-[#FFFFFF24] text-white hover:bg-[#ffffff48] px-8 py-4 rounded-full text-[16px] font-bold shadow-lg transition duration-300">
            <img src={watsap} alt="WhatsApp Icon" />
            Contact Us
          </button>
        </a>
      </motion.div>
    </motion.div>
  )
}

function Price() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />

      <section className="bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] lg:py-[104px] pb-[80px] pt-[100px] px-[16px] lg:px-[80px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <img src={priceicon} alt="Price Icon" className="mx-auto" />
          <div className="font-bold lg:text-[48px] text-[32px] text-[#D4AF37] lg:mt-[40px] mt-[20px]">
            “Get Up to ₦100,000 OFF – Limited Time”
          </div>
          <div className="lg:text-[32px] text-[22px] font-semibold text-[#ffffff] lg:mt-[30px] mt-[15px] lg:mb-[60px] mb-[30px]">
            Choose Package That Suit Your Business
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {packages.slice(0, 2).map((pkg, index) => (
            <PriceCard key={index} pkg={pkg} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:mt-9">
          {packages.slice(2).map((pkg, index) => (
            <PriceCard key={index + 2} pkg={pkg} index={index + 2} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const Route = createFileRoute('/_public/price')({
  component: Price,
})

export default Price
