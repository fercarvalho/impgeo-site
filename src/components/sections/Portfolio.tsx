import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react'
import SectionBadge from '@/components/ui/SectionBadge'

const categories = ['Todos', 'Georreferenciamento', 'Topografia', 'Drone', 'Ambiental']

const projects = [
  {
    id: 1,
    title: 'Georreferenciamento de Fazenda – 2.400 ha',
    description: 'Levantamento e demarcação de imóvel rural de grande porte com tecnologia GNSS RTK e certificação junto ao INCRA.',
    image: '/images/georreferenciamento-imoveis-rurais-01.webp',
    category: 'Georreferenciamento',
    location: 'Londrina, PR',
    year: '2023',
    tags: ['GNSS', 'INCRA', 'Rural'],
  },
  {
    id: 2,
    title: 'Levantamento Topográfico – Condomínio Residencial',
    description: 'Levantamento planialtimétrico de terreno de 50.000 m² para projeto de loteamento de alto padrão.',
    image: '/images/topografia-itajai-03.webp',
    category: 'Topografia',
    location: 'Itajaí, SC',
    year: '2023',
    tags: ['Planialtimétrico', 'Loteamento'],
  },
  {
    id: 3,
    title: 'Mapeamento com Drone – Área Industrial',
    description: 'Ortofoto e modelo digital do terreno de área industrial de 120 ha com precisão centimétrica.',
    image: '/images/georreferenciamento-terreno-urbano-01.webp',
    category: 'Drone',
    location: 'Maringá, PR',
    year: '2024',
    tags: ['Ortofoto', 'MDT', 'Industrial'],
  },
  {
    id: 4,
    title: 'Licenciamento Ambiental – ETA Municipal',
    description: 'Elaboração de Relatório Ambiental Preliminar (RAP) e condução do processo de licenciamento junto ao IAT-PR.',
    image: '/images/empresa-licenciamento-ambiental-02.webp',
    category: 'Ambiental',
    location: 'Paranavaí, PR',
    year: '2022',
    tags: ['RAP', 'IAT', 'Licença'],
  },
  {
    id: 5,
    title: 'Georreferenciamento Urbano – 120 Lotes',
    description: 'Regularização fundiária de loteamento com 120 lotes no município de Londrina, com atualização de matrículas.',
    image: '/images/georreferenciamento-imoveis-rurais-01.webp',
    category: 'Georreferenciamento',
    location: 'Londrina, PR',
    year: '2024',
    tags: ['Urbano', 'REURB', 'Cartório'],
  },
  {
    id: 6,
    title: 'Mapeamento Florestal com Drone',
    description: 'Quantificação de remanescente florestal e cálculo de APP para reserva legal com processamento NDVI.',
    image: '/images/empresa-licenciamento-ambiental-02.webp',
    category: 'Drone',
    location: 'Cianorte, PR',
    year: '2023',
    tags: ['NDVI', 'APP', 'Florestal'],
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <SectionBadge>Portfólio</SectionBadge>
          </motion.div>
          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Projetos que{' '}
            <span className="gradient-text">falam por si</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Conheça alguns dos nossos trabalhos e veja como transformamos desafios complexos em resultados precisos.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'glass text-dark-600 dark:text-dark-300 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-dark-800/50 border border-dark-100 dark:border-dark-700/50 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video bg-dark-100 dark:bg-dark-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-lg bg-white/90 dark:bg-dark-800/90 flex items-center justify-center">
                      <ArrowUpRight size={14} className="text-primary-600" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-dark-950/70 backdrop-blur-sm text-[10px] font-semibold text-white uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-dark-900 dark:text-white mb-2 font-display leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-dark-100 dark:bg-dark-700/60 text-dark-600 dark:text-dark-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-dark-400 dark:text-dark-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={11} /> {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} /> {project.year}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/5543991862770?text=Ol%C3%A1%2C%20pessoal%20da%20IMPGEO%2C%20vim%20atrav%C3%A9s%20do%20site%20de%20voc%C3%AAs%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20prestados%20por%20voc%C3%AAs."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Iniciar um projeto <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
