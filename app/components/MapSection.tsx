'use client'

import { motion } from 'framer-motion'
import GoogleMap from './GoogleMap'

const MapSection = () => {
  return (
    <section id="map" className="py-16 bg-primary-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GoogleMap
            height="420px"
            showAddressChip={true}
            showOpenButton={true}
            address="кв. Лъджене, ул. Юндола 21"
            coordinates={{ lat: 42.0276261, lng: 23.9876954 }}
            zoom={19}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default MapSection


