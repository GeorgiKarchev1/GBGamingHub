'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Gaming = () => {
  const showcaseItems = [
    { src: '/images/image00002.jpeg', alt: 'Gaming photo 1', span: 'col-span-2 row-span-2' },
    { src: '/images/image00003.jpeg', alt: 'Gaming photo 2', span: 'col-span-1 row-span-1' },
    { src: '/images/image00004.jpeg', alt: 'Gaming photo 3', span: 'col-span-1 row-span-1' },
    { src: '/images/image00005.jpeg', alt: 'Gaming photo 4', span: 'col-span-1 row-span-1' },
    { src: '/images/image00006.jpeg', alt: 'Gaming photo 5', span: 'col-span-1 row-span-1' },
    { src: '/images/image00007.jpeg', alt: 'Gaming photo 6', span: 'col-span-1 row-span-1' },
    { src: '/images/image00008.jpeg', alt: 'Gaming photo 7', span: 'col-span-1 row-span-1' },
    { src: '/images/jokata.jpg', alt: 'Gaming photo 8', span: 'col-span-2 row-span-2' },
    { src: '/images/monsters.jpg', alt: 'Gaming photo 9', span: 'col-span-1 row-span-1' },
    { src: '/images/chips.jpg', alt: 'Gaming photo 10', span: 'col-span-1 row-span-1' },
  ]

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
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
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
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Gaming