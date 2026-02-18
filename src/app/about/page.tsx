'use client'

import { motion } from 'motion/react'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { Shield, Rocket, Users, Award, Target, Heart } from 'lucide-react'

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description:
      'We stay ahead of the curve by constantly exploring emerging technologies and methodologies. Our team thrives on solving complex problems with creative, forward-thinking solutions.',
  },
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    description:
      'Excellence is not negotiable. Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail and tested rigorously.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description:
      "We work as an extension of your team, not just a vendor. Your success is our success, and we're committed to building long-term relationships based on trust and results.",
  },
  {
    icon: Award,
    title: 'Proven Results',
    description:
      "Our track record speaks for itself. With 150+ successful projects across diverse industries, we've consistently delivered solutions that exceed expectations and drive growth.",
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description:
      'We align every decision with your business objectives. Our strategic approach ensures that technology serves your bottom line.',
  },
  {
    icon: Heart,
    title: 'Client Success',
    description:
      'Your growth is our mission. We measure success by the tangible impact we deliver to your business and your users.',
  },
]

const stats = [
  { value: '30+', label: 'Projects Delivered' },
  { value: '20+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
]

export default function AboutPage() {
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
              About Us
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Building Digital
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              We are a premium software development agency specializing in web
              apps, mobile solutions, and AI-powered innovation with luxury
              design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Values
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0B0B0B] border border-[#D4AF37]/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
