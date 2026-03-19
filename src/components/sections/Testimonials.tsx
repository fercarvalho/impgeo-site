import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionBadge from '@/components/ui/SectionBadge'

const testimonials = [
  {
    name: 'Carlos Mendonça',
    role: 'Diretor de Operações',
    company: 'Pacaembu Construtora',
    avatar: 'CM',
    rating: 5,
    text: 'A IMP superou todas as nossas expectativas. O georreferenciamento foi entregue no prazo com precisão exemplar, o que nos permitiu dar início ao empreendimento sem nenhum obstáculo legal.',
    color: 'from-primary-500/10 to-primary-600/5',
  },
  {
    name: 'Ana Paula Ferreira',
    role: 'Engenheira Ambiental',
    company: 'CS Consultoria Ambiental',
    avatar: 'AF',
    rating: 5,
    text: 'Trabalho em parceria com a IMP há mais de dois anos. A qualidade dos levantamentos topográficos e a agilidade na entrega dos relatórios são diferenciais que fazem toda a diferença nos nossos projetos.',
    color: 'from-teal-500/10 to-teal-600/5',
  },
  {
    name: 'Roberto Silveira',
    role: 'Produtor Rural',
    company: 'Fazenda São Judas',
    avatar: 'RS',
    rating: 5,
    text: 'Precisava regularizar minha fazenda de 800 hectares e não sabia por onde começar. A equipe da IMP cuidou de tudo, da demarcação ao INCRA. Recomendo sem hesitar.',
    color: 'from-primary-400/10 to-teal-500/5',
  },
  {
    name: 'Mariana Costa',
    role: 'Arquiteta e Urbanista',
    company: 'Verdenge Projetos',
    avatar: 'MC',
    rating: 5,
    text: 'Os levantamentos planialtimétricos da IMP são de altíssima qualidade. As plantas CAD entregues já chegam formatadas e prontas para uso nos projetos. Isso economiza muito tempo de escritório.',
    color: 'from-teal-400/10 to-primary-500/5',
  },
  {
    name: 'Paulo Rodrigues',
    role: 'Gerente de Projetos',
    company: 'Capital Energia',
    avatar: 'PR',
    rating: 5,
    text: 'A IMP realizou o mapeamento aéreo de toda a nossa linha de transmissão com drone. A precisão dos dados foi fundamental para o planejamento da manutenção preventiva.',
    color: 'from-primary-600/10 to-teal-400/5',
  },
  {
    name: 'Fernanda Lima',
    role: 'Diretora Jurídica',
    company: 'Safra Agronegócio',
    avatar: 'FL',
    rating: 5,
    text: 'A segurança jurídica que a IMP oferece nos processos de regularização fundiária é impressionante. Cada entrega vem acompanhada de toda a documentação técnica necessária.',
    color: 'from-teal-600/10 to-primary-400/5',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-50 dark:bg-dark-900/50 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-700 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <SectionBadge>Depoimentos</SectionBadge>
          </motion.div>
          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            O que nossos{' '}
            <span className="gradient-text">clientes dizem</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Cada projeto é uma parceria de longo prazo. Veja o que nossos clientes falam sobre a experiência com a IMP.
          </motion.p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`break-inside-avoid rounded-2xl p-6 bg-gradient-to-br ${t.color}
                          bg-dark-100 dark:bg-dark-800/50
                          border border-dark-200 dark:border-dark-700/50
                          hover:shadow-xl hover:scale-[1.01] transition-all duration-300`}
            >
              {/* Quote icon */}
              <Quote size={20} className="text-primary-400/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed mb-5">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-teal-500 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-dark-400 dark:text-dark-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
