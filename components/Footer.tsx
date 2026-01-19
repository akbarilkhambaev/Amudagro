'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaTelegram, FaInstagram, FaArrowRight } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: '#8cc63f' }}>AMUDAGRO</h3>
            <p>{t.footer.description}</p>
            <div className="footer-social">
              <a href="#" aria-label="WhatsApp" className="social-link">
                <FaWhatsapp />
              </a>
              <a href="#" aria-label="Telegram" className="social-link">
                <FaTelegram />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t.footer.navigation}</h4>
            <ul>
              <li><Link href="/">{t.nav.home} <FaArrowRight style={{ fontSize: '0.7rem', marginLeft: 'auto' }} /></Link></li>
              <li><Link href="/about">{t.nav.about} <FaArrowRight style={{ fontSize: '0.7rem', marginLeft: 'auto' }} /></Link></li>
              <li><Link href="/products">{t.nav.products} <FaArrowRight style={{ fontSize: '0.7rem', marginLeft: 'auto' }} /></Link></li>
              <li><Link href="/export">{t.nav.export} <FaArrowRight style={{ fontSize: '0.7rem', marginLeft: 'auto' }} /></Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t.footer.information}</h4>
            <ul>
              <li><Link href="/gallery">{t.nav.gallery} <FaArrowRight style={{ fontSize: '0.7rem', marginLeft: 'auto' }} /></Link></li>
              <li><Link href="/contacts">{t.nav.contacts} <FaArrowRight style={{ fontSize: '0.7rem', marginLeft: 'auto' }} /></Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t.footer.contacts}</h4>
            <ul>
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                <span>{t.contacts.address.value}</span>
              </li>
              <li>
                <FaEnvelope className="footer-icon" />
                <span>info@amudagro.uz</span>
              </li>
              <li>
                <FaPhone className="footer-icon" />
                <span>+998 XX XXX XX XX</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} AMUDAGRO. {t.footer.rights}.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy">{t.footer.privacy}</Link>
              <Link href="/terms">{t.footer.terms}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

