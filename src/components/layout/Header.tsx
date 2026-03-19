import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

const navLinks = [
  { label: 'Início',    href: '#inicio' },
  { label: 'Serviços',  href: '#servicos' },
  { label: 'Sobre',     href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'FAQ',       href: '#faq' },
]

export default function Header() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeSection, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Highlight active nav link — detects which section occupies the middle of the viewport
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'py-3 glass shadow-lg shadow-dark-900/10'
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#inicio"
          onClick={e => { e.preventDefault(); handleNav('#inicio') }}
          className="flex items-center gap-2.5 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-9 h-9 shrink-0 flex items-center justify-center">
            <img src="/logo_impgeo.png" alt="IMPGEO" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold font-display text-dark-900 dark:text-white tracking-tight">IMPGEO</span>
            <span className="text-[10px] font-medium text-dark-500 dark:text-dark-400 tracking-widest uppercase">Geotecnologias</span>
          </div>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40'
                  : 'text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white hover:bg-dark-100 dark:hover:bg-dark-800/50'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        {/* Right side */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="w-9 h-9 rounded-xl flex items-center justify-center
                       text-dark-500 dark:text-dark-400
                       hover:text-dark-900 dark:hover:text-white
                       hover:bg-dark-100 dark:hover:bg-dark-800/50
                       transition-all duration-200"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={18} />
                </motion.span>
              ) : (
                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* CTA button */}
          <a
            href="https://wa.me/5543991862770?text=Ol%C3%A1%2C%20pessoal%20da%20IMPGEO%2C%20vim%20atrav%C3%A9s%20do%20site%20de%20voc%C3%AAs%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20prestados%20por%20voc%C3%AAs."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary text-sm py-2.5"
          >
            Fale Conosco
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center
                       text-dark-600 dark:text-dark-300
                       hover:bg-dark-100 dark:hover:bg-dark-800/50
                       transition-all duration-200"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-dark-200/40 dark:border-dark-700/40 overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40'
                      : 'text-dark-700 dark:text-dark-200 hover:bg-dark-100 dark:hover:bg-dark-800/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/5543991862770?text=Ol%C3%A1%2C%20pessoal%20da%20IMPGEO%2C%20vim%20atrav%C3%A9s%20do%20site%20de%20voc%C3%AAs%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20prestados%20por%20voc%C3%AAs."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center mt-2 text-sm"
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
