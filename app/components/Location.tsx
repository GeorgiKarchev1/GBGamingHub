'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Instagram, ExternalLink } from 'lucide-react'
import GoogleMap from './GoogleMap'

const Location = () => {
  const locationDetails = [
    {
      icon: <MapPin size={24} />,
      title: 'Адрес',
      content: (
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
      ),
    },
    {
      icon: <Clock size={24} />,
      title: 'Работно време',
      content: (
        <>
          <p>Пон-Нед: 10:00 - 24:00</p>
          <p className="text-white/60">Удължено време през уикенда</p>
        </>
      ),
    },
    {
      icon: <Instagram size={24} />,
      title: 'Последвайте ни',
      content: (
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
      ),
    },
  ]

  return (
    <section id="location" className="py-24 bg-dark-gray mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Намерете ни във Велинград
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Located in the beautiful spa town of Velingrad, GB Gaming Hub offers a unique luxury gaming experience in Bulgaria&#39;s renowned wellness destination.
            </p>

            <div className="space-y-6">
              {locationDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">{detail.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-orbitron text-primary-green font-semibold mb-2">
                      {detail.title}
                    </h4>
                    <div className="text-white/80">
                      {detail.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            <GoogleMap
              height="384px"
              showAddressChip={true}
              showOpenButton={true}
              address="кв. Лъджене, ул. Юндола 21"
              coordinates={{ lat: 42.0276261, lng: 23.9876954 }}
              zoom={19}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location