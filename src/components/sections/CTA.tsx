import { motion } from 'framer-motion'
import { MessageCircle, Mail, ArrowRight, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contato" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-700 to-transparent" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/30 via-dark-950/0 to-teal-950/20 dark:from-primary-950/50 dark:to-teal-950/30 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/8 dark:bg-primary-600/12 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid */}
      <div className="absolute inset-0 bg-hero-grid bg-grid-md opacity-30 dark:opacity-20 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_40%,transparent_100%)] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
                           bg-primary-500/10 text-primary-600 dark:text-primary-400
                           border border-primary-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Pronto para começar?
          </span>
        </motion.div>

        <motion.h2
          className="section-title mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Transforme seu projeto com{' '}
          <span className="gradient-text">precisão geotecnológica</span>
        </motion.h2>

        <motion.p
          className="section-subtitle max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Entre em contato conosco hoje mesmo. Nossa equipe está pronta para entender o seu projeto e apresentar a melhor solução geotecnológica.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://wa.me/5543991862770"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 rounded-2xl"
          >
            <MessageCircle size={20} />
            WhatsApp – (43) 99186-2770
          </a>
          <a
            href="mailto:contato@impgeo.com.br"
            className="btn-secondary text-base px-8 py-4 rounded-2xl"
          >
            <Mail size={20} />
            contato@impgeo.com.br
          </a>
        </motion.div>

        {/* Info cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: <MessageCircle size={15} />, label: 'Resposta em até', value: '24h úteis' },
            { icon: <ArrowRight size={15} />,    label: 'Orçamento',        value: 'Sem compromisso' },
            { icon: <MapPin size={15} />,         label: 'Atendimento',      value: 'Nacional' },
          ].map(item => (
            <div
              key={item.label}
              className="glass rounded-xl px-4 py-3.5 flex items-center gap-3 text-left"
            >
              <span className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                {item.icon}
              </span>
              <div>
                <p className="text-[10px] text-dark-500 dark:text-dark-400">{item.label}</p>
                <p className="text-sm font-semibold text-dark-900 dark:text-white">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
