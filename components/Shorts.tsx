'use client'

import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'keen-slider/keen-slider.min.css'
import './Shorts.css'

interface ShortItem {
  id: number
  src: string
  poster: string
}

const shortsData: ShortItem[] = [
  { id: 1, src: '/videos/shorts_1.mp4', poster: '/videos/shorts_1-poster.jpg' },
  { id: 2, src: '/videos/shorts_2.mp4', poster: '/videos/shorts_2-poster.jpg' },
]

export default function Shorts() {
  const { t } = useLanguage()
  const [activeVideo, setActiveVideo] = useState<ShortItem | null>(null)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.8,
      spacing: 14,
    },
    breakpoints: {
      '(min-width: 480px)': {
        slides: { perView: 2.4, spacing: 16 },
      },
      '(min-width: 768px)': {
        slides: { perView: 3.4, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 4.4, spacing: 24 },
      },
    },
  })

  return (
    <section className="shorts section">
      <div className="container">
        <div className="shorts-header">
          <span className="section-label">{t.home.shorts.label}</span>
          <h2 className="section-title">{t.home.shorts.title}</h2>
          <p className="section-subtitle">{t.home.shorts.subtitle}</p>
        </div>

        <div className="shorts-slider">
          <button
            type="button"
            className="shorts-nav-btn prev"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div ref={sliderRef} className="keen-slider shorts-track">
            {shortsData.map((item) => (
              <div key={item.id} className="keen-slider__slide shorts-slide">
                <button
                  type="button"
                  className="shorts-card"
                  onClick={() => setActiveVideo(item)}
                  aria-label="Play video"
                >
                  <img
                    className="shorts-thumb"
                    src={item.poster}
                    alt=""
                    loading="lazy"
                  />
                  <span className="shorts-play">
                    <FaPlay />
                  </span>
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="shorts-nav-btn next"
            onClick={() => instanceRef.current?.next()}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {activeVideo && (
        <div className="shorts-modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="shorts-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="shorts-modal-close" onClick={() => setActiveVideo(null)}>
              <FaTimes />
            </button>
            <video
              className="shorts-modal-video"
              src={activeVideo.src}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}
