'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <span className="logo-text">AMUDAGRO</span>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              {t.nav.home}
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              {t.nav.about}
            </Link>
            <Link href="/products" onClick={() => setIsMenuOpen(false)}>
              {t.nav.products}
            </Link>
            <Link href="/export" onClick={() => setIsMenuOpen(false)}>
              {t.nav.export}
            </Link>
            <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>
              {t.nav.gallery}
            </Link>
            <Link href="/contacts" onClick={() => setIsMenuOpen(false)}>
              {t.nav.contacts}
            </Link>
          </nav>

          <div className="header-right">
            <div className="language-switcher">
              <button
                className={`lang-btn ${language === 'uz' ? 'active' : ''}`}
                onClick={() => setLanguage('uz')}
                title="O'zbekcha"
              >
                UZ
              </button>
              <button
                className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                onClick={() => setLanguage('ru')}
                title="Русский"
              >
                RU
              </button>
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
                title="English"
              >
                EN
              </button>
            </div>

            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

