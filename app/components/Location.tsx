'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Instagram, ExternalLink } from 'lucide-react'

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
    <section id="location" className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Find Us in Velingrad
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
            className="h-96 rounded-3xl overflow-hidden border border-primary-green/20 shadow-xl relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            <iframe
              title="GB Gaming Hub Velingrad Location"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src="https://maps.google.com/maps?ll=42.0276261,23.9876954&z=17&t=m&output=embed"
              style={{ filter: 'contrast(1.05) saturate(0.95)' }}
            />

            {/* Center marker overlay (no Google info card) */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
              <div className="w-6 h-6 bg-primary-green rounded-full shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
              <div className="absolute w-3 h-3 bg-primary-black rounded-full border border-primary-green/70" />
            </div>

            {/* Address chip */}
            <div className="absolute left-4 bottom-4 z-10">
              <div className="backdrop-blur-md bg-primary-black/60 text-white px-4 py-2 rounded-full border border-primary-green/30 shadow-lg">
                кв. Лъджене, ул. Юндола 21
              </div>
            </div>

            {/* Open in Google Maps button */}
            <div className="absolute right-4 bottom-4 z-10">
              <motion.a
                href="https://www.google.com/maps/place/GbGaming+Hub/@42.0276261,23.9876954,17z/data=!4m14!1m7!3m6!1s0x14ab65debd1ef9a9:0x694bc20a16f1296e!2sGbGaming+Hub!8m2!3d42.0276261!4d23.9876954!16s%2Fg%2F11mdmsxkq_!3m5!1s0x14ab65debd1ef9a9:0x694bc20a16f1296e!8m2!3d42.0276261!4d23.9876954!16s%2Fg%2F11mdmsxkq_?hl=en_GB&entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green text-primary-black font-medium shadow-lg hover:bg-accent-green transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Отвори в Maps
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location