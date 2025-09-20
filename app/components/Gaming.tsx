'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

const Gaming = () => {
  const router = useRouter()

  const showcaseItems = [
    { src: '/images/image00002.jpeg', alt: 'Gaming photo 1', span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2' },
    { src: '/images/image00003.jpeg', alt: 'Gaming photo 2', span: 'col-span-1 row-span-1' },
    { src: '/images/image00004.jpeg', alt: 'Gaming photo 3', span: 'col-span-1 row-span-1' },
    { src: '/images/image00005.jpeg', alt: 'Gaming photo 4', span: 'col-span-1 row-span-1' },
    { src: '/images/image00006.jpeg', alt: 'Gaming photo 5', span: 'col-span-1 row-span-1' },
    { src: '/images/image00007.jpeg', alt: 'Gaming photo 6', span: 'col-span-1 row-span-1' },
    { src: '/images/image00008.jpeg', alt: 'Gaming photo 7', span: 'col-span-1 row-span-1' },
    { src: '/images/jokata.jpg', alt: 'Gaming photo 8', span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2' },
    { src: '/images/monsters.jpg', alt: 'Gaming photo 9', span: 'col-span-1 row-span-1' },
    { src: '/images/chips.jpg', alt: 'Gaming photo 10', span: 'col-span-1 row-span-1', isChillZone: true },
  ]

  const handleChillZoneClick = () => {
    router.push('/chill-zone')
  }

  return (
    <section id="gaming" className="py-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Гейминг изживяване</h2>
          <p className="section-subtitle">Потопи се в нашата премиум гейминг среда</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[200px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.span} rounded-2xl overflow-hidden relative group cursor-pointer border border-primary-green/20 hover:border-primary-green/60 transition-all duration-300`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              onClick={item.isChillZone ? handleChillZoneClick : undefined}
            >
              <div className="w-full h-full bg-gradient-dark relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={`object-cover ${index === 0 ? 'object-top' : 'object-center'} scale-105 group-hover:scale-110 transition-transform duration-500`}
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {item.isChillZone && (
                  <>
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        <h3 className="font-orbitron text-xl md:text-3xl font-bold text-white mb-2 md:mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
                          Chill Zone
                        </h3>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-2 md:mb-4">
                          <p className="text-white font-medium text-sm md:text-base" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
                            Tap to explore
                          </p>
                          <motion.div
                            className="bg-gradient-primary rounded-full p-1.5 md:p-2 shadow-lg"
                            animate={{
                              x: [0, 6, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <ArrowRight
                              size={16}
                              className="text-white md:w-5 md:h-5"
                            />
                          </motion.div>
                        </div>
                        <div className="block md:hidden">
                          <motion.div
                            className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 0.8 }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Gaming