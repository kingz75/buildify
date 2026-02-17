import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/_public/portfolio')({
  component: PortfolioPage,
})

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
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'E-commerce',
    description: 'Scalable online marketplace with AI-powered recommendations',
    image: '🛒',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Healthcare App',
    category: 'Mobile',
    description:
      'HIPAA-compliant telemedicine platform for remote consultations',
    image: '🏥',
    tags: ['React Native', 'Firebase', 'WebRTC'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Enterprise CRM',
    category: 'Enterprise',
    description: 'Custom CRM solution for Fortune 500 company',
    image: '📊',
    tags: ['Angular', 'Java', 'Oracle'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Social Media Platform',
    category: 'Web Apps',
    description: 'Community-driven platform with real-time messaging',
    image: '💬',
    tags: ['Vue.js', 'Socket.io', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    category: 'Mobile',
    description: 'AI-powered workout and nutrition tracking app',
    image: '💪',
    tags: ['Flutter', 'TensorFlow', 'AWS'],
    link: '#',
    github: '#',
  },
  {
    id: 7,
    title: 'Fashion Marketplace',
    category: 'E-commerce',
    description: 'Luxury fashion platform with AR try-on features',
    image: '👗',
    tags: ['React', 'Three.js', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    id: 8,
    title: 'Project Management Tool',
    category: 'Enterprise',
    description: 'Collaborative workspace for distributed teams',
    image: '📋',
    tags: ['React', 'GraphQL', 'Kubernetes'],
    link: '#',
    github: '#',
  },
  {
    id: 9,
    title: 'Food Delivery App',
    category: 'Mobile',
    description: 'On-demand food delivery with real-time tracking',
    image: '🍕',
    tags: ['React Native', 'Node.js', 'Redis'],
    link: '#',
    github: '#',
  },
]

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-[#FFFFFF80] mb-8"
          >
            Explore our collection of successful projects across various
            industries and technologies.
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] border-b border-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#D4AF37] text-[#0B0B0B] shadow-lg'
                    : 'bg-[#1a1a1a] text-[#FFFFFF80] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] border border-[#D4AF37]/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] rounded-lg overflow-hidden shadow-lg border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all hover:shadow-[0px_20px_40px_rgba(212,175,55,0.15)]"
              >
                <div className="h-48 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] flex items-center justify-center text-8xl border-b border-[#D4AF37]/30">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#D4AF37] font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#FFFFFF80] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#1a1a1a] text-[#D4AF37] text-sm rounded-full border border-[#D4AF37]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-[#D4AF37] hover:text-[#D4AF37]/80 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-[#FFFFFF80] hover:text-white font-medium"
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#FFFFFF80] mb-8"
          >
            Let's discuss how we can bring your vision to life with cutting-edge
            technology and expert craftsmanship.
          </motion.p>
          <motion.a
            href="https://wa.me/2349077876166"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block px-8 py-4 bg-[#D4AF37] text-[#0B0B0B] font-semibold rounded-lg hover:bg-[#D4AF37]/90 transition-colors"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
