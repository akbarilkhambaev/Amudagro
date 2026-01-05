import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaPlay } from 'react-icons/fa'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/videos/otush.webm" type="video/webm" />
        </video>
      </div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>AMUDAGRO — Ваш надежный партнер</span>
            </div>
            <h1>{t.home.hero.title}</h1>
            <p className="hero-subtitle">{t.home.hero.subtitle}</p>
            <p className="hero-description">{t.home.hero.description}</p>
            <div className="hero-buttons">
              <Link href="/contacts" className="btn btn-white">
                {t.home.hero.cta}
              </Link>
              <Link href="/about" className="btn btn-outline-white">
                Узнать больше
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">55+</div>
                <div className="hero-stat-label">Лет опыта</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">1000+</div>
                <div className="hero-stat-label">Гектаров</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">50+</div>
                <div className="hero-stat-label">Партнёров</div>
              </div>
            </div>
          </div>
          {/* <div className="hero-image">
            <div className="hero-image-wrapper">
              <div style={{ 
                background: 'linear-gradient(135deg, #8cc63f 0%, #006838 100%)', 
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div className="hero-play-btn">
                  <FaPlay />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

