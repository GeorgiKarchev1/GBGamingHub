'use client'

import Navbar from '../components/Navbar'
import Tournaments from '../components/Tournaments'

export default function TournamentsPage() {
  return (
    <main className="min-h-screen bg-primary-black text-white">
      <Navbar />
      <div className="pt-16">
        <Tournaments />
      </div>
    </main>
  )
}