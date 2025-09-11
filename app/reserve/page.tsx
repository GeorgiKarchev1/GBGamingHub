'use client'

import { useState } from 'react'
import SelectField from '../components/SelectField'
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

  // Controlled fields for consistent behavior across environments
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [duration, setDuration] = useState('1 час')
  const [platform, setPlatform] = useState<BookingPayload['platform']>('PC')
  const [notes, setNotes] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus(null)
    setSubmitting(true)

    const payload: BookingPayload = {
      fullName,
      phone,
      date,
      time,
      duration,
      platform,
      notes,
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
        setFullName('')
        setPhone('')
        setDate('')
        setTime('')
        setDuration('1 час')
        setPlatform('PC')
        setNotes('')
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:border-primary-green/50 focus:bg-white/10 focus:outline-none transition-all duration-200" 
                placeholder="Иван Иванов" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-white/90 font-medium">Телефон*</label>
              <input 
                name="phone" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary-green/50 focus:bg-white/10 focus:outline-none transition-all duration-200 [color-scheme:dark]" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-white/90 font-medium">Час*</label>
              <input 
                type="time" 
                name="time" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary-green/50 focus:bg-white/10 focus:outline-none transition-all duration-200 [color-scheme:dark]" 
                required 
              />
            </div>
            <SelectField
              label="Продължителност"
              name="duration"
              value={duration}
              onChange={setDuration}
              options={[
                { label: '1 час', value: '1 час' },
                { label: '2 часа', value: '2 часа' },
                { label: '3 часа', value: '3 часа' },
                { label: '4 часа', value: '4 часа' },
                { label: '5 часа', value: '5 часа' },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Платформа"
              name="platform"
              value={platform}
              onChange={(val) => setPlatform(val as BookingPayload['platform'])}
              options={[
                { label: 'PC', value: 'PC' },
                { label: 'PlayStation 5', value: 'PS5' },
                { label: 'Racing Симулатор', value: 'Racing' },
                { label: 'Друго', value: 'Other' },
              ]}
            />
            <div className="space-y-2">
              <label className="block text-white/90 font-medium">Бележки</label>
              <input 
                name="notes" 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
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


