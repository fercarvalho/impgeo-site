import { motion } from 'framer-motion'
import SectionBadge from '@/components/ui/SectionBadge'

const partners = [
  { name: 'Pacaembu Construtora',   logo: '/images/pacaembu.png'              },
  { name: 'Capital Energia',        logo: '/images/capital-energia.png'       },
  { name: 'CESP',                   logo: '/images/cesp.png'                  },
  { name: 'Coonagro',               logo: '/images/coonagro.png'              },
  { name: 'CS Consultoria',         logo: '/images/cs-consultoria-ambiental.png' },
  { name: 'Four',                   logo: '/images/four.png'                  },
  { name: 'Mastr',                  logo: '/images/mastr.png'                 },
  { name: 'Rizobacter',             logo: '/images/rizobacter.png'            },
  { name: 'Safra',                  logo: '/images/safra.png'                 },
  { name: 'Serv-Lar',               logo: '/images/serv-lar.png'              },
  { name: 'The Best Açaí',          logo: '/images/the-best-acai.png'         },
  { name: 'Verdenge',               logo: '/images/verdenge.png'              },
  { name: 'Berry',                  logo: '/images/berry.png'                 },
  { name: 'Equipe Lote',            logo: '/images/logo-equipe-lote.png'      },
]

// Duplicate for seamless loop
const row1 = [...partners.slice(0, 7), ...partners.slice(0, 7)]
const row2 = [...partners.slice(7),    ...partners.slice(7)]

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 w-36 h-16 mx-4 rounded-xl
                    glass flex items-center justify-center
                    hover:border-primary-300 dark:hover:border-primary-700
                    hover:shadow-md transition-all duration-200 group">
      <img
        src={logo}
        alt={name}
        className="max-h-9 max-w-28 object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
        loading="lazy"
      />
    </div>
  )
}

export default function Partners() {
  return (
    <section id="parceiros" className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <SectionBadge>Parceiros e Clientes</SectionBadge>
        </motion.div>
        <motion.h2
          className="section-title mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Empresas que{' '}
          <span className="gradient-text">confiam na IMP</span>
        </motion.h2>
        <motion.p
          className="section-subtitle max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Atendemos clientes dos setores de construção civil, agronegócio, energia, consultoria ambiental e muito mais.
        </motion.p>
      </div>

      {/* Carousel row 1 – left */}
      <div className="relative mb-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex carousel-track animate-scroll-left w-max">
          {row1.map((p, i) => (
            <PartnerLogo key={`r1-${i}`} name={p.name} logo={p.logo} />
          ))}
        </div>
      </div>

      {/* Carousel row 2 – right */}
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex carousel-track animate-scroll-right w-max">
          {row2.map((p, i) => (
            <PartnerLogo key={`r2-${i}`} name={p.name} logo={p.logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
