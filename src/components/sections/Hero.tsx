import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Satellite, MapPin, Activity } from 'lucide-react'
import { useRef } from 'react'

const floatingCards = [
  {
    icon: <Satellite size={16} className="text-primary-400" />,
    label: 'Mapeamento via Drone',
    value: '200+ projetos',
    color: 'from-primary-500/20 to-primary-600/5',
    delay: 0,
  },
  {
    icon: <MapPin size={16} className="text-teal-400" />,
    label: 'Estados atendidos',
    value: '8 estados',
    color: 'from-teal-500/20 to-teal-600/5',
    delay: 0.15,
  },
  {
    icon: <Activity size={16} className="text-primary-300" />,
    label: 'Precisão garantida',
    value: '99.8% acurácia',
    color: 'from-primary-400/20 to-teal-500/5',
    delay: 0.3,
  },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* ── Background layers ── */}
      {/* Grid */}
      <div className="absolute inset-0 bg-hero-grid bg-grid-md opacity-100 dark:opacity-100 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Radial glows */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary-600/10 dark:bg-primary-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-teal-500/8 dark:bg-teal-500/12 rounded-full blur-3xl" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
                             bg-primary-500/10 text-primary-600 dark:text-primary-400
                             border border-primary-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              Geotecnologias Aplicadas desde 2020
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="section-title max-w-4xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Transformamos{' '}
            <span className="gradient-text">dados geográficos</span>
            {' '}em decisões estratégicas
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="section-subtitle max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Soluções inteligentes em geoprocessamento, topografia, drones e licenciamento ambiental
            para levar o seu projeto ao próximo nível.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://wa.me/5543991862770?text=Ol%C3%A1%2C%20pessoal%20da%20IMPGEO%2C%20vim%20atrav%C3%A9s%20do%20site%20de%20voc%C3%AAs%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20prestados%20por%20voc%C3%AAs."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-3.5"
            >
              Iniciar Projeto <ArrowRight size={18} />
            </a>
            <button
              onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-base px-8 py-3.5"
            >
              Ver Serviços
            </button>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + card.delay }}
                whileHover={{ y: -4, scale: 1.03 }}
                className={`glass rounded-2xl px-5 py-4 flex items-center gap-3.5 min-w-[180px] bg-gradient-to-br ${card.color}`}
              >
                <div className="w-9 h-9 rounded-xl bg-dark-800/60 dark:bg-dark-700/60 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs text-dark-500 dark:text-dark-400">{card.label}</p>
                  <p className="text-sm font-bold text-dark-900 dark:text-white">{card.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
