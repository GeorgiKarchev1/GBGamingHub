'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

const Tournaments = () => {
  return (
    <section id="tournaments" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-black to-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8 leading-tight">
              Очаквайте скоро
            </h1>
            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed max-w-3xl mx-auto">
              Подготвяме най-страхотните гейминг турнири за вас. Скоро ще обявим първите състезания с невероятни награди!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Tournaments