import { motion } from 'framer-motion'
import { Shield, Star, Lightbulb, Handshake, Check } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionBadge from '@/components/ui/SectionBadge'

const stats = [
  { value: 10,  suffix: '+', label: 'Anos de experiência combinada', color: 'text-primary-500' },
  { value: 200, suffix: '+', label: 'Projetos concluídos',            color: 'text-teal-500'    },
  { value: 8,   suffix: '',  label: 'Estados atendidos',               color: 'text-primary-400' },
  { value: 99,  suffix: '%', label: 'Índice de satisfação',            color: 'text-teal-400'    },
]

const pillars = [
  {
    icon: <Shield size={18} />,
    title: 'Segurança Jurídica',
    description: 'Todos os trabalhos seguem rigorosamente as normas técnicas vigentes e as exigências dos órgãos competentes.',
    color: 'bg-primary-500/10 text-primary-500',
  },
  {
    icon: <Star size={18} />,
    title: 'Excelência Técnica',
    description: 'Equipe de geógrafos e engenheiros com sólida formação acadêmica e vasta experiência prática.',
    color: 'bg-teal-500/10 text-teal-500',
  },
  {
    icon: <Lightbulb size={18} />,
    title: 'Soluções Inovadoras',
    description: 'Adotamos as tecnologias mais avançadas do mercado: GNSS RTK, drones de última geração e softwares de ponta.',
    color: 'bg-primary-400/10 text-primary-400',
  },
  {
    icon: <Handshake size={18} />,
    title: 'Parcerias Estratégicas',
    description: 'Rede de especialistas em direito, engenharia e arquitetura para atender projetos complexos com excelência.',
    color: 'bg-teal-400/10 text-teal-400',
  },
]

const highlights = [
  'Fundada por três geógrafos visionários em 2020',
  'Atuação em todo o território nacional',
  'Equipamentos de última geração',
  'Suporte completo do início ao fim do projeto',
]

export default function About() {
  const { ref } = useInView()

  return (
    <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Glow bg */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center"
            >
              <p className={`text-4xl font-bold font-display mb-1 ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-dark-500 dark:text-dark-400 leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5">
              <SectionBadge>Quem somos</SectionBadge>
            </div>
            <h2 className="section-title mb-6">
              Conhecimento geográfico{' '}
              <span className="gradient-text">aplicado com precisão</span>
            </h2>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
              A IMP Geotecnologias Aplicadas nasceu da união de conhecimento acadêmico e experiência prática,
              fundada em 2020 por três geógrafos apaixonados por tecnologia e inovação. Nossa missão é
              transformar dados geográficos em soluções que geram valor real para nossos clientes.
            </p>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-8">
              Atendemos desde grandes construtoras e incorporadoras até pequenos produtores rurais, sempre
              com o mesmo rigor técnico e dedicação que nos tornaram referência no setor de geoprocessamento.
            </p>
            <ul className="space-y-3">
              {highlights.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-dark-700 dark:text-dark-200">
                  <span className="w-5 h-5 rounded-full bg-primary-500/15 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-primary-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right – image + overlay */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-dark-100 dark:bg-dark-800">
              <img
                src="/images/foto-dupla.webp"
                alt="Equipe IMP Geotecnologias"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />

              {/* Badge on image */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass-dark rounded-2xl px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-dark-400">Empresa certificada</p>
                    <p className="text-sm font-semibold text-white">IMP Geotecnologias Aplicadas</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary-600/20 border border-primary-500/30 flex items-center justify-center">
                    <Shield size={18} className="text-primary-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-5 glass rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-dark-500 dark:text-dark-400">Fundada em</p>
              <p className="text-lg font-bold gradient-text font-display">2020</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Partners / Founders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <SectionBadge>Sócios fundadores</SectionBadge>
            <h2 className="section-title mt-4">
              As pessoas por trás da <span className="gradient-text">IMP Geotecnologias</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Vinicius Iria',
                role: 'Geógrafo | Sócio fundador',
                bio: 'Geógrafo e Mestre em Geografia pela Universidade Estadual de Londrina (UEL). Certificado em pilotagem e mapeamento com RPA e com MBA em Gestão Ambiental. Com vasta experiência em geotecnologias e projetos ambientais, lidera a equipe com foco em inovação e precisão.',
                crea: 'CREA/PR: 195641/D',
                email: 'vinicius@impgeo.com.br',
                photo: '/images/vinicius.webp',
              },
              {
                name: 'Eduardo Molina',
                role: 'Geógrafo | Sócio fundador',
                bio: 'Mestre em Planejamento Urbano e Territorial pela UEL, com grande experiência em Sistemas de Informações Geográficas (SIG) e Geoprocessamento. Traz expertise em aerofotogrametria e geotecnologias avançadas para garantir o sucesso de cada projeto.',
                crea: 'CREA/PR: 162531D',
                email: 'eduardo@impgeo.com.br',
                photo: '/images/eduardo.webp',
              },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass rounded-3xl p-8 flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-5 ring-4 ring-primary-500/20">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold font-display text-dark-900 dark:text-white mb-1">
                  {person.name}
                </h3>
                <p className="text-sm text-primary-500 font-medium mb-4">{person.role}</p>
                <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed mb-5">
                  {person.bio}
                </p>
                <div className="text-xs text-dark-500 dark:text-dark-400 space-y-1 w-full border-t border-dark-200 dark:border-dark-700 pt-4">
                  <p>{person.crea}</p>
                  <p>
                    <a
                      href={`mailto:${person.email}`}
                      className="text-primary-500 hover:text-primary-400 transition-colors"
                    >
                      {person.email}
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${pillar.color}`}>
                {pillar.icon}
              </div>
              <h3 className="text-sm font-semibold text-dark-900 dark:text-white mb-2 font-display">
                {pillar.title}
              </h3>
              <p className="text-xs text-dark-500 dark:text-dark-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
