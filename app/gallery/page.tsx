'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './page.css'

interface GalleryItem {
  id: number
  category: string
  type: 'image' | 'video'
  src: string
  height: number
  title: {
    ru: string
    en: string
    uz: string
  }
}

export default function Gallery() {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const categories = [
    { id: 'all', nameRu: 'Все', nameEn: 'All', nameUz: 'Hammasi' },
    { id: 'orchard', nameRu: 'Сад', nameEn: 'Orchard', nameUz: 'Bog\'' },
    { id: 'fruits', nameRu: 'Фрукты', nameEn: 'Fruits', nameUz: 'Mevalar' },
  ]

  const galleryItems: GalleryItem[] = [
    { 
      id: 1, 
      category: 'orchard', 
      type: 'image', 
      src: '/gallery/1.jpg',
      height: 400,
      title: { ru: '', en: '', uz: '' }
    },
    { 
      id: 2, 
      category: 'orchard', 
      type: 'image', 
      src: '/gallery/2.jpg',
      height: 350,
      title: { ru: '', en: '', uz: '' }
    },
    { 
      id: 3, 
      category: 'fruits', 
      type: 'image', 
      src: '/gallery/3.jpg',
      height: 450,
      title: { ru: '', en: '', uz: '' }
    },
    { 
      id: 4, 
      category: 'fruits', 
      type: 'image', 
      src: '/gallery/4.jpg',
      height: 380,
      title: { ru: '', en: '', uz: '' }
    },
    { 
      id: 5, 
      category: 'orchard', 
      type: 'image', 
      src: '/gallery/5.jpg',
      height: 420,
      title: { ru: '', en: '', uz: '' }
    },
    { 
      id: 6, 
      category: 'fruits', 
      type: 'image', 
      src: '/gallery/6.jpg',
      height: 360,
      title: { ru: '', en: '', uz: '' }
    },
        { 
      id: 7, 
      category: 'orchard', 
      type: 'image', 
      src: '/gallery/7.jpg',
      height: 420,
      title: { ru: '', en: '', uz: '' }
    },
        {
      id: 8,
      category: 'fruits',
      type: 'image',
      src: '/gallery/8.jpg',
      height: 450,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 9,
      category: 'orchard',
      type: 'image',
      src: '/gallery/9.jpg',
      height: 400,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 10,
      category: 'fruits',
      type: 'image',
      src: '/gallery/10.jpg',
      height: 360,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 11,
      category: 'orchard',
      type: 'image',
      src: '/gallery/11.jpg',
      height: 430,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 12,
      category: 'fruits',
      type: 'image',
      src: '/gallery/12.jpg',
      height: 380,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 13,
      category: 'fruits',
      type: 'image',
      src: '/gallery/13.jpg',
      height: 410,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 14,
      category: 'fruits',
      type: 'image',
      src: '/gallery/14.jpg',
      height: 440,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 15,
      category: 'fruits',
      type: 'image',
      src: '/gallery/15.jpg',
      height: 370,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 16,
      category: 'orchard',
      type: 'image',
      src: '/gallery/16.jpg',
      height: 420,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 17,
      category: 'orchard',
      type: 'image',
      src: '/gallery/17.jpg',
      height: 450,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 18,
      category: 'fruits',
      type: 'image',
      src: '/gallery/18.jpg',
      height: 390,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 19,
      category: 'orchard',
      type: 'image',
      src: '/gallery/19.jpg',
      height: 430,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 20,
      category: 'orchard',
      type: 'image',
      src: '/gallery/20.jpg',
      height: 400,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 21,
      category: 'fruits',
      type: 'image',
      src: '/gallery/21.jpg',
      height: 360,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 22,
      category: 'fruits',
      type: 'image',
      src: '/gallery/22.jpg',
      height: 420,
      title: { ru: '', en: '', uz: '' }
    },
    {
      id: 23,
      category: 'fruits',
      type: 'image',
      src: '/gallery/23.jpg',
      height: 380,
      title: { ru: '', en: '', uz: '' }
    },
  ]

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const selectedImage = selectedIndex !== null ? filteredItems[selectedIndex] : null

  const showPrev = () => {
    setSelectedIndex((prev) => prev === null ? prev : (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const showNext = () => {
    setSelectedIndex((prev) => prev === null ? prev : (prev + 1) % filteredItems.length)
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev()
      else if (e.key === 'ArrowRight') showNext()
      else if (e.key === 'Escape') setSelectedIndex(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, filteredItems.length])

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">
            {language === 'uz' ? 'Fotogalereya' : language === 'ru' ? 'Фотогалерея' : 'Photo Gallery'}
          </span>
          <h1>{t.gallery.title}</h1>
          <p>{t.gallery.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {language === 'uz' ? cat.nameUz : language === 'ru' ? cat.nameRu : cat.nameEn}
              </button>
            ))}
          </div>

          <div className="masonry-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="masonry-item"
                onClick={() => setSelectedIndex(index)}
                style={{ height: `${item.height}px` }}
              >
                <div className="image-wrapper">
                  <Image
                    src={item.src}
                    alt={item.title[language]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="gallery-image"
                  />
                  <div className="image-overlay">
                    <h3>{item.title[language]}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-note">
            <p>
              📸 {language === 'uz' 
                ? 'Maydan sentyabrgacha bo\'lgan mavsumda biz galereyani bog\'larimizdan yangi fotosuratlar bilan muntazam yangilaymiz.'
                : language === 'ru'
                ? 'В сезон с мая по сентябрь мы регулярно обновляем галерею новыми фотографиями с наших садов.'
                : 'During the season from May to September, we regularly update the gallery with new photos from our orchards.'}
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedIndex(null)}>
              <FaTimes />
            </button>
            {filteredItems.length > 1 && (
              <>
                <button className="modal-nav modal-prev" onClick={showPrev} aria-label="Previous">
                  <FaChevronLeft />
                </button>
                <button className="modal-nav modal-next" onClick={showNext} aria-label="Next">
                  <FaChevronRight />
                </button>
              </>
            )}
            <div className="modal-image-wrapper">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title[language]}
                fill
                sizes="90vw"
                className="modal-image"
              />
            </div>
            <h3 className="modal-title">{selectedImage.title[language]}</h3>
          </div>
        </div>
      )}
    </div>
  )
}

