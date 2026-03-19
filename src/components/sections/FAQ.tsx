import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionBadge from '@/components/ui/SectionBadge'

const faqs = [
  {
    question: 'O que é georreferenciamento e quando é obrigatório?',
    answer: 'Georreferenciamento é o processo de vincular as coordenadas de um imóvel ao Sistema Geodésico Brasileiro (SGB), determinando com precisão seus limites. É obrigatório para imóveis rurais acima de 100 ha que pretendam realizar qualquer ato de transferência, retificação ou desmembramento junto ao INCRA e ao Cartório de Registro de Imóveis.',
  },
  {
    question: 'Quanto tempo leva um levantamento topográfico?',
    answer: 'O prazo varia conforme o tamanho e a complexidade do terreno. Para pequenos lotes urbanos (até 5.000 m²), o levantamento de campo pode ser concluído em um único dia. Áreas maiores ou com obstáculos podem levar de 3 a 10 dias de campo, mais o tempo de processamento em escritório. Enviamos um cronograma detalhado no início de cada projeto.',
  },
  {
    question: 'Vocês atendem fora do estado do Paraná?',
    answer: 'Sim! Temos experiência em projetos em 8 estados brasileiros. Nossa equipe está preparada para se deslocar a qualquer região do país. Para projetos em outros estados, entramos em contato com parceiros locais quando necessário para garantir agilidade e reduzir custos logísticos.',
  },
  {
    question: 'Como funciona o processo de licenciamento ambiental?',
    answer: 'O licenciamento ambiental é um processo administrativo realizado junto ao órgão ambiental competente (IBAMA, IAT, SEMMA, etc.). Envolve a elaboração de estudos técnicos (EIA, RIMA, RAP, RAS), reuniões com os órgãos, audiências públicas quando necessário e o acompanhamento de todas as etapas até a emissão da licença. A IMP cuida de todo esse processo por você.',
  },
  {
    question: 'Qual a precisão dos levantamentos com drone?',
    answer: 'Com uso de pontos de apoio (GCPs) e drones equipados com receptor RTK integrado, conseguimos atingir precisão planimétrica de 2 a 5 cm e altimétrica de 3 a 8 cm, dependendo das condições de voo e do equipamento utilizado. Essa precisão é suficiente para a grande maioria dos projetos de engenharia, topografia e mapeamento.',
  },
  {
    question: 'Como solicito um orçamento?',
    answer: 'Basta nos contatar via WhatsApp pelo número (43) 99186-2770 ou pelo e-mail contato@impgeo.com.br. Para um orçamento preciso, informe o tipo de serviço desejado, a localização e a área do terreno. Respondemos em até 24 horas úteis com uma proposta personalizada e sem compromisso.',
  },
  {
    question: 'Vocês emitem ART (Anotação de Responsabilidade Técnica)?',
    answer: 'Sim. Todos os nossos trabalhos são acompanhados da ART registrada junto ao CREA ou ao CONFEA, conforme a natureza do serviço. A ART é um documento obrigatório que garante a responsabilidade técnica do profissional e a validade legal dos trabalhos entregues.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-700 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <SectionBadge>FAQ</SectionBadge>
          </motion.div>
          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Perguntas{' '}
            <span className="gradient-text">frequentes</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Tire suas principais dúvidas sobre os nossos serviços. Se não encontrar o que procura, fale com a gente!
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? 'border-primary-300 dark:border-primary-700 bg-primary-50/50 dark:bg-primary-950/20 shadow-lg shadow-primary-500/5'
                  : 'border-dark-200 dark:border-dark-700/50 bg-dark-100 dark:bg-dark-800/40 hover:border-dark-300 dark:hover:border-dark-600'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className={`text-sm font-semibold font-display leading-snug transition-colors ${
                  open === i ? 'text-primary-600 dark:text-primary-400' : 'text-dark-800 dark:text-dark-100'
                }`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                  open === i
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-100 dark:bg-dark-700 text-dark-500 dark:text-dark-400'
                }`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
