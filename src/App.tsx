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

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/5543991862770?text=${encodeURIComponent('Olá, pessoal da IMPGEO, vim através do site de vocês, e gostaria de saber mais informações sobre os serviços prestados por vocês.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
      >
        <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-7 h-7" />
        {/* Notification dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500" />
        </span>
      </a>
    </div>
  )
}
