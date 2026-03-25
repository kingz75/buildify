import { motion } from 'motion/react'
import { Globe, Smartphone, Brain, Cloud, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Custom web applications built with cutting-edge technologies. From enterprise platforms to sleek SaaS products, we deliver scalable solutions.',
    features: [
      'React & Next.js',
      'Node.js & Python',
      'Cloud Architecture',
      'API Development',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile experiences that captivate users. iOS, Android, and React Native solutions tailored to your needs.',
    features: [
      'iOS & Android',
      'React Native',
      'Flutter',
      'App Store Optimization',
    ],
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description:
      'Harness the power of artificial intelligence. Machine learning models, NLP systems, and intelligent automation for your business.',
    features: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Robust infrastructure and seamless deployments. We architect cloud solutions that scale with your growth and optimize performance.',
    features: [
      'AWS & Azure',
      'Kubernetes',
      'CI/CD Pipelines',
      'Infrastructure as Code',
    ],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent" />

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
            What We Do
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end digital solutions crafted with precision. We transform
            complex challenges into elegant, high performance products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0B0B0B] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-500 overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>

                  {/* Title */}
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 text-xs font-medium text-[#D4AF37]/80 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20"
                      >
                        {feature}
                      </span>
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
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0B0B0B] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            Explore All Services
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
