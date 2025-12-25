'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import './page.css'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">О компании</span>
          <h1>{t.about.title}</h1>
          <p>{t.about.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>{t.about.subtitle}</h2>
            <p>{t.about.description}</p>
          </div>

          <div className="content-block">
            <h2>{t.about.mission.title}</h2>
            <p>{t.about.mission.text}</p>
          </div>

          <div className="content-block">
            <h2>{t.about.history.title}</h2>
            <p>{t.about.history.text}</p>
          </div>

          <div className="content-block">
            <h2>{t.about.varieties.title}</h2>
            <p>{t.about.varieties.text}</p>
          </div>

          <div className="content-block">
            <h2>{t.about.advantages.title}</h2>
            <ul className="advantages-list">
              {t.about.advantages.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
