import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import Script from 'next/script'
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="OISrvzmk/x+m0tHJ3qRerA"
          async
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}