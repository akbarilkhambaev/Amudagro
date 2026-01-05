'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import './Features.css'

const peachSorts = [
  {
    id: 1,
    name: 'Big Top',
    image: '/sorts/beg-top.avif',
    description: 'Крупноплодный сорт персика с насыщенным сладким вкусом и ярким ароматом. Идеален для свежего потребления.',
    characteristics: {
      weight: '200-280 г',
      harvest: 'Июль-Август',
      taste: 'Сладкий',
      color: 'Жёлто-красный'
    }
  },
  {
    id: 2,
    name: 'Кларисс',
    image: '/sorts/klariss.avif',
    description: 'Ранний сорт с нежной мякотью и приятным ароматом. Отличается высокой урожайностью и устойчивостью.',
    characteristics: {
      weight: '150-200 г',
      harvest: 'Июнь-Июль',
      taste: 'Сладко-кислый',
      color: 'Жёлтый'
    }
  },
  {
    id: 3,
    name: 'Конкети',
    image: '/sorts/konqueti.avif',
    description: 'Среднеспелый сорт с плотной мякотью, подходящий для транспортировки и длительного хранения.',
    characteristics: {
      weight: '180-220 г',
      harvest: 'Август',
      taste: 'Сладкий',
      color: 'Оранжево-красный'
    }
  },
  {
    id: 4,
    name: 'Сорт премиум',
    image: '/sorts/sort.avif',
    description: 'Элитный сорт персика с исключительными вкусовыми качествами. Выращивается по специальной технологии.',
    characteristics: {
      weight: '220-300 г',
      harvest: 'Июль-Август',
      taste: 'Медовый',
      color: 'Красно-жёлтый'
    }
  }
]

export default function Features() {
  const { t } = useLanguage()

  return (
    <section className="features section">
      <div className="container">
        <div className="features-header">
          <span className="section-label">Наша продукция</span>
          <h2 className="section-title">Сорта персиков и нектаринов</h2>
          <p className="section-subtitle">
            Мы выращиваем лучшие сорта персиков и нектаринов с использованием современных технологий
          </p>
        </div>
        <div className="products-grid">
          {peachSorts.map((sort) => (
            <div key={sort.id} className="product-card">
              <div className="product-image">
                <img src={sort.image} alt={sort.name} />
              </div>
              <div className="product-content">
                <h3 className="product-name">{sort.name}</h3>
                <div className="product-characteristics">
                  <div className="characteristic">
                    <span className="characteristic-label">Вес</span>
                    <span className="characteristic-value">{sort.characteristics.weight}</span>
                  </div>
                  <div className="characteristic">
                    <span className="characteristic-label">Сбор</span>
                    <span className="characteristic-value">{sort.characteristics.harvest}</span>
                  </div>
                  <div className="characteristic">
                    <span className="characteristic-label">Вкус</span>
                    <span className="characteristic-value">{sort.characteristics.taste}</span>
                  </div>
                  <div className="characteristic">
                    <span className="characteristic-label">Цвет</span>
                    <span className="characteristic-value">{sort.characteristics.color}</span>
                  </div>
                </div>
                <Link href="/products" className="product-btn">
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

