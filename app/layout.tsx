import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LanguageUpdater from '@/components/LanguageUpdater'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'AMUDAGRO — Premium Fruits from Uzbekistan to the World',
  description: 'We grow high-quality apricots, nectarines and peaches in modern intensive orchards of Khorezm. Our products meet international standards.',
  icons: {
    icon: [
      { url: '/fav/favicon.ico' },
      { url: '/fav/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/fav/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/fav/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/fav/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/fav/android-chrome-512x512.png' },
    ],
  },
  manifest: '/fav/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <LanguageProvider>
          <LanguageUpdater />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

