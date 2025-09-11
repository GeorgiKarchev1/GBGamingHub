'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type BookingPayload = {
  fullName: string
  phone: string
  date: string
  time: string
  duration: string
  platform: 'PC' | 'PS5' | 'Racing' | 'Other'
  notes?: string
}

const ReservePage = () => {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus(null)
    setSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const payload: BookingPayload = {
      fullName: String(formData.get('fullName') || ''),
      phone: String(formData.get('phone') || ''),
      date: String(formData.get('date') || ''),
      time: String(formData.get('time') || ''),
      duration: String(formData.get('duration') || ''),
      platform: (String(formData.get('platform') || 'PC') as BookingPayload['platform']),
      notes: String(formData.get('notes') || ''),
    }

    if (!payload.fullName || !payload.phone || !payload.date || !payload.time) {
      setStatus({ ok: false, message: 'Попълни задължителните полета.' })
      setSubmitting(false)
      return
    }

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus({ ok: false, message: data?.message || 'Грешка при изпращане.' })
      } else {
        if (data.message === 'Telegram service not configured.') {
          setStatus({ ok: true, message: 'Заявката е записана! Ще се свържем скоро (локално тестване).' })
        } else {
          setStatus({ ok: true, message: 'Заявката е изпратена успешно! Ще се свържем скоро.' })
        }
        if (e.currentTarget) {
          e.currentTarget.reset()
        }
      }
    } catch (error) {
      console.error('Booking error:', error)
      setStatus({ ok: false, message: 'Грешка в мрежата. Опитай отново.' })
    } finally {
      setSubmitting(false)
    }
  }

  const mailtoHref = () => {
    const subject = encodeURIComponent('Резервация - GB Gaming Hub')
    const body = encodeURIComponent('Моля, въведете: Име, Телефон, Дата, Час, Продължителност, Платформа, Бележки')
    return `mailto:info@example.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="min-h-screen bg-primary-black py-20">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h1
          className="section-title mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Резервирай сесия
        </motion.h1>
        <p className="section-subtitle mb-10">Попълни формата и ние ще потвърдим резервацията.</p>

        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-8 bg-gradient-to-b from-dark-gray/90 to-primary-black/60 rounded-3xl p-8 border border-primary-green/20 shadow-[0_20px_80px_rgba(16,185,129,0.15)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-white/90 font-medium">Име и фамилия*</label>
              <input 
                name="fullName" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:border-primary-green/50 focus:bg-white/10 focus:outline-none transition-all duration-200" 
                placeholder="Иван Иванов" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-white/90 font-medium">Телефон*</label>
              <input 
                name="phone" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:border-primary-green/50 focus:bg-white/10 focus:outline-none transition-all duration-200" 
                placeholder="08XXXXXXXX" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-white/90 font-medium">Дата*</label>
              <input 
                type="date" 
                name="date" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary-green/50 focus:bg-white/10 focus:outline-none transition-all duration-200 [color-scheme:dark]" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-white/90 font-medium">Час*</label>
              <input 
                type="time" 
                name="time" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary-green/50 focus:bg-white/10 focus:outline-none transition-all duration-200 [color-scheme:dark]" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-white/90 font-medium">Продължителност</label>
              <div className="relative">
                <select 
                  name="duration" 
                  className="w-full px-4 py-3 pr-10 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary-green/50 focus:bg-white/10 focus:outline-none transition-all duration-200 appearance-none"
                >
                  <option value="1 час">1 час</option>
                  <option value="2 часа">2 часа</option>
                  <option value="3 часа">3 часа</option>
                  <option value="4 часа">4 часа</option>
                  <option value="5 часа">5 часа</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-white/90 font-medium">Платформа</label>
              <div className="relative">
                <select 
                  name="platform" 
                  className="w-full px-4 py-3 pr-10 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary-green/50 focus:bg-white/10 focus:outline-none transition-all duration-200 appearance-none" 
                  defaultValue="PC"
                >
                  <option value="PC">PC</option>
                  <option value="PS5">PlayStation 5</option>
                  <option value="Racing">Racing Симулатор</option>
                  <option value="Other">Друго</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-white/90 font-medium">Бележки</label>
              <input 
                name="notes" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:border-primary-green/50 focus:bg-white/10 focus:outline-none transition-all duration-200" 
                placeholder="Брой хора, предпочитания, ..." 
              />
            </div>
          </div>

          {status && (
            <div className={`p-4 rounded-xl ${status.ok ? 'bg-primary-green/10 text-primary-green border border-primary-green/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'} text-sm`}>
              {status.message}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button 
              disabled={submitting} 
              className="btn btn-primary px-12 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Изпращане...' : 'Изпрати заявка'}
            </button>
            <a 
              href={mailtoHref()} 
              className="btn btn-secondary px-12 py-4 text-lg font-semibold"
            >
              или пиши на имейл
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default ReservePage


