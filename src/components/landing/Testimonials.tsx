import { motion } from 'motion/react'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'BuildifyCode played a key role in bringing our digital vision at Green World AgroTrade to life. Their team demonstrated strong technical expertise, clear communication, and a deep understanding of our business needs. The platform they delivered is modern, reliable, and perfectly aligned with our growth objectives. We’ve seen real value from the solution, and we highly recommend BuildifyCode as a trusted technology partner.',
    author: 'Team',
    role: 'Green World AgroTrade ',
    avatar:
      'https://ui-avatars.com/api/?name=Green+World&background=D4AF37&color=fff&size=100&font-size=0.4&bold=true',
    rating: 5,
  },
  {
    quote:
      'BuildifyCode delivered an exceptional digital solution for Cozym LMT, combining strong technical expertise with a clear understanding of our business operations. The platform is efficient, scalable, and tailored to our workflow needs. Their attention to detail, responsiveness, and commitment to quality made the entire process seamless. We’re extremely satisfied with the outcome and would confidently recommend BuildifyCode for enterprise-level projects.',
    author: 'Team',
    role: 'Cozym LMT',
    avatar:
      'https://ui-avatars.com/api/?name=Cozym&background=1a1a1a&color=fff&size=100&font-size=0.4&bold=true',
    rating: 5,
  },
  {
    quote:
      'BuildifyCode provided a robust and well-structured digital solution for Tiamin. Their team took the time to understand our operational needs and delivered a platform that improved efficiency, usability, and overall digital presence. The project was executed with precision, professionalism, and clear communication throughout. We highly value the partnership and would recommend BuildifyCode to any organization seeking reliable technology solutions.',
    author: 'Team',
    role: 'Tiamin',
    avatar:
      'https://ui-avatars.com/api/?name=Tiamin&background=2d2d2d&color=fff&size=100&font-size=0.4&bold=true',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Decorative Quote */}
      <div className="absolute top-20 right-20 opacity-5">
        <Quote className="w-64 h-64 text-[#D4AF37]" />
      </div>

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
            Testimonials
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Client Success Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the leaders who've
            partnered with us to achieve extraordinary results.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0B0B0B] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500 relative overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                    <Quote className="w-5 h-5 text-[#D4AF37]" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/30"
                    />
                    <div>
                      <div
                        className="text-white font-semibold"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {testimonial.author}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
