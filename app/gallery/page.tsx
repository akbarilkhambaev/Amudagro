'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaTree, FaUserTie,  FaPlayCircle, FaImages } from 'react-icons/fa'
import './page.css'

export default function Gallery() {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', nameRu: 'Все', nameEn: 'All', nameUz: 'Hammasi' },
    { id: 'orchard', nameRu: 'Сад', nameEn: 'Orchard', nameUz: 'Bog\'' },
    { id: 'harvest', nameRu: 'Уборка урожая', nameEn: 'Harvest', nameUz: 'Hosil yig\'ish' },
    { id: 'fruits', nameRu: 'Фрукты', nameEn: 'Fruits', nameUz: 'Mevalar' },
    { id: 'video', nameRu: 'Видео', nameEn: 'Video', nameUz: 'Video' },
  ]

  // Placeholder для изображений - в реальном проекте здесь будут реальные изображения
  const galleryItems = [
    { id: 1, category: 'orchard', type: 'image', placeholder: 'Сад / Orchard', icon: FaTree },
    { id: 2, category: 'orchard', type: 'image', placeholder: 'Сад / Orchard', icon: FaTree },
    { id: 3, category: 'harvest', type: 'image', placeholder: 'Уборка урожая / Harvest', icon: FaUserTie },
    { id: 4, category: 'harvest', type: 'image', placeholder: 'Уборка урожая / Harvest', icon: FaUserTie },
    { id: 5, category: 'fruits', type: 'image', placeholder: 'Фрукты / Fruits', icon: FaTree },
    { id: 6, category: 'fruits', type: 'image', placeholder: 'Фрукты / Fruits', icon: FaTree },
    { id: 7, category: 'fruits', type: 'image', placeholder: 'Фрукты / Fruits', icon: FaTree },
    { id: 8, category: 'orchard', type: 'image', placeholder: 'Сад / Orchard', icon: FaTree },
    { id: 9, category: 'video', type: 'video', placeholder: 'Видео с дрона / Drone Video', icon: FaPlayCircle },
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">Фотогалерея</span>
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

          <div className="gallery-grid">
            {filteredItems.map((item) => {
              const IconComponent = item.icon
              return (
                <div key={item.id} className={`gallery-item ${item.type}`}>
                  {item.type === 'video' ? (
                    <div className="video-placeholder">
                      <div className="play-icon">
                        <IconComponent />
                      </div>
                      <p>{item.placeholder}</p>
                    </div>
                  ) : (
                    <div className="image-placeholder">
                      <div className="gallery-icon">
                        <IconComponent />
                      </div>
                      <p>{item.placeholder}</p>
                      <span className="image-note">Здесь будет фото / Photo will be here</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="gallery-note">
            <p>
              📸 {language === 'uz' 
                ? 'Maydan sentyabrgacha bo\'lgan mavsumda biz galereyani bog\'larimizdan yangi fotosuratlar va videolar bilan muntazam yangilaymiz.'
                : language === 'ru'
                ? 'В сезон с мая по сентябрь мы регулярно обновляем галерею новыми фотографиями и видео с наших садов.'
                : 'During the season from May to September, we regularly update the gallery with new photos and videos from our orchards.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

