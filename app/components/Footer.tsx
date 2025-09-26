'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Footer = () => {
  const footerLinks = [
    {
      title: 'Игри',
      links: [
        { label: 'PC гейминг', href: '#' },
        { label: 'Конзолен гейминг', href: '#' },
        { label: 'VR изживяване', href: '#' },
        { label: 'Турнири', href: '#' },
      ],
    },
    {
      title: 'Услуги',
      links: [
        { label: 'Частни сесии', href: '#' },
        { label: 'Групови събития', href: '#' },
        { label: 'Рождени дни', href: '#' },
        { label: 'Корпоративни събития', href: '#' },
      ],
    },
    {
      title: 'Контакти',
      links: [
        { label: 'Велинград, България', href: '#location' },
        { 
          label: 'Instagram', 
          href: 'https://www.instagram.com/gbgaminghub/',
          external: true 
        },
        { label: 'Онлайн резервация', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-dark-gray border-t border-primary-green/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-lg">GB</span>
              </div>
              <span className="font-orbitron font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                GB Gaming Hub
              </span>
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Премиум гейминг изживяване във Велинград – където луксът среща гейминга.
            </p>
          </motion.div>

          {/* Links sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (sectionIndex + 1) * 0.1, duration: 0.6 }}
            >
              <h4 className="font-orbitron text-primary-green font-semibold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-white/70 hover:text-primary-green transition-colors duration-300 flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          className="pt-8 border-t border-primary-green/10 text-center space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-white/50">
            &copy; {new Date().getFullYear()} GB Gaming Hub. Всички права запазени.
          </p>
          <div className="flex items-baseline justify-center gap-2 mt-4">
            <span className="text-white/60 text-xl" style={{ fontFamily: 'Instrument Serif, serif' }}>
              Built by
            </span>
            <a
              href="https://karchev.info"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center"
            >
              <span
                className="text-xl font-medium bg-gradient-to-r from-primary-green to-emerald-400 bg-clip-text text-transparent hover:from-emerald-400 hover:to-primary-green transition-all duration-300 transform group-hover:scale-105 relative"
                style={{
                  fontFamily: 'Instrument Serif, serif',
                  filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))',
                  textShadow: '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.2)'
                }}
              >
                Karchev
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-green to-emerald-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer