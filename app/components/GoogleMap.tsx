'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Navigation } from 'lucide-react'

interface GoogleMapProps {
  className?: string
  height?: string
  showAddressChip?: boolean
  showOpenButton?: boolean
  address?: string
  coordinates?: {
    lat: number
    lng: number
  }
  zoom?: number
}

const GoogleMap = ({
  className = '',
  height = '420px',
  showAddressChip = true,
  showOpenButton = true,
  address = 'кв. Лъджене, ул. Юндола 21',
  coordinates = { lat: 42.0276261, lng: 23.9876954 },
  zoom = 19
}: GoogleMapProps) => {

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordinates.lat + ',' + coordinates.lng)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(coordinates.lat + ',' + coordinates.lng)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div 
      className={`relative rounded-3xl overflow-hidden border border-primary-green/20 shadow-xl group ${className}`}
      style={{ height }}
    >
      <iframe
        title="GB Gaming Hub Velingrad Location"
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        src={`https://maps.google.com/maps?ll=${coordinates.lat},${coordinates.lng}&z=${zoom}&t=m&output=embed`}
        style={{ filter: 'contrast(1.05) saturate(0.95)' }}
      />
      
      {/* Red marker dot */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] border-2 border-white"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Address chip */}
      {showAddressChip && (
        <div className="absolute left-4 bottom-4 z-10">
          <motion.div
            className="backdrop-blur-md bg-primary-black/80 text-white px-4 py-2 rounded-full border border-primary-green/30 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-green" />
              <span className="text-sm font-medium">{address}</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Action buttons */}
      {showOpenButton && (
        <div className="absolute right-4 bottom-4 z-10 flex flex-col gap-2">
          <motion.button
            onClick={openInGoogleMaps}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green text-primary-black font-medium shadow-lg hover:bg-accent-green transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <ExternalLink size={16} />
            Отвори в Maps
          </motion.button>
          
          <motion.button
            onClick={getDirections}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-primary-black font-medium shadow-lg hover:bg-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Navigation size={16} />
            Насоки
          </motion.button>
        </div>
      )}
    </div>
  )
}

export default GoogleMap
