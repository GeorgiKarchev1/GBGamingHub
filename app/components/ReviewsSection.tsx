'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ExternalLink } from 'lucide-react'

interface Review {
  id: string
  name: string
  avatar: string
  rating: number
  date: string
  text: string
  isNew?: boolean
}

const ReviewsSection = () => {
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Redmi 13c',
      avatar: 'R',
      rating: 5,
      date: 'преди месец',
      text: 'Mnogo dobro obslujvane mnogo mi hatesa i e na mnogo dostupni ceni'
    },
    {
      id: '2',
      name: 'Асен Тодоров',
      avatar: 'A',
      rating: 5,
      date: 'преди месец',
      text: 'Много добро място и добра атмосфера',
      isNew: true
    },
    {
      id: '3',
      name: 'Вълчан Вълчанов',
      avatar: 'B',
      rating: 5,
      date: 'преди 3 седмици',
      text: 'Много приятно място за геймъри! Клубът е добре организиран, с модерна техника и комфортна обстановка. Всичко е чисто, подредено и се усеща, че е направено с любов.'
    },
    {
      id: '4',
      name: 'martin uzunov',
      avatar: 'm',
      rating: 5,
      date: 'преди 3 седмици',
      text: 'The best place in Velingrad',
      isNew: true
    },
    {
      id: '5',
      name: 'Philip Abadjiev',
      avatar: 'P',
      rating: 5,
      date: 'преди 3 месеца',
      text: 'Готино място което събира хората по интересен начин'
    },
    {
      id: '6',
      name: 'Angel Malchev',
      avatar: 'A',
      rating: 5,
      date: 'преди 3 месеца',
      text: 'Най доброто нещо което са правили някога във Велинград. Евала на персонала всичко топ всичко 6++. 10/10 препоръчвам на всеки от всяка възраст.'
    },

  ]

  const getAvatarColor = (letter: string) => {
    const colors = [
      'bg-red-500',
      'bg-blue-500', 
      'bg-green-500',
      'bg-purple-500',
      'bg-orange-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-teal-500'
    ]
    const index = letter.charCodeAt(0) % colors.length
    return colors[index]
  }

  return (
    <section id="reviews" className="py-24 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Какво казват хората?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Открийте защо нашите клиенти обичат GB Gaming Hub и какво ги прави да се връщат отново и отново.
          </p>
          
          {/* Overall Rating */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">5.0</div>
              <div className="text-white/60 text-sm">7 отзива</div>
            </div>
            <motion.a
              href="https://www.google.com/maps/place/GbGaming+Hub/@42.0276261,23.9876954,17z/data=!4m14!1m7!3m6!1s0x14ab65debd1ef9a9:0x694bc20a16f1296e!2sGbGaming+Hub!8m2!3d42.0276261!4d23.9876954!16s%2Fg%2F11mdmsxkq_!3m5!1s0x14ab65debd1ef9a9:0x694bc20a16f1296e!8m2!3d42.0276261!4d23.9876954!16s%2Fg%2F11mdmsxkq_?hl=en_GB&entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-green hover:text-accent-green transition-colors flex items-center gap-2 text-sm bg-primary-green/10 px-4 py-2 rounded-full border border-primary-green/30"
              whileHover={{ scale: 1.05 }}
            >
              Виж всички отзиви в Google
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col group-hover:border-primary-green/30 group-hover:shadow-xl group-hover:shadow-primary-green/10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${getAvatarColor(review.avatar)} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                      {review.isNew && (
                        <motion.span 
                          className="bg-primary-green text-primary-black text-xs px-3 py-1 rounded-full font-medium"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          НОВО
                        </motion.span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-white/60 text-sm">{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="flex-1 flex flex-col">
                  <div className="relative mb-4">
                    <Quote size={24} className="text-primary-green/30 absolute -top-2 -left-2" />
                    <p className="text-white/90 text-base leading-relaxed pl-6">
                      {review.text}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 bg-gradient-to-r from-primary-green to-accent-green rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
            Готов ли си да се присъединиш към нас?
          </h3>
          <p className="text-white/80 text-lg mb-8">
            Изпитай луксозен гейминг както никога досега в GB Gaming Hub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/reserve"
              className="px-8 py-4 bg-primary-green text-primary-black font-bold rounded-full hover:bg-accent-green transition-colors shadow-lg hover:shadow-xl hover:shadow-primary-green/25 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              РЕЗЕРВИРАЙ СЕГА
            </motion.a>
            <motion.a
              href="#pricing"
              className="px-8 py-4 border-2 border-primary-green text-primary-green font-bold rounded-full hover:bg-primary-green hover:text-primary-black transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              ВИЖ ЦЕНИ
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewsSection
