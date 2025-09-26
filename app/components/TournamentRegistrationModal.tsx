'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Trophy, Calendar, Clock, Users, ChevronDown } from 'lucide-react'

interface Tournament {
  id: number
  title: string
  game: string
  date: string
  time: string
  participants: string
  prize: string
  status: 'open' | 'closed' | 'upcoming'
  description: string
  image: string
}

interface TournamentRegistrationModalProps {
  tournament: Tournament
  isOpen: boolean
  onClose: () => void
}

const TournamentRegistrationModal = ({ tournament, isOpen, onClose }: TournamentRegistrationModalProps) => {
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    phone: '',
    selectedGame: tournament.game
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isGameDropdownOpen, setIsGameDropdownOpen] = useState(false)

  const games = [
    'Counter-Strike 2',
    'FIFA 24',
    'Valorant',
    'League of Legends',
    'Rocket League',
    'Call of Duty'
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    onClose()

    // Here you would typically send the data to your backend
    console.log('Tournament registration:', { tournament: tournament.id, ...formData })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleGameSelect = (game: string) => {
    setFormData(prev => ({ ...prev, selectedGame: game }))
    setIsGameDropdownOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg bg-gradient-to-br from-dark-gray to-primary-black border border-primary-green/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="text-center pt-8 pb-6 px-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-[0_0_30px_rgba(70,184,114,0.3)]">
                <Trophy className="w-10 h-10 text-white" />
              </div>

              <h2 className="font-orbitron text-3xl font-bold text-white mb-3">
                Запиши се за турнира!
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Присъедини се към най-лукозното гейминг състезание
              </p>

              {/* Tournament Info */}
              <div className="bg-primary-black/50 border border-primary-green/20 rounded-2xl p-6 mb-6">
                <h3 className="font-orbitron text-xl font-bold text-primary-green mb-4">
                  {tournament.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary-green" />
                    <span className="text-gray-300">{tournament.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary-green" />
                    <span className="text-gray-300">{tournament.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary-green" />
                    <span className="text-gray-300">{tournament.participants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary-green" />
                    <span className="text-primary-green font-bold">{tournament.prize}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-6">
              {/* Nickname */}
              <div>
                <input
                  type="text"
                  name="nickname"
                  placeholder="Nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-primary-black/60 border border-primary-green/30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email адрес"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-primary-black/60 border border-primary-green/30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-primary-black/60 border border-primary-green/30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 transition-all"
                />
              </div>

              {/* Game Selection */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsGameDropdownOpen(!isGameDropdownOpen)}
                  className="w-full bg-primary-black/60 border border-primary-green/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 transition-all flex items-center justify-between"
                >
                  <span className={formData.selectedGame ? 'text-white' : 'text-gray-400'}>
                    {formData.selectedGame || 'Избери игра'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isGameDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isGameDropdownOpen && (
                    <motion.div
                      className="absolute top-full left-0 right-0 mt-2 bg-primary-black border border-primary-green/30 rounded-xl shadow-lg z-10 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {games.map((game) => (
                        <button
                          key={game}
                          type="button"
                          onClick={() => handleGameSelect(game)}
                          className="w-full px-4 py-3 text-left text-white hover:bg-primary-green/20 transition-colors first:rounded-t-xl last:rounded-b-xl"
                        >
                          {game}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-primary hover:shadow-[0_0_20px_rgba(70,184,114,0.3)] text-white'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Регистрирам...
                  </>
                ) : (
                  'РЕГИСТРИРАЙ СЕ СЕГА'
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TournamentRegistrationModal