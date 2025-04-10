import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { OSProvider } from '@/context/OSContext'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'NextWave - Catch Every Wake, Anytime',
  description: 'NextWave is available for iOS and Android, providing wake foilers across Swiss lakes with real-time boat schedules to help you catch the best wakes.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <OSProvider>
          {children}
        </OSProvider>
      </body>
    </html>
  )
} 