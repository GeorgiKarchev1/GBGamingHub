'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Trophy, Calendar, Users, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import TournamentPopup from './TournamentPopup'

const TournamentNotification = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    // Show notification after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(showTimer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
    setIsVisible(false) // Hide notification when popup opens
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 300,
              opacity: { duration: 0.2 }
            }}
            className="fixed top-20 right-6 z-50 w-80 mx-4 sm:mx-0"
          >
            <div className="bg-gradient-dark/95 border border-primary-green/30 rounded-xl p-4 shadow-2xl backdrop-blur-xl relative overflow-hidden"
                 style={{
                   backdropFilter: 'blur(20px)',
                   WebkitBackdropFilter: 'blur(20px)'
                 }}>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl" />
              <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-primary rounded-full opacity-20 blur-sm" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-1 right-1 p-2 text-white/50 hover:text-white hover:bg-white/15 hover:scale-110 transition-all duration-200 rounded-full min-w-[36px] min-h-[36px] flex items-center justify-center"
              >
                <X size={16} />
              </button>

              {/* Content */}
              <div className="relative">
                {/* Header with icon and title in same line */}
                <div className="flex items-center mb-2">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-3"
                  >
                    <Trophy className="w-4 h-4 text-white" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-orbitron text-sm font-bold text-white"
                  >
                    Турнир в процес на планиране!
                  </motion.h3>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/70 text-xs mb-2 pl-11"
                >
                  Най-луксозният гейминг турнир във Велинград
                </motion.p>

                {/* Tournament details */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-between text-xs text-white/60 mb-2 pl-11"
                >
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>15 Сеп</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    <span>32</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-3 h-3 mr-1 text-primary-green" />
                    <span className="text-primary-green font-semibold">1000лв</span>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  onClick={handleOpenPopup}
                  className="w-full bg-gradient-primary text-white py-2 px-3 rounded-lg font-semibold text-xs hover:shadow-lg hover:shadow-primary-green/20 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{
                      backgroundSize: '200% 100%'
                    }}
                  />
                  <span className="relative">Запиши се сега!</span>
                </motion.button>
              </div>

              {/* Pulse animation border */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 border border-primary-green/30 rounded-2xl pointer-events-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tournament Registration Popup */}
      <TournamentPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  )
}

export default TournamentNotification