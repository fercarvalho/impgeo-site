import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  Crosshair, Mountain, Plane, Camera, TreePine, FileCheck,
  Home, Briefcase, MoreHorizontal, ArrowRight, X
} from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import SectionBadge from '@/components/ui/SectionBadge'

const services = [
  {
    icon: <Crosshair size={22} />,
    title: 'Georreferenciamento',
    description: 'Demarcação precisa de imóveis urbanos e rurais com tecnologia GNSS e conformidade ao INCRA.',
    tags: ['Urbano', 'Rural', 'INCRA'],
    color: 'from-primary-500/20 to-primary-600/5',
    iconBg: 'bg-primary-500/15 text-primary-500',
    featured: true,
  },
  {
    icon: <Mountain size={22} />,
    title: 'Levantamento Topográfico',
    description: 'Levantamentos planialtimétricos de alta precisão para projetos de engenharia e arquitetura.',
    tags: ['Planimetria', 'Altimetria'],
    color: 'from-teal-500/20 to-teal-600/5',
    iconBg: 'bg-teal-500/15 text-teal-500',
    featured: false,
  },
  {
    icon: <Plane size={22} />,
    title: 'Aerolevantamento',
    description: 'Mapeamento aéreo com aeronaves e drones para grandes extensões de terra com alta resolução.',
    tags: ['Fotogrametria', 'LiDAR'],
    color: 'from-primary-400/15 to-teal-500/5',
    iconBg: 'bg-primary-400/15 text-primary-400',
    featured: false,
  },
  {
    icon: <Camera size={22} />,
    title: 'Mapeamento com Drone',
    description: 'Ortofotos, modelos 3D e nuvem de pontos para análise detalhada do terreno e estruturas.',
    tags: ['Ortofoto', 'MDT', '3D'],
    color: 'from-teal-400/15 to-primary-500/5',
    iconBg: 'bg-teal-400/15 text-teal-400',
    featured: true,
  },
  {
    icon: <TreePine size={22} />,
    title: 'Monitoramento Ambiental',
    description: 'Monitoramento contínuo de áreas de preservação, APP, reservas legais e remanescentes florestais.',
    tags: ['APP', 'Reserva Legal'],
    color: 'from-primary-600/15 to-teal-400/5',
    iconBg: 'bg-primary-600/15 text-primary-600',
    featured: false,
  },
  {
    icon: <FileCheck size={22} />,
    title: 'Licenciamento Ambiental',
    description: 'Elaboração de estudos ambientais e condução de processos junto aos órgãos licenciadores.',
    tags: ['EIA', 'RIMA', 'RAP'],
    color: 'from-teal-600/15 to-primary-400/5',
    iconBg: 'bg-teal-600/15 text-teal-400',
    featured: false,
  },
  {
    icon: <Home size={22} />,
    title: 'Regularização Fundiária',
    description: 'Regularização de imóveis rurais e urbanos, REURB e processos junto a cartórios e prefeituras.',
    tags: ['REURB', 'Cartório'],
    color: 'from-primary-500/15 to-teal-600/5',
    iconBg: 'bg-primary-500/15 text-primary-500',
    featured: false,
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Consultoria Especializada',
    description: 'Apoio técnico e estratégico para projetos que envolvam geotecnologia, planejamento e gestão territorial.',
    tags: ['Gestão', 'Planejamento'],
    color: 'from-teal-500/15 to-primary-600/5',
    iconBg: 'bg-teal-500/15 text-teal-500',
    featured: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function OutrosModal({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      >
        <motion.div
          className="relative w-full max-w-md bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center bg-dark-100 dark:bg-dark-700 text-dark-500 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-600 transition-colors"
          >
            <X size={15} />
          </button>

          <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-primary-500/15 text-primary-500">
            <MoreHorizontal size={22} />
          </div>
          <h3 className="text-xl font-bold font-display text-dark-900 dark:text-white mb-2">
            Outros Serviços
          </h3>
          <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
            Em breve disponibilizaremos mais serviços aqui. Entre em contato para saber mais sobre nossas soluções personalizadas.
          </p>

          <div className="mt-6 pt-6 border-t border-dark-100 dark:border-dark-700">
            <a
              href="https://wa.me/5543991862770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:gap-2.5 transition-all duration-200"
            >
              Falar com a equipe <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Services() {
  const { ref, inView } = useInView()
  const [outrosOpen, setOutrosOpen] = useState(false)

  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-50 dark:bg-dark-900/50 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <SectionBadge>O que fazemos</SectionBadge>
          </motion.div>
          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluções completas em{' '}
            <span className="gradient-text">geotecnologia</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Da coleta de dados à entrega dos resultados, cuidamos de todo o processo com rigor técnico e agilidade.
          </motion.p>
        </div>

        {/* Bento grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative rounded-2xl p-6 cursor-pointer overflow-hidden
                          bg-white dark:bg-dark-800/50
                          border border-dark-100 dark:border-dark-700/50
                          hover:border-primary-300 dark:hover:border-primary-700
                          hover:shadow-xl hover:shadow-primary-500/5
                          transition-all duration-300
                          ${service.featured ? 'lg:col-span-2' : ''}
                          ${i === 3 ? 'lg:row-span-1' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${service.iconBg}`}>
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold text-dark-900 dark:text-white mb-2 font-display">
                  {service.title}
                </h3>
                <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-100 dark:bg-dark-700/60 text-dark-600 dark:text-dark-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://wa.me/5543991862770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:gap-2.5 transition-all duration-200"
                >
                  Solicitar orçamento <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Outros card */}
          <motion.div
            variants={cardVariants}
            onClick={() => setOutrosOpen(true)}
            className="group relative rounded-2xl p-6 cursor-pointer overflow-hidden
                        bg-white dark:bg-dark-800/50
                        border border-dashed border-dark-200 dark:border-dark-600
                        hover:border-primary-300 dark:hover:border-primary-700
                        hover:shadow-xl hover:shadow-primary-500/5
                        transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-start h-full">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-dark-100 dark:bg-dark-700 text-dark-500 dark:text-dark-400 group-hover:bg-primary-500/15 group-hover:text-primary-500 transition-colors duration-300">
                <MoreHorizontal size={22} />
              </div>
              <h3 className="text-base font-semibold text-dark-900 dark:text-white mb-2 font-display">
                Outros
              </h3>
              <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
                Mais serviços em breve. Clique para saber mais.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-2.5 transition-all duration-200 mt-auto">
                Ver mais <ArrowRight size={13} />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {outrosOpen && <OutrosModal onClose={() => setOutrosOpen(false)} />}
    </section>
  )
}
