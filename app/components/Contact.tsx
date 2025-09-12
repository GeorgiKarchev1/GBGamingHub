'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Instagram, ExternalLink } from 'lucide-react'

const Contact = () => {
  const items = [
    {
      icon: <MapPin size={20} />, title: 'Адрес', content: (
        <>
          <p>кв. Лъджене, ул. Юндола 21</p>
          <p className="text-white/60">4600 Velingrad, Bulgaria</p>
          <motion.a
            href="https://www.google.com/maps/place/GbGaming+Hub/@42.0276261,23.9876954,17z/data=!4m14!1m7!3m6!1s0x14ab65debd1ef9a9:0x694bc20a16f1296e!2sGbGaming+Hub!8m2!3d42.0276261!4d23.9876954!16s%2Fg%2F11mdmsxkq_!3m5!1s0x14ab65debd1ef9a9:0x694bc20a16f1296e!8m2!3d42.0276261!4d23.9876954!16s%2Fg%2F11mdmsxkq_?hl=en_GB&entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-green hover:text-accent-green transition-colors inline-flex items-center gap-2 mt-2"
            whileHover={{ scale: 1.03 }}
          >
            Open in Google Maps
            <ExternalLink size={16} />
          </motion.a>
        </>
      )
    },
    {
      icon: <Clock size={20} />, title: 'Работно време', content: (
        <>
          <p>Пон-Нед: 10:00 - 24:00</p>
          <p className="text-white/60">Удължено време през уикенда</p>
        </>
      )
    },
    {
      icon: <Instagram size={20} />, title: 'Последвайте ни', content: (
        <motion.a
          href="https://www.instagram.com/gbgaminghub/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-green hover:text-accent-green transition-colors flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          @gbgaminghub
          <ExternalLink size={16} />
        </motion.a>
      )
    },
  ]

  return (
    <section id="contact" className="py-20 bg-dark-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-orbitron text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Свържете се с нас
        </motion.h2>
        <p className="text-white/70 mb-10">Информация и връзка с екипа на GB Gaming Hub.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-primary-green/20 bg-primary-black/50 p-6 shadow-lg hover:border-accent-green/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-white">{item.icon}</span>
              </div>
              <h3 className="font-orbitron text-primary-green font-semibold mb-2">{item.title}</h3>
              <div className="text-white/80">
                {item.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact


