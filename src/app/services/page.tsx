'use client'

import { motion } from 'motion/react'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Code2,
  Database,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    tagline: 'Crafting Digital Experiences That Convert',
    description:
      'We build high-performance web applications that scale with your business. From enterprise platforms to consumer-facing products, our solutions combine cutting-edge technology with intuitive design.',
    features: [
      'Custom Web Applications',
      'Progressive Web Apps (PWA)',
      'E-commerce Platforms',
      'Content Management Systems',
      'API Development & Integration',
      'Microservices Architecture',
    ],
    technologies: [
      'React & Next.js',
      'Vue.js & Nuxt',
      'Node.js & Express',
      'Python & Django',
      'GraphQL & REST APIs',
      'PostgreSQL & MongoDB',
    ],
    benefits: [
      'Lightning-fast performance with optimized code',
      'SEO-friendly architecture for maximum visibility',
      'Responsive design across all devices',
      'Scalable infrastructure that grows with you',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    tagline: 'Native & Cross-Platform Excellence',
    description:
      'Transform your ideas into powerful mobile experiences. We develop native iOS and Android apps, as well as cross-platform solutions that deliver exceptional performance and user engagement.',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'React Native Apps',
      'Flutter Applications',
      'Mobile UI/UX Design',
      'App Store Optimization',
    ],
    technologies: [
      'Swift & SwiftUI',
      'Kotlin & Jetpack Compose',
      'React Native',
      'Flutter & Dart',
      'Firebase & AWS Amplify',
      'Push Notifications',
    ],
    benefits: [
      'Seamless user experience on all devices',
      'Offline functionality and data sync',
      'Secure authentication and data encryption',
      'App Store and Play Store deployment',
    ],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    tagline: 'Intelligent Solutions for Modern Challenges',
    description:
      'Harness the power of artificial intelligence to automate processes, gain insights, and create competitive advantages. Our AI solutions are tailored to your specific business needs.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision Systems',
      'Predictive Analytics',
      'Recommendation Engines',
      'Chatbots & Virtual Assistants',
    ],
    technologies: [
      'TensorFlow & PyTorch',
      'OpenAI & GPT Models',
      'Scikit-learn',
      'Hugging Face Transformers',
      'AWS SageMaker',
      'Azure AI Services',
    ],
    benefits: [
      'Automate repetitive tasks and reduce costs',
      'Extract insights from unstructured data',
      'Personalize user experiences at scale',
      'Make data-driven decisions with confidence',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    tagline: 'Infrastructure That Scales Seamlessly',
    description:
      'Build robust, scalable infrastructure with our cloud and DevOps expertise. We architect solutions that ensure high availability, security, and performance while optimizing costs.',
    features: [
      'Cloud Architecture Design',
      'CI/CD Pipeline Setup',
      'Container Orchestration',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Security & Compliance',
    ],
    technologies: [
      'AWS & Azure & GCP',
      'Docker & Kubernetes',
      'Terraform & Ansible',
      'Jenkins & GitHub Actions',
      'Prometheus & Grafana',
      'ELK Stack',
    ],
    benefits: [
      ' 99.9% uptime with redundant systems',
      'Automated deployments for faster releases',
      'Cost optimization through smart resource management',
      'Enterprise-grade security and compliance',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description:
      'We start by understanding your business goals, target audience, and technical requirements. Our team conducts thorough research and creates a detailed project roadmap.',
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Our designers create intuitive interfaces and interactive prototypes. We iterate based on your feedback to ensure the design aligns perfectly with your vision.',
  },
  {
    number: '03',
    title: 'Development & Testing',
    description:
      'Our engineers build your solution using best practices and modern technologies. Rigorous testing ensures quality, performance, and security at every stage.',
  },
  {
    number: '04',
    title: 'Deployment & Support',
    description:
      'We handle the entire deployment process and provide ongoing support. Our team ensures smooth operations and continuous improvements post-launch.',
  },
]

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Comprehensive Digital
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              From concept to deployment, we deliver end-to-end solutions that
              drive growth and innovation. Our expertise spans the entire
              digital ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.title}
          className={`py-16 md:py-24 px-6 lg:px-8 relative ${
            index % 2 === 0 ? 'bg-[#0B0B0B]' : 'bg-[#0A0A0A]'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>

                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h2>
                <p className="text-[#D4AF37] text-lg md:text-xl font-medium mb-6">
                  {service.tagline}
                </p>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm md:text-base">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0B0B0B] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>

              {/* Features & Technologies */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
              >
                <div className="space-y-6">
                  {/* Features */}
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0B0B0B] border border-[#D4AF37]/10">
                    <div className="flex items-center gap-3 mb-6">
                      <Code2 className="w-6 h-6 text-[#D4AF37]" />
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Key Features
                      </h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0B0B0B] border border-[#D4AF37]/10">
                    <div className="flex items-center gap-3 mb-6">
                      <Database className="w-6 h-6 text-[#D4AF37]" />
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Technologies
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs md:text-sm font-medium text-[#D4AF37]/80 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#0B0B0B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Process
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How We Work
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and
              timely delivery at every stage of your project.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0B0B0B] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 h-full">
                  <div
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/30 bg-clip-text text-transparent mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-lg md:text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              Let's discuss how we can help you achieve your digital goals. Our
              team is ready to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/2349077876166"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0B0B0B] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 border border-[#D4AF37]/50 text-[#D4AF37] font-semibold rounded-xl hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
