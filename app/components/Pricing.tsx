'use client'

import { motion } from 'framer-motion'
import { Wallet, ShoppingBag, Gamepad2, Car, Joystick, CupSoda } from 'lucide-react'

type DualPrice = { lv: string; eur: string }

const priceRow = (label: string, price: DualPrice, note?: string) => (
  <div className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-primary-green/5 transition-colors">
    <div className="text-white/90 text-sm">
      <span className="font-medium">{label}</span>
      {note && <span className="text-primary-green/70 text-xs ml-2 font-normal">({note})</span>}
    </div>
    <div className="flex items-center gap-2 font-orbitron text-sm">
      <span className="text-white/70">{price.lv} лв</span>
      <span className="text-primary-green font-semibold">{price.eur} €</span>
    </div>
  </div>
)

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Ценоразпис</h2>
          <p className="section-subtitle">Актуални цени за игра и мърчандайз</p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Gaming Card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-primary-black/50 to-primary-black/30 backdrop-blur-sm rounded-2xl border border-primary-green/20 p-6 shadow-[0_8px_32px_rgba(16,185,129,0.1)] hover:shadow-[0_12px_48px_rgba(16,185,129,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary-green/10">
                  <Wallet className="text-primary-green" size={24} />
                </div>
                <h3 className="font-orbitron text-white text-xl font-semibold">Игри</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Gamepad2 className="text-primary-green" size={18} />
                    <h4 className="text-white font-medium">Компютър</h4>
                  </div>
                  <div className="space-y-2">
                    {priceRow('1 час', { lv: '5', eur: '2.56' })}
                    {priceRow('2 часа', { lv: '8', eur: '4.09' })}
                    {priceRow('3 часа', { lv: '12', eur: '6.14' })}
                    {priceRow('4 часа', { lv: '18', eur: '9.20' })}
                    {priceRow('5 часа', { lv: '22', eur: '11.25' })}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Joystick className="text-primary-green" size={18} />
                    <h4 className="text-white font-medium">PlayStation 5</h4>
                  </div>
                  <div className="space-y-2">
                    {priceRow('1 час', { lv: '8', eur: '4.09' })}
                    {priceRow('2 часа', { lv: '14', eur: '7.16' })}
                    {priceRow('3 часа', { lv: '18', eur: '9.20' })}
                    {priceRow('4 часа', { lv: '22', eur: '11.25' })}
                    {priceRow('5 часа', { lv: '26', eur: '13.29' })}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-primary-green/15">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="text-primary-green" size={18} />
                    <h4 className="text-white font-medium">Racing Симулатор</h4>
                  </div>
                  <div className="space-y-2">
                    {priceRow('1 час', { lv: '10', eur: '5.11' })}
                    {priceRow('2 часа', { lv: '18', eur: '9.20' })}
                    {priceRow('3 часа', { lv: '26', eur: '13.29' })}
                    {priceRow('4 часа', { lv: '34', eur: '17.38' })}
                    {priceRow('5 часа', { lv: '40', eur: '20.45' })}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="mb-3">
                    <h4 className="text-white font-medium">Други игри</h4>
                  </div>
                  <div className="space-y-2">
                    {priceRow('Джага', { lv: '1', eur: '0.51' }, 'на игра')}
                    {priceRow('Аркадна игра', { lv: '1', eur: '0.51' }, 'на игра')}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Drinks Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-primary-black/50 to-primary-black/30 backdrop-blur-sm rounded-2xl border border-primary-green/20 p-6 shadow-[0_8px_32px_rgba(16,185,129,0.1)] hover:shadow-[0_12px_48px_rgba(16,185,129,0.15)] transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary-green/10">
                  <CupSoda className="text-primary-green" size={24} />
                </div>
                <h3 className="font-orbitron text-white text-xl font-semibold">Напитки</h3>
              </div>
              
              <div className="space-y-2">
                {priceRow('Протеинов шейк', { lv: '5', eur: '2.56' })}
                {priceRow('Плодно смути', { lv: '5', eur: '2.56' })}
                {priceRow('Протеиново смути', { lv: '7', eur: '3.58' })}
                {priceRow('Домашна лимонада', { lv: '5', eur: '2.56' })}
                {priceRow('Фрапе', { lv: '5', eur: '2.56' })}
                {priceRow('Добавка ядково мляко', { lv: '2', eur: '1.02' })}
              </div>
            </div>
          </motion.div>

          {/* Merch Card - Full Width */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary-black/50 to-primary-black/30 backdrop-blur-sm rounded-2xl border border-primary-green/20 p-6 shadow-[0_8px_32px_rgba(16,185,129,0.1)] hover:shadow-[0_12px_48px_rgba(16,185,129,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary-green/10">
                  <ShoppingBag className="text-primary-green" size={24} />
                </div>
                <h3 className="font-orbitron text-white text-xl font-semibold">Мърчандайз</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-2">
                  {priceRow('Суитшърт', { lv: '60', eur: '30.68' })}
                  {priceRow('Анцуг', { lv: '50', eur: '25.56' })}
                  {priceRow('Тениска', { lv: '30', eur: '15.34' })}
                  {priceRow('Шапка', { lv: '20', eur: '10.23' })}
                  {priceRow('Чаша', { lv: '20', eur: '10.23' })}
                  {priceRow('Мауспад', { lv: '20', eur: '10.23' })}
                </div>
                
                <div className="md:col-span-1 lg:col-span-2 space-y-4">
                  <div className="rounded-xl p-4 border border-primary-green/25 bg-gradient-to-r from-primary-green/5 to-primary-green/10">
                    <p className="text-white/90 font-medium mb-3">🎁 При поръчка на цял сет</p>
                    <div className="flex items-center justify-between gap-4">
                      <span className="line-through text-red-400/80 font-orbitron text-sm">200 лв • 102.26 €</span>
                      <span className="font-orbitron text-primary-green text-2xl font-bold">170 лв • 86.92 €</span>
                    </div>
                  </div>
                  
                  <div className="rounded-xl p-4 border border-primary-green/15 bg-primary-black/20">
                    <p className="text-white font-medium mb-3">Безплатни подаръци:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-white/80">
                      <span className="flex items-center gap-1">• Химикалка</span>
                      <span className="flex items-center gap-1">• Ключодържател</span>
                      <span className="flex items-center gap-1">• Лента за бадж</span>
                      <span className="flex items-center gap-1">• Отварачка</span>
                      <span className="flex items-center gap-1">• Стикери</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing


