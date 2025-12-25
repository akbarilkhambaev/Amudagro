'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { FaSeedling, FaTint, FaHandshake, FaStar, FaCog, FaChartLine, FaShieldAlt, FaGlobe } from 'react-icons/fa'
import './Features.css'

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      title: t.home.features.modern.title,
      description: t.home.features.modern.desc,
      icon: FaSeedling,
      number: '01',
    },
    {
      title: t.home.features.irrigation.title,
      description: t.home.features.irrigation.desc,
      icon: FaTint,
      number: '02',
    },
    {
      title: t.home.features.partnerships.title,
      description: t.home.features.partnerships.desc,
      icon: FaHandshake,
      number: '03',
    },
    {
      title: t.home.features.quality.title,
      description: t.home.features.quality.desc,
      icon: FaStar,
      number: '04',
    },
    {
      title: 'Мониторинг',
      description: 'Современные системы мониторинга урожайности и качества продукции',
      icon: FaChartLine,
      number: '05',
    },
    {
      title: 'Экспорт',
      description: 'Поставки сельскохозяйственной продукции на международные рынки',
      icon: FaGlobe,
      number: '06',
    },
  ]

  return (
    <section className="features section">
      <div className="container">
        <div className="features-header">
          <span className="section-label">Наши услуги</span>
          <h2 className="section-title">{t.home.features.title}</h2>
          <p className="section-subtitle">
            Мы предоставляем полный комплекс услуг для сельского хозяйства
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="feature-card">
                <span className="feature-card-number">{feature.number}</span>
                <div className="feature-icon">
                  <IconComponent />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
        <div className="maf-roda-preview">
          <div className="maf-roda-icon">
            <FaCog />
          </div>
          <h3>{t.home.mafRoda.title}</h3>
          <p>{t.home.mafRoda.desc}</p>
        </div>
      </div>
    </section>
  )
}

