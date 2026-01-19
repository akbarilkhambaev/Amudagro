'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { FaCog, FaBox, FaGlobe, FaCheckCircle } from 'react-icons/fa'
import './page.css'

export default function Export() {
  const { t, language } = useLanguage()

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">{t.export.label}</span>
          <h1>{t.export.title}</h1>
          <p>{t.export.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <p className="intro-text">{t.export.description}</p>
          </div>

          <div className="export-section">
            <div className="export-card maf-roda">
              <div className="export-icon">
                <FaCog />
              </div>
              <h2>{t.export.mafRoda.title}</h2>
              <p>{t.export.mafRoda.description}</p>
              <ul className="export-list">
                {t.export.mafRoda.items.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle className="check-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="export-card packaging">
              <div className="export-icon">
                <FaBox />
              </div>
              <h2>{t.export.packaging.title}</h2>
              <p>{t.export.packaging.description}</p>
              <ul className="export-list">
                {t.export.packaging.items.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle className="check-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="geography-section">
            <h2>{t.export.geography.title}</h2>
            <p>{t.export.geography.text}</p>
            <div className="countries-grid">
              <div className="country-card">
                <div className="country-flag">🇷🇺</div>
                <h3>{language === 'uz' ? 'Rossiya' : language === 'ru' ? 'Россия' : 'Russia'}</h3>
                <p>Russia</p>
              </div>
              <div className="country-card">
                <div className="country-flag">🇪🇺</div>
                <h3>{language === 'uz' ? 'Yevropa' : language === 'ru' ? 'Европа' : 'Europe'}</h3>
                <p>Europe</p>
              </div>
              <div className="country-card">
                <div className="country-flag">🌍</div>
                <h3>{language === 'uz' ? 'Yaqin Sharq' : language === 'ru' ? 'Ближний Восток' : 'Middle East'}</h3>
                <p>Middle East</p>
              </div>
              <div className="country-card">
                <div className="country-flag">🌐</div>
                <h3>{language === 'uz' ? 'MDH' : language === 'ru' ? 'СНГ' : 'CIS'}</h3>
                <p>CIS</p>
              </div>
            </div>
          </div>

          <div className="standards-section">
            <h2>
              {language === 'uz'
                ? 'Xalqaro standartlar'
                : language === 'ru'
                ? 'Международные стандарты'
                : 'International Standards'}
            </h2>
            <p>
              {language === 'uz'
                ? 'Biz mevalarning sifat, kalibratsiya va qadoqlash bo\'yicha barcha xalqaro talablarga qat\'iy rioya qilamiz, bu bizga mahsulotlarimizni butun dunyo bo\'ylab muvaffaqiyatli eksport qilish imkonini beradi.'
                : language === 'ru'
                ? 'Мы строго соблюдаем все международные требования к качеству, калибровке и упаковке фруктов, что позволяет нам успешно экспортировать нашу продукцию по всему миру.'
                : 'We strictly comply with all international requirements for quality, calibration and fruit packaging, which allows us to successfully export our products worldwide.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

