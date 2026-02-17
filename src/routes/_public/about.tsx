import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { Shield, Rocket, Users, Award, Target, Heart } from 'lucide-react'

export const Route = createFileRoute('/_public/about')({
  component: AboutPage,
})

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
  { value: '30+', label: 'Projects Completed' },
  { value: '4+', label: 'Team Members' },
  { value: '5+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years of tech industry experience',
    image: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Full-stack architect specializing in scalable systems',
    image: '👨‍💻',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Design Director',
    bio: 'Award-winning UX/UI designer with global clientele',
    image: '👩‍🎨',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    bio: 'Expert in modern web technologies and optimization',
    image: '👨‍💼',
  },
]

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            About Our Agency
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-[#FFFFFF80] mb-8"
          >
            We're a team of passionate professionals dedicated to transforming
            ideas into digital excellence.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] rounded-lg border border-[#D4AF37]/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-[#FFFFFF80]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-[#FFFFFF80] leading-relaxed text-lg">
              <p>
                Founded in 2021, our agency emerged from a simple belief:
                technology should solve real problems and create meaningful
                impact. What started as a small team of developers has grown
                into a multidisciplinary powerhouse of designers, developers,
                strategists, and innovators.
              </p>
              <p>
                Over the years, we've had the privilege of working with startups
                and Fortune 20 companies alike. Each project has taught us
                something new, shaped our approach, and strengthened our
                commitment to excellence. We've learned that the best solutions
                come from deep understanding, bold creativity, and technical
                mastery combined.
              </p>
              <p>
                Today, we're proud to be recognized as industry leaders, but we
                never forget our roots. We remain hungry, humble, and deeply
                committed to helping our clients succeed in an increasingly
                digital world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-12 text-center"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] rounded-lg border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all"
                >
                  <Icon className="w-12 h-12 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#FFFFFF80]">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-12 text-center"
          >
            Meet Our Leadership
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] rounded-lg border border-[#D4AF37]/30"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] rounded-full flex items-center justify-center text-6xl border border-[#D4AF37]/30">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#D4AF37] font-medium mb-2">{member.role}</p>
                <p className="text-[#FFFFFF80] text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
