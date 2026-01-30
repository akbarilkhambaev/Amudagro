'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import './Features.css'

const productsData = [
  {
    id: 'Kinolea',
    category: 'nectarine',
    name: {
      ru: 'Kinolea',
      en: 'Kinolea',
      uz: 'Kinolea',
    },
    image: '/nectarins/kinolea.jpg',
    description: {
      ru: 'Ранний сорт с ярким красным румянцем и плотной желтой мякотью',
      en: 'Early variety with bright red blush and firm yellow flesh',
      uz: 'Yorqin qizil rangdagi va zich sariq go\'shtli erta nav',
    },
    characteristics: {
      caliber: '65-75 мм',
      season: {
        ru: '10-15 Июнь',
        en: '10-15 June',
        uz: '10-15 Iyun',
      },
      sugar: '16° Brix',
      color: {
        ru: 'Ярко-красный',
        en: 'Bright red',
        uz: 'Yorqin qizil',
      }
    }
  },
  {
    id: 'Honey Top',
    category: 'nectarine',
    name: {
      ru: 'Honey Top',
      en: 'Honey Top',
      uz: 'Honey Top',
    },
    image: '/nectarins/honey_top.jpg',
    description: {
      ru: 'Среднеспелый сорт с отличными вкусовыми качествами и желтой мякотью',
      en: 'Mid-season variety with excellent taste qualities and yellow flesh',
      uz: 'A\'lo ta\'m sifatlariga ega sariq go\'shtli o\'rta pishar nav',
    },
    characteristics: {
      caliber: '65-75 мм',
      season: {
        ru: '25-30 Июнь',
        en: '25-30 June',
        uz: '25-30 Iyun',
      },
      sugar: '15° Brix',
      color: {
        ru: 'Желто-красный',
        en: 'Yellow-red',
        uz: 'Sariq-qizil',
      }
    }
  },
  {
    id: 'Rubissia',
    category: 'apricot',
    name: {
      ru: 'Rubissia',
      en: 'Rubissia',
      uz: 'Rubissia',
    },
    image: '/appricots/rubissia.jpg',
    description: {
      ru: 'Французский сорт с высоким содержанием сахара и красным окрасом',
      en: 'French variety with high sugar content and red color',
      uz: 'Yuqori shakar miqdoriga ega qizil rangdagi fransuz navi',
    },
    characteristics: {
      caliber: '40-50 мм',
      season: {
        ru: '25-30 Май',
        en: '25-30 May',
        uz: '25-30 May',
      },
      sugar: '15° Brix',
      color: {
        ru: 'Красный',
        en: 'Red',
        uz: 'Qizil',
      }
    }
  },
  {
    id: 'Madrigal',
    category: 'apricot',
    name: {
      ru: 'Madrigal',
      en: 'Madrigal',
      uz: 'Madrigal',
    },
    image: '/appricots/madrigal.jpg',
    description: {
      ru: 'Премиальный абрикос с глубоким оранжевым цветом и высоким уровнем сахара',
      en: 'Premium apricot with deep orange color and high sugar level',
      uz: 'Chuqur to\'q sariq rangdagi va yuqori shakar darajasiga ega premium o\'rik',
    },
    characteristics: {
      caliber: '40-50 мм',
      season: {
        ru: '10-20 Июль',
        en: '10-20 July',
        uz: '10-20 Iyul',
      },
      sugar: '19° Brix',
      color: {
        ru: 'Глубокий оранжевый',
        en: 'Deep orange',
        uz: 'Chuqur to\'q sariq',
      }
    }
  }
]

export default function Features() {
  const { language } = useLanguage()

  const labels = {
    sectionLabel: {
      ru: 'Наша продукция',
      en: 'Our Products',
      uz: 'Bizning mahsulotlarimiz',
    },
    title: {
      ru: 'Сорта абрикосов и нектаринов',
      en: 'Apricot and Nectarine Varieties',
      uz: 'O\'rik va nektarin navlari',
    },
    subtitle: {
      ru: 'Мы выращиваем лучшие сорта абрикосов и нектаринов с использованием современных технологий',
      en: 'We grow the best varieties of apricots and nectarines using modern technologies',
      uz: 'Biz zamonaviy texnologiyalar yordamida eng yaxshi o\'rik va nektarin navlarini yetishtirамiz',
    },
    caliber: {
      ru: 'Калибр',
      en: 'Caliber',
      uz: 'Kalibr',
    },
    season: {
      ru: 'Сезон',
      en: 'Season',
      uz: 'Mavsum',
    },
    sugar: {
      ru: 'Сахар',
      en: 'Sugar',
      uz: 'Shakar',
    },
    color: {
      ru: 'Цвет',
      en: 'Color',
      uz: 'Rang',
    },
    learnMore: {
      ru: 'Подробнее',
      en: 'Learn more',
      uz: 'Batafsil',
    },
  }

  return (
    <section className="features section">
      <div className="container">
        <div className="features-header">
          <span className="section-label">{labels.sectionLabel[language]}</span>
          <h2 className="section-title">{labels.title[language]}</h2>
          <p className="section-subtitle">
            {labels.subtitle[language]}
          </p>
        </div>
        <div className="products-grid">
          {productsData.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="product-image-inner">
                  <img src={product.image} alt={product.name[language]} />
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name[language]}</h3>
                <p className="features-product-description">{product.description[language]}</p>
                <div className="product-characteristics">
                  <div className="characteristic">
                    <span className="characteristic-label">{labels.caliber[language]}</span>
                    <span className="characteristic-value">{product.characteristics.caliber}</span>
                  </div>
                  <div className="characteristic">
                    <span className="characteristic-label">{labels.season[language]}</span>
                    <span className="characteristic-value">{product.characteristics.season[language]}</span>
                  </div>
                  <div className="characteristic">
                    <span className="characteristic-label">{labels.sugar[language]}</span>
                    <span className="characteristic-value">{product.characteristics.sugar}</span>
                  </div>
                  <div className="characteristic">
                    <span className="characteristic-label">{labels.color[language]}</span>
                    <span className="characteristic-value">{product.characteristics.color[language]}</span>
                  </div>
                </div>
                <Link href={`/products/${product.id}`} className="product-btn">
                  {labels.learnMore[language]}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

