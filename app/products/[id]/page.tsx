'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import './page.css'

type ProductCategory = 'nectarine' | 'apricot'

interface Product {
  id: string
  category: ProductCategory
  images: string[]
  name: {
    ru: string
    en: string
    uz: string
  }
  specifications: {
    season: string
    shape: {
      ru: string
      en: string
      uz: string
    }
    firmness: {
      ru: string
      en: string
      uz: string
    }
    cracking: {
      ru: string
      en: string
      uz: string
    }
    color: {
      ru: string
      en: string
      uz: string
    }
    caliber: string
    sugar: string
  }
}

// Данные о продуктах с расширенной информацией
const products: Product[] = [
  {
    id: 'Honey Sugar',
    category: 'nectarine',
    images: [
      '/nectarins/honey_sugar.avif',
      '/nectarins/honey_sugar.avif',
      '/nectarins/honey_sugar.avif',
    ],
    name: {
      ru: 'Honey Sugar',
      en: 'Honey Sugar',
      uz: 'Honey Sugar',
    },
    specifications: {
      season: '15-25 Июнь',
      shape: {
        ru: 'Круглая',
        en: 'Round',
        uz: 'Dumaloq',
      },
      firmness: {
        ru: 'Хорошая',
        en: 'Good',
        uz: 'Yaxshi',
      },
      cracking: {
        ru: 'Нет',
        en: 'No',
        uz: 'Yo\'q',
      },
      color: {
        ru: 'Красно-желтая',
        en: 'Red-Yellow',
        uz: 'Qizil-sariq',
      },
      caliber: '65-75 мм',
      sugar: '14° Brix',
    },
  },
  {
    id: 'Kinolea',
    category: 'nectarine',
    images: [
      '/nectarins/kinolea.avif',
      '/nectarins/kinolea.avif',
      '/nectarins/kinolea.avif',
    ],
    name: {
      ru: 'Кинолеа',
      en: 'Kinolea',
      uz: 'Kinolea',
    },
    specifications: {
      season: '10-15 Июнь',
      shape: {
        ru: 'Круглая',
        en: 'Round',
        uz: 'Dumaloq',
      },
      firmness: {
        ru: 'Очень хорошая',
        en: 'Very good',
        uz: 'Juda yaxshi',
      },
      cracking: {
        ru: 'Нет',
        en: 'No',
        uz: 'Yo\'q',
      },
      color: {
        ru: 'Ярко-красная',
        en: 'Bright red',
        uz: 'Yorqin qizil',
      },
      caliber: '65-75 мм',
      sugar: '16° Brix',
    },
  },
  {
    id: 'Honey Top',
    category: 'nectarine',
    images: [
      '/nectarins/honey_top.avif',
      '/nectarins/honey_top.avif',
      '/nectarins/honey_top.avif',
    ],
    name: {
      ru: 'Honey Top',
      en: 'Honey Top',
      uz: 'Honey Top',
    },
    specifications: {
      season: '25-30 Июнь',
      shape: {
        ru: 'Круглая',
        en: 'Round',
        uz: 'Dumaloq',
      },
      firmness: {
        ru: 'Хорошая',
        en: 'Good',
        uz: 'Yaxshi',
      },
      cracking: {
        ru: 'Нет',
        en: 'No',
        uz: 'Yo\'q',
      },
      color: {
        ru: 'Желто-красная',
        en: 'Yellow-red',
        uz: 'Sariq-qizil',
      },
      caliber: '65-75 мм',
      sugar: '15° Brix',
    },
  },
  {
    id: 'Luciana',
    category: 'nectarine',
    images: [
      '/nectarins/luciana.avif',
      '/nectarins/luciana.avif',
      '/nectarins/luciana.avif',
    ],
    name: {
      ru: 'Лусиана',
      en: 'Luciana',
      uz: 'Luciana',
    },
    specifications: {
      season: '01-10 Июль',
      shape: {
        ru: 'Круглая',
        en: 'Round',
        uz: 'Dumaloq',
      },
      firmness: {
        ru: 'Очень хорошая',
        en: 'Very good',
        uz: 'Juda yaxshi',
      },
      cracking: {
        ru: 'Нет',
        en: 'No',
        uz: 'Yo\'q',
      },
      color: {
        ru: 'Темно-красная',
        en: 'Dark red',
        uz: 'To\'q qizil',
      },
      caliber: '65-75 мм',
      sugar: '15° Brix',
    },
  },
  {
    id: 'Clariss',
    category: 'nectarine',
    images: [
      '/nectarins/clarris.avif',
      '/nectarins/clarris.avif',
      '/nectarins/clarris.avif',
    ],
    name: {
      ru: 'Кларисс',
      en: 'Clariss',
      uz: 'Klariss',
    },
    specifications: {
      season: '15-25 Июль',
      shape: {
        ru: 'Овальная',
        en: 'Oval',
        uz: 'Oval',
      },
      firmness: {
        ru: 'Средняя',
        en: 'Medium',
        uz: 'O\'rta',
      },
      cracking: {
        ru: 'Нет',
        en: 'No',
        uz: 'Yo\'q',
      },
      color: {
        ru: 'Оранжевая',
        en: 'Orange',
        uz: 'To\'q sariq',
      },
      caliber: '65-75 мм',
      sugar: '14° Brix',
    },
  },
  {
    id: 'Conquete',
    category: 'nectarine',
    images: [
      '/nectarins/conquete.avif',
      '/nectarins/conquete.avif',
      '/nectarins/conquete.avif',
    ],
    name: {
      ru: 'Конкетти',
      en: 'Conquete',
      uz: 'Konketa',
    },
    specifications: {
      season: '01-10 Август',
      shape: {
        ru: 'Овальная',
        en: 'Oval',
        uz: 'Oval',
      },
      firmness: {
        ru: 'Средняя',
        en: 'Medium',
        uz: 'O\'rta',
      },
      cracking: {
        ru: 'Нет',
        en: 'No',
        uz: 'Yo\'q',
      },
      color: {
        ru: 'Золотисто-оранжевая',
        en: 'Golden orange',
        uz: 'Oltin-to\'q sariq',
      },
      caliber: '65-75 мм',
      sugar: '16° Brix',
    },
  },
  {
    id: 'Rubissia',
    category: 'apricot',
    images: [
      '/appricots/rubissia.avif',
      '/appricots/rubissia.avif',
      '/appricots/rubissia.avif',
    ],
    name: {
      ru: 'Рубиссия',
      en: 'Rubissia',
      uz: 'Rubissia',
    },
    specifications: {
      season: '25-30 Май',
      shape: {
        ru: 'Овальная',
        en: 'Oval',
        uz: 'Oval',
      },
      firmness: {
        ru: 'Хорошая',
        en: 'Good',
        uz: 'Yaxshi',
      },
      cracking: {
        ru: 'Нет',
        en: 'No',
        uz: 'Yo\'q',
      },
      color: {
        ru: 'Красный (90%)',
        en: 'Red (90%)',
        uz: 'Qizil (90%)',
      },
      caliber: '40-50 мм',
      sugar: '15° Brix',
    },
  },
  {
    id: 'Bolero',
    category: 'apricot',
    images: [
      '/appricots/bolero.avif',
      '/appricots/bolero.avif',
      '/appricots/bolero.avif',
    ],
    name: {
      ru: 'Болеро',
      en: 'Bolero',
      uz: 'Bolero',
    },
    specifications: {
      season: '01-10 Июнь',
      shape: {
        ru: 'Овальная',
        en: 'Oval',
        uz: 'Oval',
      },
      firmness: {
        ru: 'Очень хорошая',
        en: 'Very good',
        uz: 'Juda yaxshi',
      },
      cracking: {
        ru: 'Нет',
        en: 'No',
        uz: 'Yo\'q',
      },
      color: {
        ru: 'Ярко-оранжевая',
        en: 'Bright orange',
        uz: 'Yorqin to\'q sariq',
      },
      caliber: '40-50 мм',
      sugar: '15° Brix',
    },
  },
  {
    id: 'Milord',
    category: 'apricot',
    images: [
      '/appricots/milord.avif',
      '/appricots/milord.avif',
      '/appricots/milord.avif',
    ],
    name: {
      ru: 'Милорд',
      en: 'Milord',
      uz: 'Milord',
    },
    specifications: {
      season: '05-15 Июль',
      shape: {
        ru: 'Овальная',
        en: 'Oval',
        uz: 'Oval',
      },
      firmness: {
        ru: 'Хорошая',
        en: 'Good',
        uz: 'Yaxshi',
      },
      cracking: {
        ru: 'Нет',
        en: 'No',
        uz: 'Yo\'q',
      },
      color: {
        ru: 'Оранжево-красная',
        en: 'Orange-red',
        uz: 'To\'q sariq-qizil',
      },
      caliber: '40-50 мм',
      sugar: '17° Brix',
    },
  },
  {
    id: 'Madrigal',
    category: 'apricot',
    images: [
      '/appricots/madrigal.avif',
      '/appricots/madrigal.avif',
      '/appricots/madrigal.avif',
    ],
    name: {
      ru: 'Мадригал',
      en: 'Madrigal',
      uz: 'Madrigal',
    },
    specifications: {
      season: '10-20 Июль',
      shape: {
        ru: 'Овальная',
        en: 'Oval',
        uz: 'Oval',
      },
      firmness: {
        ru: 'Хорошая',
        en: 'Good',
        uz: 'Yaxshi',
      },
      cracking: {
        ru: 'Нет',
        en: 'No',
        uz: 'Yo\'q',
      },
      color: {
        ru: 'Глубокая оранжевая',
        en: 'Deep orange',
        uz: 'Chuqur to\'q sariq',
      },
      caliber: '40-50 мм',
      sugar: '19° Brix',
    },
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Декодируем ID из URL
  const productId = decodeURIComponent(params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  const labels = {
    backToProducts: {
      ru: '← Назад к продуктам',
      en: '← Back to products',
      uz: '← Mahsulotlarga qaytish',
    },
    specifications: {
      ru: 'Характеристики',
      en: 'Specifications',
      uz: 'Xususiyatlari',
    },
    season: {
      ru: 'Период сбора',
      en: 'Harvest period',
      uz: 'Yig\'ib olish davri',
    },
    shape: {
      ru: 'Форма',
      en: 'Shape',
      uz: 'Shakli',
    },
    firmness: {
      ru: 'Твердость',
      en: 'Firmness',
      uz: 'Qattiqligi',
    },
    cracking: {
      ru: 'Растрескивание',
      en: 'Cracking',
      uz: 'Yorilish',
    },
    color: {
      ru: 'Окрас',
      en: 'Color',
      uz: 'Rangi',
    },
    caliber: {
      ru: 'Калибр',
      en: 'Caliber',
      uz: 'Kalibr',
    },
    sugar: {
      ru: 'Уровень сахара',
      en: 'Sugar level',
      uz: 'Shakar darajasi',
    },
    category: {
      ru: 'Категория',
      en: 'Category',
      uz: 'Kategoriya',
    },
    nectarine: {
      ru: 'Нектарин',
      en: 'Nectarine',
      uz: 'Nektarin',
    },
    apricot: {
      ru: 'Абрикос',
      en: 'Apricot',
      uz: 'O\'rik',
    },
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <Link href="/products" className="back-link">
          {labels.backToProducts[language]}
        </Link>

        <div className="product-detail-container">
          {/* Левая часть - Галерея */}
          <div className="product-gallery">
            <div className="main-image">
              <Image
                src={product.images[selectedImage]}
                alt={product.name[language]}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="product-main-image"
                priority
              />
            </div>
            <div className="thumbnail-list">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name[language]} ${index + 1}`}
                    fill
                    sizes="100px"
                    className="thumbnail-image"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Правая часть - Информация */}
          <div className="product-info-section">
            <h1 className="product-title">{product.name[language]}</h1>

            <div className="specifications-table">
              <h2 className="specifications-title">{labels.specifications[language]}</h2>
              
              <table className="specs-table">
                <tbody>
                  <tr>
                    <td className="spec-label">{labels.category[language]}</td>
                    <td className="spec-value">
                      {product.category === 'nectarine' 
                        ? labels.nectarine[language] 
                        : labels.apricot[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="spec-label">{labels.season[language]}</td>
                    <td className="spec-value">{product.specifications.season}</td>
                  </tr>
                  <tr>
                    <td className="spec-label">{labels.shape[language]}</td>
                    <td className="spec-value">{product.specifications.shape[language]}</td>
                  </tr>
                  <tr>
                    <td className="spec-label">{labels.firmness[language]}</td>
                    <td className="spec-value">{product.specifications.firmness[language]}</td>
                  </tr>
                  <tr>
                    <td className="spec-label">{labels.cracking[language]}</td>
                    <td className="spec-value">{product.specifications.cracking[language]}</td>
                  </tr>
                  <tr>
                    <td className="spec-label">{labels.color[language]}</td>
                    <td className="spec-value">{product.specifications.color[language]}</td>
                  </tr>
                  <tr>
                    <td className="spec-label">{labels.caliber[language]}</td>
                    <td className="spec-value">{product.specifications.caliber}</td>
                  </tr>
                  <tr>
                    <td className="spec-label">{labels.sugar[language]}</td>
                    <td className="spec-value">{product.specifications.sugar}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
