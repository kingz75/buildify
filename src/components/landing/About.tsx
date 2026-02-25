import { motion } from 'motion/react'
import { Shield, Rocket, Users, Award } from 'lucide-react'

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description:
      'We stay ahead of the curve, leveraging emerging technologies to give you a competitive edge.',
  },
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    description:
      'Every line of code is crafted with precision. We deliver excellence, not excuses.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description:
      'Your success is our success. We work as an extension of your team, not just a vendor.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description:
      'Our track record speaks for itself. 30+ successful projects across diverse industries.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] bg-clip-text text-transparent">
                Masterpieces
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              BuildifyCode is a premium software development agency where
              innovation meets craftsmanship. We don't just build software, we
              architect digital experiences that transform businesses and
              delight users.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Founded by industry veterans with decades of combined experience,
              we've assembled a world class team of engineers, designers, and
              strategists who share a singular vision: to set new standards in
              digital excellence.
            </p>

            {/* Signature Element */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-[#D4AF37]/20 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C9A227] flex items-center justify-center">
                <span
                  className="text-[#0B0B0B] font-bold text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  B
                </span>
              </div>
              <div>
                <div className="text-white font-semibold">
                  BuildifyCode Team
                </div>
                <div className="text-gray-500 text-sm">
                  Excellence in Every Pixel
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4AF37]/50 text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              Learn More About Us
            </a>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-xl bg-[#141414] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
