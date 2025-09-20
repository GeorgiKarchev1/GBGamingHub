'use client'

import { motion } from 'framer-motion'
import { Monitor, Mouse, Keyboard, Cpu, Zap, HardDrive } from 'lucide-react'

const GamingSpecs = () => {
  const specs = [
    {
      icon: Mouse,
      category: 'Мишки',
      item: 'Razer DeathAdder v2',
      description: 'Прецизност и скорост за всеки геймър',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Keyboard,
      category: 'Клавиатури',
      item: 'Razer BlackWidow v4 X',
      description: 'Механични клавиши за максимална реакция',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Monitor,
      category: 'Монитори',
      item: 'Philips 280Hz Curved',
      description: 'Извит дисплей за пълно потапяне',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Cpu,
      category: 'Процесор',
      item: 'AMD Ryzen 7 7700',
      description: 'Мощност от ново поколение',
      color: 'from-red-400 to-orange-500'
    },
    {
      icon: Zap,
      category: 'Видеокарта',
      item: 'NVIDIA GeForce RTX 4070',
      description: 'Ray tracing и DLSS 3.0',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      icon: HardDrive,
      category: 'Памет',
      item: '32GB DDR5 RAM',
      description: 'Мултитаскинг без компромиси',
      color: 'from-indigo-400 to-violet-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-black via-dark-gray/50 to-primary-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-green/5 via-transparent to-primary-green/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Премиум оборудване
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Всяка гейминг станция е оборудвана с най-новите технологии за непревзойдено игрово изживяване
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className="bg-gradient-dark p-8 rounded-2xl border border-white/10 hover:border-primary-green/50 transition-all duration-500 group-hover:transform group-hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${spec.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <spec.icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="font-orbitron text-lg font-bold text-primary-green mb-2">
                    {spec.category}
                  </h3>

                  <h4 className="text-xl font-bold text-white mb-3">
                    {spec.item}
                  </h4>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary-green/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-gradient-dark p-8 rounded-2xl border border-primary-green/30 max-w-4xl mx-auto">
            <h3 className="font-orbitron text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Професионално гейминг изживяване
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Всяко оборудване е внимателно подбрано за да осигури максимални перформанси и комфорт.
              Насладете се на най-новите игри с най-високи настройки и без никакви компромиси.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GamingSpecs