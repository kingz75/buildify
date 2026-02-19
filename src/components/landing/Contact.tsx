'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Send,
  Mail,
  MapPin,
  CheckCircle,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import { FaWhatsapp } from 'react-icons/fa'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // EmailJS configuration - Replace these with your actual credentials from EmailJS dashboard
  const EMAILJS_PUBLIC_KEY =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'L2M0lBn79hjMs2xdc'
  const EMAILJS_SERVICE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_e2zc5i9'
  const EMAILJS_TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_9haz7df'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    console.log('=== FORM SUBMISSION DEBUG ===')
    console.log('Full formState:', JSON.stringify(formState, null, 2))
    console.log('name:', formState.name)
    console.log('email:', formState.email)
    console.log('company:', formState.company)
    console.log('budget:', formState.budget)
    console.log('message:', formState.message)
    console.log('================================')

    try {
      console.log('Form data being sent to EmailJS:', formState)

      // Send form data using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          company: formState.company,
          budget: formState.budget,
          message: formState.message,
        },
        EMAILJS_PUBLIC_KEY,
      )
      console.log('EmailJS result:', result)

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: '',
          email: '',
          company: '',
          budget: '',
          message: '',
        })
      }, 3000)
    } catch (err) {
      console.error('EmailJS Error:', err)
      setError(
        'Failed to send message. Please try again or contact us directly.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Get In Touch
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let's Build
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Ready to transform your digital presence? Let's discuss your
              project and explore how we can bring your vision to life with
              precision and excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Email</div>
                  <div className="text-white font-medium">
                    buildifycode@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <FaWhatsapp className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">WhatsApp</div>
                  <div className="text-white font-medium">
                    +234 (907) 787-6166
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Location</div>
                  <div className="text-white font-medium">Abuja, NG</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0B0B0B] border border-[#D4AF37]/20">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/20 text-white placeholder-gray-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/20 text-white placeholder-gray-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/20 text-white placeholder-gray-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 transition-all duration-300"
                        placeholder="Company Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/20 text-white focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0B0B0B]">
                          Select budget
                        </option>
                        <option value="100k-250k" className="bg-[#0B0B0B]">
                          ₦100K - ₦250K
                        </option>
                        <option value="250k-500k" className="bg-[#0B0B0B]">
                          ₦250K - ₦500K
                        </option>
                        <option value="500k-1m" className="bg-[#0B0B0B]">
                          ₦500K - ₦1m
                        </option>
                        <option value="1m+" className="bg-[#0B0B0B]">
                          ₦1m+
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/20 text-white placeholder-gray-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0B0B0B] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  {error && (
                    <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
