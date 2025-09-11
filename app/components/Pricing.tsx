'use client'

import { motion } from 'framer-motion'
import { Wallet, ShoppingBag, Gamepad2, Car, Joystick } from 'lucide-react'

const priceRow = (label: string, value: string) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-white/85">{label}</span>
    <span className="font-orbitron text-primary-green font-semibold">{value}</span>
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
        {/* Minimal, borderless layout with strong dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gaming table */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="text-primary-green" size={22} />
              <h3 className="font-orbitron text-white text-2xl">Игри</h3>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-4 border-b md:border-b-0 md:border-r border-primary-green/15">
                  <div className="flex items-center gap-2 mb-3">
                    <Gamepad2 className="text-primary-green" size={18} />
                    <h4 className="text-white/90 font-semibold">Компютър</h4>
                  </div>
                  <div className="divide-y divide-primary-green/10">
                    {priceRow('1 час', '5 лв')}
                    {priceRow('2 часа', '8 лв')}
                    {priceRow('3 часа', '12 лв')}
                    {priceRow('4 часа', '18 лв')}
                    {priceRow('5 часа', '22 лв')}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Joystick className="text-primary-green" size={18} />
                    <h4 className="text-white/90 font-semibold">PlayStation 5</h4>
                  </div>
                  <div className="divide-y divide-primary-green/10">
                    {priceRow('1 час', '8 лв')}
                    {priceRow('2 часа', '14 лв')}
                    {priceRow('3 часа', '18 лв')}
                    {priceRow('4 часа', '22 лв')}
                    {priceRow('5 часа', '26 лв')}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary-green/15">
                <div className="p-4 border-b md:border-b-0 md:border-r border-primary-green/15">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="text-primary-green" size={18} />
                    <h4 className="text-white/90 font-semibold">Racing Симулатор</h4>
                  </div>
                  <div className="divide-y divide-primary-green/10">
                    {priceRow('1 час', '10 лв')}
                    {priceRow('2 часа', '18 лв')}
                    {priceRow('3 часа', '26 лв')}
                    {priceRow('4 часа', '34 лв')}
                    {priceRow('5 часа', '40 лв')}
                  </div>
                </div>
                <div className="p-4">
                  <div className="divide-y divide-primary-green/10">
                    {priceRow('Джага', '2 лв на игра')}
                    {priceRow('Аркадна игра', '1 лв на игра')}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Merch table */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="text-primary-green" size={22} />
              <h3 className="font-orbitron text-white text-2xl">Мърч</h3>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-4 border-b md:border-b-0 md:border-r border-primary-green/15">
                  <div className="divide-y divide-primary-green/10">
                    {priceRow('Суитшърт', '60 лв')}
                    {priceRow('Анцуг', '50 лв')}
                    {priceRow('Тениска', '30 лв')}
                    {priceRow('Шапка', '20 лв')}
                    {priceRow('Чаша', '20 лв')}
                    {priceRow('Мауспад', '20 лв')}
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="rounded-xl p-4 border border-primary-green/25 bg-primary-black/40">
                    <p className="text-white/85 mb-1">При поръчка на цял сет</p>
                    <div className="flex items-baseline gap-3">
                      <span className="line-through text-red-400 font-orbitron">200 лв</span>
                      <span className="text-2xl font-orbitron text-primary-green">170 лв</span>
                    </div>
                  </div>
                  <div className="rounded-xl p-4 border border-primary-green/20 bg-primary-black/30">
                    <p className="text-white font-semibold mb-2">Подарък към всеки клиент:</p>
                    <ul className="list-disc list-inside text-white/85 space-y-1">
                      <li>Химикалка</li>
                      <li>Ключодържател</li>
                      <li>Лента за бадж</li>
                      <li>Отварачка</li>
                      <li>Стикери</li>
                    </ul>
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


