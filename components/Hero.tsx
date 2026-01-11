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
          <source src="/videos/otush.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <h1>{t.home.hero.title}</h1>

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

