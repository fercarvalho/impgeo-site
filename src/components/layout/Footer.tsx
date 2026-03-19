import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Linkedin, ArrowUpRight } from 'lucide-react'

const services = [
  'Georreferenciamento Urbano',
  'Georreferenciamento Rural',
  'Levantamento Topográfico',
  'Mapeamento com Drone',
  'Licenciamento Ambiental',
  'Regularização Fundiária',
]

const links = [
  { label: 'Sobre Nós',  href: '#sobre' },
  { label: 'Portfólio',  href: '#portfolio' },
  { label: 'FAQ',        href: '#faq' },
  { label: 'Contato',    href: '#contato' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
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
                <li key={s}>
                  <a
                    href="#servicos"
                    onClick={e => { e.preventDefault(); handleNav('#servicos') }}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-600 group-hover:bg-primary-400 transition-colors" />
                    {s}
                  </a>
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
                  href="tel:+5543991862770"
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
                <div className="flex items-start gap-3 text-sm text-dark-400">
                  <span className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={14} />
                  </span>
                  <span className="leading-relaxed">
                    Av. Maringá, 627, Sala 202<br />
                    Londrina – PR, CEP 86060-000
                  </span>
                </div>
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
  )
}
