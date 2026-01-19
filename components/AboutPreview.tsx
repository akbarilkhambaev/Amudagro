'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import './AboutPreview.css'

const slides = [
  {
    id: 1,
    title: ' ',
    image: '/gallery/1.jpg',
    placeholder: 'linear-gradient(135deg, rgba(140, 198, 63, 0.3) 0%, rgba(0, 104, 56, 0.5) 100%)'
  },
  {
    id: 2,
    title: ' ',
    image: '/gallery/2.jpg',
    placeholder: 'linear-gradient(135deg, rgba(0, 104, 56, 0.5) 0%, rgba(140, 198, 63, 0.3) 100%)'
  },
  {
    id: 3,
    title: ' ',
    image: '/gallery/3.jpg',
    placeholder: 'linear-gradient(135deg, rgba(140, 198, 63, 0.2) 0%, rgba(0, 77, 42, 0.6) 100%)'
  },
    {
    id: 4,
    title: ' ',
    image: '/gallery/4.jpg',
    placeholder: 'linear-gradient(135deg, rgba(0, 104, 56, 0.5) 0%, rgba(140, 198, 63, 0.3) 100%)'
  },
  {
    id: 5,
    title: ' ',
    image: '/gallery/5.jpg',
    placeholder: 'linear-gradient(135deg, rgba(140, 198, 63, 0.2) 0%, rgba(0, 77, 42, 0.6) 100%)'
  }
]

export default function AboutPreview() {
  const { t } = useLanguage()
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="about-preview section">
      <div className="container">
        <div className="about-preview-content">
          <div className="about-preview-text">
            <span className="section-label">{t.about.label}</span>
            {/* <h2 className="section-title">{t.about.subtitle}</h2> */}
            <p>{t.about.description}</p>
            <p>{t.about.mission.text}</p>
            <Link href="/about" className="btn btn-outline-light">
              {t.nav.about}
            </Link>
            {/* <div className="about-preview-stats">
              <div className="about-stat">
                <div className="about-stat-number">1000+</div>
                <div className="about-stat-label">Гектаров садов</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">55+</div>
                <div className="about-stat-label">Лет опыта</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">50+</div>
                <div className="about-stat-label">Партнёров</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">20+</div>
                <div className="about-stat-label">Стран экспорта</div>
              </div>
            </div> */}
          </div>
          
          <div className="about-slider">
            <div className="slider-pagination">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`slider-dot ${activeSlide === index ? 'active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                >
                  <span className="slider-dot-number">0{index + 1}</span>
                  <span className="slider-dot-line"></span>
                </button>
              ))}
            </div>
            
            <div className="slider-content">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`slider-slide ${activeSlide === index ? 'active' : ''}`}
                  style={{ background: slide.placeholder }}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="slider-slide-image"
                  />
                  <div className="slider-slide-content">
                    <span className="slider-slide-title">{slide.title}</span>
                  </div>
                </div>
              ))}
              <Link href="/gallery" className="slider-more-btn">
                {t.about.link}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

