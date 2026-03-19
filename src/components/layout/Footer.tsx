import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Linkedin, ArrowUpRight, X, ExternalLink } from 'lucide-react'

const services = [
  { label: 'Georreferenciamento Urbano',  serviceTitle: 'Georreferenciamento' },
  { label: 'Georreferenciamento Rural',   serviceTitle: 'Georreferenciamento' },
  { label: 'Levantamento Topográfico',    serviceTitle: 'Levantamento Topográfico' },
  { label: 'Mapeamento com Drone',        serviceTitle: 'Mapeamento com Drone' },
  { label: 'Licenciamento Ambiental',     serviceTitle: 'Licenciamento Ambiental' },
  { label: 'Regularização Fundiária',     serviceTitle: 'Regularização Fundiária' },
]

const links = [
  { label: 'Sobre Nós',  href: '#sobre' },
  { label: 'Portfólio',  href: '#portfolio' },
  { label: 'FAQ',        href: '#faq' },
  { label: 'Contato',    href: '#contato' },
]

// Coordenadas da Av. Maringá, 627 – Londrina, PR
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.5!2d-51.1789!3d-23.3045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb44083e3cef9f%3A0x1!2sAv.%20Maring%C3%A1%2C%20627%20-%20Londrina%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr'
const MAPS_LINK  = 'https://www.google.com/maps/search/Av.+Maring%C3%A1,+627,+Sala+202,+Londrina,+PR'

function MapModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-dark-900 border border-dark-700/60 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-dark-700/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center">
                <MapPin size={15} className="text-primary-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">IMP Geotecnologias Aplicadas</p>
                <p className="text-xs text-dark-400">Av. Maringá, 627, Sala 202 – Londrina, PR</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                           bg-primary-600 hover:bg-primary-500 text-white transition-colors duration-200"
              >
                Abrir no Maps <ExternalLink size={11} />
              </a>
              <button
                onClick={onClose}
                aria-label="Fechar"
                className="w-8 h-8 rounded-lg bg-dark-800 hover:bg-dark-700 flex items-center justify-center text-dark-400 hover:text-white transition-colors duration-200"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Map iframe */}
          <div className="w-full h-80">
            <iframe
              title="Localização IMP Geotecnologias"
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Footer() {
  const [mapOpen, setMapOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const openServiceModal = (serviceTitle: string) => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
    // Small delay so the section is in view before the modal opens
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('open-service-modal', { detail: serviceTitle }))
    }, 400)
  }

  return (
    <>
      <footer className="relative bg-dark-950 text-dark-300 overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

        {/* Background glow */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-teal-500 flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-base font-bold font-display text-white">IMP</span>
                  <span className="text-[10px] font-medium text-dark-500 tracking-widest uppercase">Geotecnologias</span>
                </div>
              </div>
              <p className="text-sm text-dark-400 leading-relaxed mb-5">
                Transformando conhecimento geográfico em soluções inovadoras para o seu projeto.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/impgeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/imp-geotecnologias-aplicadas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Serviços</h3>
              <ul className="space-y-2.5">
                {services.map(s => (
                  <li key={s.label}>
                    <button
                      onClick={() => openServiceModal(s.serviceTitle)}
                      className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1.5 group text-left"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary-600 group-hover:bg-primary-400 transition-colors shrink-0" />
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Empresa</h3>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={e => { e.preventDefault(); handleNav(l.href) }}
                      className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary-600 group-hover:bg-primary-400 transition-colors" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Contato</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/5543991862770?text=Ol%C3%A1%2C%20pessoal%20da%20IMPGEO%2C%20vim%20atrav%C3%A9s%20do%20site%20de%20voc%C3%AAs%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20prestados%20por%20voc%C3%AAs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-dark-400 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-dark-800 group-hover:bg-primary-600/20 flex items-center justify-center transition-colors">
                      <Phone size={14} />
                    </span>
                    (43) 99186-2770
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@impgeo.com.br"
                    className="flex items-center gap-3 text-sm text-dark-400 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-dark-800 group-hover:bg-primary-600/20 flex items-center justify-center transition-colors">
                      <Mail size={14} />
                    </span>
                    contato@impgeo.com.br
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setMapOpen(true)}
                    className="flex items-start gap-3 text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200 group text-left w-full"
                  >
                    <span className="w-8 h-8 rounded-lg bg-dark-800 group-hover:bg-primary-600/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <MapPin size={14} />
                    </span>
                    <span className="leading-relaxed">
                      Av. Maringá, 627, Sala 202<br />
                      Londrina – PR, CEP 86060-000
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-dark-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-dark-600">
              © {currentYear} IMP Geotecnologias Aplicadas. Todos os direitos reservados.
            </p>
            <motion.a
              href="https://impgeo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-dark-600 hover:text-primary-400 flex items-center gap-1 transition-colors duration-200"
              whileHover={{ x: 2 }}
            >
              impgeo.com.br <ArrowUpRight size={12} />
            </motion.a>
          </div>
        </div>
      </footer>

      {mapOpen && <MapModal onClose={() => setMapOpen(false)} />}
    </>
  )
}
