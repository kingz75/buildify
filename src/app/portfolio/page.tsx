'use client'

import { motion } from 'motion/react'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { ExternalLink, Github } from 'lucide-react'

const categories = ['All', 'Web Apps', 'Mobile', 'E-commerce', 'Enterprise']

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web Apps',
    description:
      'Real-time financial analytics platform with advanced data visualization',
    image: '💰',
    tags: ['React', 'TypeScript', 'D3.js'],
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'E-commerce',
    description: 'Scalable online marketplace with AI-powered recommendations',
    image: '🛒',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Healthcare App',
    category: 'Mobile',
    description:
      'HIPAA-compliant telemedicine platform for remote consultations',
    image: '🏥',
    tags: ['React Native', 'Firebase', 'WebRTC'],
  },
  {
    id: 4,
    title: 'Enterprise CRM',
    category: 'Enterprise',
    description: 'Custom CRM solution with advanced automation workflows',
    image: '🏢',
    tags: ['Vue.js', 'Python', 'AWS'],
  },
  {
    id: 5,
    title: 'Social Media App',
    category: 'Mobile',
    description: 'Feature-rich social platform with real-time messaging',
    image: '📱',
    tags: ['Flutter', 'Firebase', 'Socket.io'],
  },
  {
    id: 6,
    title: 'SaaS Platform',
    category: 'Web Apps',
    description: 'Multi-tenant SaaS solution for business management',
    image: '☁️',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
  },
]

export default function PortfolioPage() {
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
              Our Portfolio
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Featured
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Explore our latest work and see how we've helped businesses
              transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl bg-gradient-to-br from-[#141414] to-[#0B0B0B] border border-[#D4AF37]/10 overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-[#1A1A1A] flex items-center justify-center text-6xl">
                  {project.image}
                </div>

                <div className="p-6">
                  <div className="text-xs text-[#D4AF37] font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs text-gray-400 bg-[#1A1A1A] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm text-[#D4AF37] hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm text-gray-400 hover:text-white"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
