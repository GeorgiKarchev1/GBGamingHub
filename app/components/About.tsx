'use client'

import { motion } from 'framer-motion'
import { Gamepad2, Trophy, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Gamepad2 size={48} />,
      title: 'Премиум оборудване',
      description: 'Мощни геймърски компютри, най-нови конзоли и професионални периферии за върхово изживяване.',
    },
    {
      icon: <Trophy size={48} />,
      title: 'Луксозна обстановка',
      description: 'Елегантни пространства, създадени за комфорт и производителност, с премиум седалки и ambient осветление.',
    },
    {
      icon: <Zap size={48} />,
      title: 'Високоскоростен гейминг',
      description: 'Свръхбърз интернет и топ хардуер за игра без лаг – всеки път.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Добре дошли в GB Gaming Hub</h2>
          <p className="section-subtitle">Където луксът среща гейминг съвършенството</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-primary-black p-8 rounded-3xl border border-primary-green/10 text-center group hover:border-primary-green/30 transition-all duration-300 relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Top border animation */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
              
              <motion.div
                className="text-primary-green mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="font-orbitron text-xl font-bold text-primary-green mb-4">
                {feature.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About