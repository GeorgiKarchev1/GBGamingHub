import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'GB Gaming Hub - Luxury Gaming Experience in Velingrad',
  description: 'Premium gaming destination in the heart of Velingrad, Bulgaria. Experience luxury gaming with state-of-the-art equipment and elegant environment.',
  keywords: 'gaming, luxury gaming, Velingrad, Bulgaria, gaming hub, esports, gaming center',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}