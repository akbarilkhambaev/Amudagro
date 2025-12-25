'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import './page.css'

export default function Products() {
  const { t, language } = useLanguage()

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">Каталог</span>
          <h1>{t.products.title}</h1>
          <p>{t.products.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-grid">
            <div className="product-card">
              <h2>{t.products.nectarines.title}</h2>
              <div className="product-specs">
                <div className="spec-item">
                  <span className="spec-label">
                    {language === 'uz' ? 'Kalibr' : language === 'ru' ? 'Калибр' : 'Caliber'}
                  </span>
                  <span className="spec-value">70-80 mm</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">
                    {language === 'uz' ? 'Og\'irlik' : language === 'ru' ? 'Вес' : 'Weight'}
                  </span>
                  <span className="spec-value">140-160 g</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">
                    {language === 'uz' ? 'Ta\'m' : language === 'ru' ? 'Вкус' : 'Taste'}
                  </span>
                  <span className="spec-value">
                    {language === 'uz' ? 'Shirin va qattiq' : language === 'ru' ? 'Сладкий и плотный' : 'Sweet and firm'}
                  </span>
                </div>
              </div>
              <p className="product-description">{t.products.nectarines.description}</p>
            </div>

            <div className="product-card">
              <h2>{t.products.apricots.title}</h2>
              <div className="product-specs">
                <div className="spec-item">
                  <span className="spec-label">
                    {language === 'uz' ? 'Kalibr' : language === 'ru' ? 'Калибр' : 'Caliber'}
                  </span>
                  <span className="spec-value">65-75 mm</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">
                    {language === 'uz' ? 'Og\'irlik' : language === 'ru' ? 'Вес' : 'Weight'}
                  </span>
                  <span className="spec-value">130-150 g</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">
                    {language === 'uz' ? 'Ta\'m' : language === 'ru' ? 'Вкус' : 'Taste'}
                  </span>
                  <span className="spec-value">
                    {language === 'uz' ? 'Quyoshli va xushbo\'y' : language === 'ru' ? 'Солнечный и ароматный' : 'Sunny and aromatic'}
                  </span>
                </div>
              </div>
              <p className="product-description">{t.products.apricots.description}</p>
            </div>
          </div>

          <div className="varieties-info">
            <h2>
              {language === 'uz' 
                ? '10 dan ortiq navlar'
                : language === 'ru'
                ? 'Более 10 сортов'
                : 'More than 10 varieties'}
            </h2>
            <p>
              {language === 'uz'
                ? 'Bizning bog\'larimizda Fransiyadan, Yevropaning yetakchi ko\'chatxonalaridan biri bo\'lgan DALIVAL kompaniyasidan olib kelingan 10 dan ortiq nektarin va o\'rik navlari yetishtiriladi.'
                : language === 'ru'
                ? 'В наших садах выращивается более 10 сортов нектаринов и абрикосов, завезенных из Франции от компании DALIVAL — одного из ведущих питомников Европы.'
                : 'More than 10 varieties of nectarines and apricots imported from France from DALIVAL company, one of the leading nurseries in Europe, are grown in our orchards.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

