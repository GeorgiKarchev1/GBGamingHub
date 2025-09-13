'use client'

import { motion } from 'framer-motion'
import TournamentNotification from './TournamentNotification'

const Hero = () => {

  const FloatingElement = ({ delay, size, position }: { delay: number, size: string, position: string }) => (
    <motion.div
      className={`absolute ${size} bg-gradient-primary rounded-full opacity-10 ${position}`}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
      }}
    />
  )

  return (
    <section id="home" className="min-h-screen bg-gradient-dark flex items-center justify-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-primary-green/10 via-transparent to-primary-black/80" />
      
      {/* Floating elements */}
      <FloatingElement delay={0} size="w-24 h-24" position="top-1/4 left-1/4" />
      <FloatingElement delay={2} size="w-16 h-16" position="top-3/5 right-1/4" />
      <FloatingElement delay={4} size="w-20 h-20" position="bottom-1/4 left-1/5" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          className="font-orbitron font-black text-6xl md:text-8xl mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="block text-white drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Луксозно
          </motion.span>
          <motion.span 
            className="block bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            гейминг
          </motion.span>
          <motion.span 
            className="block text-white text-5xl md:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            изживяване
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Премиум гейминг дестинация в сърцето на Велинград
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="/reserve"
            className="btn btn-primary text-lg px-10 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Резервирай сесия
          </motion.a>
          <motion.a
            href="#gaming"
            className="btn btn-secondary text-lg px-10 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Разгледай залата
          </motion.a>
        </motion.div>
        
        {/* Helper line */}
        <motion.p
          className="mt-6 text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Висок FPS • Бърз интернет • Комфортна обстановка
        </motion.p>
      </div>

      {/* Tournament Notification */}
      <TournamentNotification />
    </section>
  )
}

export default Hero