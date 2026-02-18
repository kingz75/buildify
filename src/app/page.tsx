import {
  Navbar,
  Hero,
  Services,
  About,
  Portfolio,
  Testimonials,
  Contact,
  Footer,
} from '@/components/landing'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
