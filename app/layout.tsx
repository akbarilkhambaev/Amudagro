import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LanguageUpdater from '@/components/LanguageUpdater'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'AMUDAGRO — Premium Fruits from Uzbekistan to the World',
  description: 'We grow high-quality apricots, nectarines and peaches in modern intensive orchards of Khorezm. Our products meet international standards.',
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

