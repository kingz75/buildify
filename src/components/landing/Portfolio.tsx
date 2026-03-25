import { motion } from 'motion/react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'FinanceFlow Pro',
    category: 'Fintech Platform',
    description:
      'A comprehensive financial management platform serving 50,000+ users with real-time analytics and AI powered insights.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'AI/ML', 'AWS'],
    stats: { users: '50K+', growth: '340%' },
  },
  {
    title: 'HealthSync Mobile',
    category: 'Healthcare App',
    description:
      'Award-winning mobile health application connecting patients with healthcare providers through seamless telemedicine.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['React Native', 'Python', 'HIPAA', 'GCP'],
    stats: { users: '120K+', rating: '4.9★' },
  },
  {
    title: 'RetailGenius AI',
    category: 'E-commerce Solution',
    description:
      'AI-driven e-commerce platform with personalized recommendations that increased client revenue by 280%.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TensorFlow', 'Stripe', 'Vercel'],
    stats: { revenue: '+280%', conversion: '+45%' },
  },
  {
    title: 'LogiTrack Enterprise',
    category: 'Logistics Platform',
    description:
      'Enterprise logistics management system processing 1M+ shipments monthly with real-time tracking and optimization.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Go', 'Kubernetes', 'Azure'],
    stats: { shipments: '1M+/mo', efficiency: '+60%' },
  },
]

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-[#D4AF37]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Work
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Case Studies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of transformative digital solutions that have
            driven measurable results for industry leaders.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent" />

                  {/* Overlay Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-[#D4AF37]" />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs font-medium text-[#D4AF37] bg-[#0B0B0B]/80 backdrop-blur-sm rounded-full border border-[#D4AF37]/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-[#1A1A1A] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 pt-4 border-t border-[#D4AF37]/10">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-[#D4AF37] font-bold text-lg">
                          {value}
                        </div>
                        <div className="text-gray-500 text-xs capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0B0B0B] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
