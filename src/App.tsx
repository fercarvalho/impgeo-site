import { useEffect } from 'react'
import { useTheme } from '@/hooks/useTheme'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Testimonials from '@/components/sections/Testimonials'
import Partners from '@/components/sections/Partners'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export default function App() {
  const { theme } = useTheme()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Partners />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
