'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'
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
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

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
      title: { ru: 'Наши сады', en: 'Our orchards', uz: 'Bizning bog\'larimiz' }
    },
    { 
      id: 2, 
      category: 'orchard', 
      type: 'image', 
      src: '/gallery/2.jpg',
      height: 350,
      title: { ru: 'Интенсивный сад', en: 'Intensive orchard', uz: 'Intensiv bog\'' }
    },
    { 
      id: 3, 
      category: 'fruits', 
      type: 'image', 
      src: '/gallery/3.jpg',
      height: 450,
      title: { ru: 'Свежие фрукты', en: 'Fresh fruits', uz: 'Yangi mevalar' }
    },
    { 
      id: 4, 
      category: 'fruits', 
      type: 'image', 
      src: '/gallery/4.jpg',
      height: 380,
      title: { ru: 'Спелые нектарины', en: 'Ripe nectarines', uz: 'Pishgan nektarinlar' }
    },
    { 
      id: 5, 
      category: 'orchard', 
      type: 'image', 
      src: '/gallery/5.jpg',
      height: 420,
      title: { ru: 'Современные технологии', en: 'Modern technologies', uz: 'Zamonaviy texnologiyalar' }
    },
    { 
      id: 6, 
      category: 'fruits', 
      type: 'image', 
      src: '/gallery/6.jpg',
      height: 360,
      title: { ru: 'Качественные абрикосы', en: 'Quality apricots', uz: 'Sifatli o\'riklar' }
    },
        { 
      id: 7, 
      category: 'orchard', 
      type: 'image', 
      src: '/gallery/5.jpg',
      height: 420,
      title: { ru: 'Современные технологии', en: 'Modern technologies', uz: 'Zamonaviy texnologiyalar' }
    },
        { 
      id: 8, 
      category: 'fruits', 
      type: 'image', 
      src: '/gallery/3.jpg',
      height: 450,
      title: { ru: 'Свежие фрукты', en: 'Fresh fruits', uz: 'Yangi mevalar' }
    },
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

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
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="masonry-item"
                onClick={() => setSelectedImage(item)}
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
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
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

