'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const ChillZonePage = () => {
  const router = useRouter()

  const chillZoneImages = [
    { src: '/images/chipsbarakov.jpg', alt: 'Premium snacks and chips selection', span: 'col-span-2 row-span-2' },
    { src: '/images/ketotortabarakov.jpg', alt: 'Keto cake slice', span: 'col-span-1 row-span-1' },
    { src: '/images/shakebarakov1.jpg', alt: 'Fresh berry shake', span: 'col-span-1 row-span-1' },
    { src: '/images/shakebarakov.jpg', alt: 'Protein shake selection', span: 'col-span-1 row-span-2' },
    { src: '/images/shokoladbarakov.jpg', alt: 'Premium chocolate bars', span: 'col-span-1 row-span-1' },
    { src: '/images/tortibarakov.jpg', alt: 'Fresh white chocolate cakes', span: 'col-span-2 row-span-1' },
    { src: '/images/tortilabarakov.jpg', alt: 'Grilled chicken tortilla wrap', span: 'col-span-1 row-span-1' },
    { src: '/images/tortilibarakov.jpg', alt: 'Fresh tortilla sandwiches', span: 'col-span-1 row-span-1' },
    { src: '/images/tortioshtebarakov.jpg', alt: 'Keto cake with berries', span: 'col-span-1 row-span-1' },
    { src: '/images/GBNAPITKI.png', alt: 'Gaming energy drinks and beverages', span: 'col-span-1 row-span-1' },
    { src: '/images/onlinegb.png', alt: 'Online gaming area with snack station', span: 'col-span-1 row-span-1' },
  ]


  return (
    <main className="min-h-screen bg-primary-black text-white">
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-green/10 via-transparent to-primary-green/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-primary-green hover:text-accent-green transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={20} />
              Обратно към галерията
            </button>

            <div className="text-center mb-16">
              <motion.h1
                className="font-orbitron text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Chill Zone
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Добре дошли в нашата специална зона за релакс! Тук можете да се отпуснете, да се насладите на вкусни закуски и да прекарате време с приятели в спокойна атмосфера.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px] mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {chillZoneImages.map((image, index) => (
              <motion.div
                key={index}
                className={`${image.span} rounded-2xl overflow-hidden relative group border border-primary-green/20 hover:border-primary-green/60 transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-full h-full bg-gradient-dark relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium drop-shadow-lg">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-gradient-dark p-10 rounded-3xl border border-primary-green/30 max-w-5xl mx-auto">
              <h2 className="font-orbitron text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Готови за релакс?
              </h2>
              <p className="text-white/90 mb-8 text-xl leading-relaxed max-w-3xl mx-auto">
                Chill Zone-ът ни предлага перфектната атмосфера за почивка между интензивните гейминг сесии.
                Насладете се на качествени закуски, освежаващи напитки и приятна компания в нашето уютно пространство.
              </p>
              <motion.button
                className="btn btn-primary text-lg px-10 py-5"
                onClick={() => router.push('/reserve')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Резервирайте сега
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default ChillZonePage