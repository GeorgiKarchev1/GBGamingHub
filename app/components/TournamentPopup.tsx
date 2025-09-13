'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Trophy, Calendar, Users, Zap } from 'lucide-react'
import { useState } from 'react'

interface TournamentPopupProps {
  isOpen: boolean
  onClose: () => void
}

const TournamentPopup = ({ isOpen, onClose }: TournamentPopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    game: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/tournament', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form after short delay to show success state
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', game: '' })
          setSubmitStatus('idle')
          onClose()
        }, 2000)
      } else {
        setSubmitStatus('error')
        console.error('Registration failed:', data.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Registration error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Popup Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-dark border border-primary-green/20 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Floating background elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-primary rounded-full opacity-10 blur-lg" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-primary rounded-full opacity-10 blur-lg" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-3 text-white/60 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 z-10 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4"
                >
                  <Trophy className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-orbitron text-2xl font-bold text-white mb-2"
                >
                  Запиши се за турнира!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/70 text-sm"
                >
                  Присъедини се към най-луксозното гейминг състезание
                </motion.p>
              </div>


              {/* Registration Form */}
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nickname"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary-green focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email адрес"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary-green focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary-green focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="relative">
                  <select
                    name="game"
                    value={formData.game}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-10 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-green focus:bg-white/10 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-primary-black">Избери игра</option>
                    <option value="cs2" className="bg-primary-black">Counter-Strike 2</option>
                    <option value="valorant" className="bg-primary-black">Valorant</option>
                    <option value="lol" className="bg-primary-black">League of Legends</option>
                    <option value="fifa" className="bg-primary-black">FIFA 24</option>
                    <option value="rocket-league" className="bg-primary-black">Rocket League</option>
                  </select>
                  {/* Dropdown arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>


                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className={`w-full btn mt-6 relative overflow-hidden ${
                    submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-600'
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-600'
                      : 'btn-primary'
                  }`}
                  whileHover={{ scale: submitStatus === 'success' ? 1 : 1.02 }}
                  whileTap={{ scale: submitStatus === 'success' ? 1 : 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                        />
                        Регистрация...
                      </motion.div>
                    ) : submitStatus === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                          className="w-5 h-5 mr-2"
                        >
                          ✓
                        </motion.div>
                        Успешна регистрация!
                      </motion.div>
                    ) : submitStatus === 'error' ? (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        ⚠️ Възникна грешка. Опитай отново.
                      </motion.div>
                    ) : (
                      <motion.span
                        key="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Регистрирай се сега
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.form>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TournamentPopup