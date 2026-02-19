import { motion, useInView, useSpring, useTransform } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Code2, Sparkles, Zap } from 'lucide-react'

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Diagonal Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonalLines"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
            >
              <path
                d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20"
                stroke="#D4AF37"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-20 hidden lg:block"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 flex items-center justify-center backdrop-blur-sm">
          <Code2 className="w-8 h-8 text-[#D4AF37]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-40 left-20 hidden lg:block"
      >
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/15 to-transparent border border-[#D4AF37]/20 flex items-center justify-center backdrop-blur-sm">
          <Sparkles className="w-6 h-6 text-[#D4AF37]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 right-32 hidden xl:block"
      >
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/15 flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-5 h-5 text-[#D4AF37]" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-10  ">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" items-center lg:block hidden gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 lg:mt-8 mt-16 "
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-sm font-medium tracking-wide">
            Premium Software Development
          </span>
        </motion.div> */}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white lg:leading-tight mb-6 "
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          We Build
          <br />
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5E6A3] to-[#D4AF37] bg-clip-text text-transparent">
            Digital Excellence
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transform your vision into reality with our elite team of developers.
          We craft bespoke web applications, mobile solutions, and AI-powered
          innovations that set industry standards.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0B0B0B] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center gap-2"
          >
            Build With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToPortfolio}
            className="px-8 py-4 border border-[#D4AF37]/50 text-[#D4AF37] font-semibold rounded-xl hover:bg-[#D4AF37]/10 transition-all duration-300"
          >
            View Our Work
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: 30, suffix: '+', label: 'Projects Delivered' },
            { value: 20, suffix: '+', label: 'Global Clients' },
            { value: 5, suffix: '+', label: 'Years Experience' },
            { value: 99, suffix: '%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <Counter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
    </section>
  )
}

// Counter Component with animated counting
function Counter({
  value,
  suffix,
  label,
  index,
}: {
  value: number
  suffix: string
  label: string
  index: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const spring = useSpring(0, { duration: 4000, bounce: 0 })
  const display = useTransform(spring, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, value, spring])

  useEffect(() => {
    const unsubscribe = display.on('change', (latest) => {
      setCount(latest)
    })
    return () => unsubscribe()
  }, [display])

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] bg-clip-text text-transparent mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {count}
        {suffix}
      </div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  )
}
