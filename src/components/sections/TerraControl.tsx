import { motion } from 'framer-motion'
import {
  Layers, MapPin, FileCheck, BarChart3, Shield, Share2,
  Sparkles, ArrowRight, Check, Map as MapIcon, Archive,
} from 'lucide-react'

const features = [
  {
    icon: <Layers size={18} />,
    title: 'Gestão Centralizada',
    desc: 'Todos os imóveis rurais e seus dados em uma única plataforma intuitiva.',
  },
  {
    icon: <FileCheck size={18} />,
    title: 'Documentação Digital',
    desc: 'CAR, Matrículas, ITR e CCIR organizados com PDFs hospedados e prontos para download.',
  },
  {
    icon: <BarChart3 size={18} />,
    title: 'Análises Visuais',
    desc: '15+ gráficos interativos cobrindo áreas, culturas, APP e reserva legal.',
  },
  {
    icon: <MapPin size={18} />,
    title: 'Mapas Integrados',
    desc: 'Cada propriedade com mapa do Google embarcado, validado e seguro.',
  },
  {
    icon: <Share2 size={18} />,
    title: 'Links Compartilháveis',
    desc: 'Compartilhe relatórios com clientes via link protegido por senha e expiração.',
  },
  {
    icon: <Shield size={18} />,
    title: 'Geo Conformidade',
    desc: 'Acompanhe Geo Certificação INCRA e Geo Registro em tempo real.',
  },
]

const highlights = [
  'Controle automático de saldo de Reserva Legal',
  'Categorização por uso do solo (Silvicultura, Pasto, Cultura...)',
  'Download em ZIP de todos os documentos do imóvel',
  'Estatísticas agregadas por município',
]

export default function TerraControl() {
  return (
    <section id="terracontrol" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4] via-white to-[#eff6ff] dark:from-[#0a1a0f] dark:via-dark-950 dark:to-[#0a1428] -z-20" />
      <div className="absolute inset-0 bg-hero-grid bg-grid-md opacity-30 dark:opacity-20 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#48A326]/10 dark:bg-[#48A326]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0041B1]/10 dark:bg-[#0041B1]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
                             bg-gradient-to-r from-[#48A326]/15 to-[#0041B1]/15 dark:from-[#48A326]/20 dark:to-[#0041B1]/20
                             text-[#0041B1] dark:text-white border border-[#0041B1]/20 dark:border-white/15 backdrop-blur-sm">
              <Sparkles size={12} className="text-[#48A326]" />
              Produto Exclusivo IMPGEO
            </span>
          </motion.div>
          <div className="mb-6">
            <motion.a
              href="https://terracontrol.viverdepj.com.br"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="inline-flex items-center justify-center gap-3 px-10 sm:px-16 py-3.5 rounded-xl text-lg font-semibold text-white shadow-lg shadow-[#0041B1]/30
                         bg-gradient-to-r from-[#48A326] to-[#0041B1]
                         hover:shadow-xl hover:shadow-[#0041B1]/50 hover:scale-105
                         transition-all duration-300"
            >
              <img src="/logoterracontrol.png" alt="" className="w-7 h-7 object-contain" />
              Acessar plataforma
            </motion.a>
          </div>
          <motion.h2
            className="section-title mb-5 text-dark-900 dark:text-white flex items-center justify-center flex-wrap gap-x-3 gap-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span>Conheça o</span>
            <img
              src="/logoterracontrol.png"
              alt="TerraControl"
              className="inline-block w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain drop-shadow-md align-middle"
            />
            <span className="bg-gradient-to-r from-[#48A326] to-[#0041B1] dark:from-[#5cc933] dark:to-[#3b82f6] bg-clip-text text-transparent">
              TerraControl
            </span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-dark-600 dark:text-dark-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A plataforma de gestão territorial desenvolvida pela IMPGEO. Centralize a documentação,
            o georreferenciamento e os indicadores ambientais de cada um dos seus imóveis rurais
            com visualizações ricas e compartilhamento seguro.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            className="lg:col-span-2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold font-display text-dark-900 dark:text-white mb-6">
              Tudo o que importa em <span className="bg-gradient-to-r from-[#48A326] to-[#0041B1] dark:from-[#5cc933] dark:to-[#3b82f6] bg-clip-text text-transparent">uma só tela</span>
            </h3>
            <ul className="space-y-3.5 mb-8">
              {highlights.map(h => (
                <li key={h} className="flex items-start gap-3 text-sm text-dark-700 dark:text-dark-200 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#48A326] to-[#0041B1] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5543991862770?text=Ol%C3%A1%2C%20pessoal%20da%20IMPGEO%2C%20gostaria%20de%20conhecer%20o%20TerraControl%20e%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold
                         border border-[#0041B1]/30 dark:border-white/15
                         text-[#0041B1] dark:text-white
                         bg-white/50 dark:bg-white/[0.03] backdrop-blur-sm
                         hover:bg-white/80 dark:hover:bg-white/[0.08]
                         hover:border-[#0041B1]/50 dark:hover:border-white/30
                         transition-all duration-300"
            >
              Solicitar demonstração <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            className="lg:col-span-3 order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#48A326]/30 to-[#0041B1]/30 blur-3xl scale-95 -z-10" />

              <div className="relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-[#111827] border border-dark-200 dark:border-white/10 shadow-2xl">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 dark:bg-[#141e2e] border-b border-dark-200 dark:border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  <div className="ml-4 flex-1 max-w-xs h-5 rounded bg-white dark:bg-white/5 border border-dark-200/60 dark:border-transparent flex items-center px-2">
                    <span className="text-[9px] text-dark-500 dark:text-dark-500 font-mono truncate">terracontrol.impgeo.com.br</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#3d8920] to-[#003391] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/logoterracontrol.png"
                      alt="TerraControl"
                      className="w-9 h-9 object-contain"
                    />
                    <div>
                      <p className="text-sm font-bold text-white leading-none">TerraControl</p>
                      <p className="text-[10px] text-blue-200 mt-0.5">Gestão territorial</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-blue-200 font-semibold tracking-wider">by IMPGEO</span>
                </div>

                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: 'Imóveis', value: '24' },
                      { label: 'Área Total', value: '8.420 ha' },
                      { label: 'Geo Cert.', value: '18', accent: true },
                      { label: 'Geo Reg.', value: '15', accent: true },
                    ].map(s => (
                      <div key={s.label} className="bg-white dark:bg-[#243040] rounded-lg p-2 border border-dark-200 dark:border-white/5 shadow-sm dark:shadow-none">
                        <p className="text-[8px] text-dark-500 dark:text-dark-500 uppercase tracking-wider mb-0.5">{s.label}</p>
                        <p className={`text-sm font-bold ${s.accent ? 'text-green-600 dark:text-green-400' : 'text-dark-900 dark:text-white'}`}>{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white dark:bg-[#243040] rounded-lg overflow-hidden border border-dark-200 dark:border-white/5 shadow-sm dark:shadow-none">
                    <div className="bg-gradient-to-r from-[#48A326] to-[#0041B1] px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-[9px] font-bold text-white bg-white/20 px-1.5 py-0.5 rounded shrink-0">#001</span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white leading-none truncate">Fazenda Esperança</p>
                          <p className="text-[9px] text-blue-200 mt-0.5">Londrina, PR</p>
                        </div>
                      </div>
                      <div className="flex gap-1 shrink-0">
                        <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                          <MapIcon size={10} className="text-white" />
                        </div>
                        <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                          <Archive size={10} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="px-3 pt-2.5 pb-3 space-y-2.5 divide-y divide-dark-100 dark:divide-white/5">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gray-50 dark:bg-[#1a2a3e] rounded p-1.5 text-center border border-dark-200/60 dark:border-white/5">
                          <p className="text-[8px] text-dark-500 dark:text-dark-500 uppercase tracking-wide">Total</p>
                          <p className="text-[11px] font-bold text-dark-900 dark:text-white">420 ha</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-[#1a2a3e] rounded p-1.5 text-center border border-dark-200/60 dark:border-white/5">
                          <p className="text-[8px] text-dark-500 dark:text-dark-500 uppercase tracking-wide">Res. Legal</p>
                          <p className="text-[11px] font-bold text-dark-900 dark:text-white">95 ha</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-[#1a2a3e] rounded p-1.5 text-center border border-dark-200/60 dark:border-white/5">
                          <p className="text-[8px] text-dark-500 dark:text-dark-500 uppercase tracking-wide">Saldo RL</p>
                          <p className="text-[11px] font-bold text-green-600 dark:text-green-400">+11 ha</p>
                        </div>
                      </div>

                      <div className="pt-2.5 flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] text-dark-500 dark:text-dark-400">Certificação</span>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">SIM</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] text-dark-500 dark:text-dark-400">Registro</span>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">SIM</span>
                        </div>
                      </div>

                      <div className="pt-2.5">
                        <p className="text-[8px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1.5">Uso do Solo</p>
                        <div className="flex flex-wrap gap-1.5">
                          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-md px-2 py-0.5">
                            <span className="text-[9px] font-semibold text-blue-800 dark:text-blue-300">Soja</span>
                            <span className="text-[9px] text-blue-500 dark:text-blue-400 ml-1">180 ha</span>
                          </div>
                          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 rounded-md px-2 py-0.5">
                            <span className="text-[9px] font-semibold text-emerald-800 dark:text-emerald-300">Silvicultura</span>
                            <span className="text-[9px] text-emerald-500 dark:text-emerald-400 ml-1">95 ha</span>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-md px-2 py-0.5">
                            <span className="text-[9px] font-semibold text-slate-700 dark:text-slate-300">Pasto</span>
                            <span className="text-[9px] text-slate-500 dark:text-slate-400 ml-1">50 ha</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 rounded-2xl px-4 py-3 shadow-2xl
                           bg-gradient-to-br from-[#48A326] to-[#0041B1] border border-white/20"
              >
                <p className="text-[10px] text-white/80 uppercase tracking-wider">Exclusivo</p>
                <p className="text-sm font-bold text-white font-display">IMPGEO</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl p-5 backdrop-blur-md
                         bg-white/70 dark:bg-white/[0.03]
                         border border-dark-200/60 dark:border-white/10
                         hover:border-[#0041B1]/40 dark:hover:border-white/25
                         hover:bg-white/90 dark:hover:bg-white/[0.06]
                         hover:-translate-y-0.5 hover:shadow-lg
                         transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#48A326]/15 to-[#0041B1]/15 dark:from-[#48A326]/25 dark:to-[#0041B1]/25
                              border border-[#0041B1]/15 dark:border-white/10
                              flex items-center justify-center mb-3 text-[#0041B1] dark:text-white">
                {f.icon}
              </div>
              <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-1.5 font-display">{f.title}</h4>
              <p className="text-xs text-dark-600 dark:text-dark-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
