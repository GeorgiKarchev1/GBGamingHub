'use client'

import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="py-20 bg-primary-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-green/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="font-orbitron text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Готов ли си за игра?
        </motion.h2>
        
        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Изпитай луксозен гейминг както никога досега в GB Gaming Hub
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.button
            className="btn btn-primary text-lg px-12 py-5 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Резервирай сега</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-green to-primary-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          
          <motion.a
            href="#pricing"
            className="btn btn-secondary text-lg px-12 py-5 relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Виж цени</span>
          </motion.a>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-5 animate-float" />
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-primary rounded-full opacity-5 animate-float" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  )
}

export default CTA