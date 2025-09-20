'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gamepad2, Trophy, Zap, MapPin, Clock, Instagram } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gaming from './components/Gaming'
import GamingSpecs from './components/GamingSpecs'
import Pricing from './components/Pricing'
import Location from './components/Location'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-black text-white">
      <Navbar />
      <Hero />
      <Gaming />
      <GamingSpecs />
      <Pricing />
      <Location />
      <ReviewsSection />
      <Footer />
    </main>
  )
}