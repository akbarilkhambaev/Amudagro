import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './CTA.css'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <span className="section-label">{t.home.hero.title}</span>
          <h2>{t.home.hero.title}</h2>
          <p>{t.home.hero.subtitle}</p>
          <div className="cta-buttons">
            <Link href="/contacts" className="btn btn-white">
              {t.home.hero.cta}
            </Link>
            <Link href="/products" className="btn btn-outline-white">
              {t.home.hero.products}
            </Link>
          </div>
          {/* <div className="cta-contact-info">
            <div className="cta-contact-item">
              <div className="cta-contact-icon">
                <FaPhone />
              </div>
              <div className="cta-contact-text">
                <div className="cta-contact-label">Телефон</div>
                <div className="cta-contact-value">+998 XX XXX XX XX</div>
              </div>
            </div>
            <div className="cta-contact-item">
              <div className="cta-contact-icon">
                <FaEnvelope />
              </div>
              <div className="cta-contact-text">
                <div className="cta-contact-label">Email</div>
                <div className="cta-contact-value">info@amudagro.uz</div>
              </div>
            </div>
            <div className="cta-contact-item">
              <div className="cta-contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="cta-contact-text">
                <div className="cta-contact-label">Адрес</div>
                <div className="cta-contact-value">Узбекистан</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

