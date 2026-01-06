'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'
import './page.css'

// Типы продуктов
type ProductCategory = 'nectarine' | 'apricot'

interface Product {
  id: string
  category: ProductCategory
  image: string
  name: {
    ru: string
    en: string
    uz: string
  }
  shortDescription: {
    ru: string
    en: string
    uz: string
  }
  caliber: string
  weight: string
  season: string
}

// Данные о продуктах
const products: Product[] = [
  // Нектарины
  {
    id: 'big-top',
    category: 'nectarine',
    image: '/sorts/beg-top.avif',
    name: {
      ru: 'Big Top',
      en: 'Big Top',
      uz: 'Big Top',
    },
    shortDescription: {
      ru: 'Крупный нектарин с красно-желтой кожицей и сладкой мякотью',
      en: 'Large nectarine with red-yellow skin and sweet flesh',
      uz: 'Qizil-sariq po\'stli va shirin go\'shtli yirik nektarin',
    },
    caliber: '70-85 mm',
    weight: '150-180 g',
    season: 'Июль-Август',
  },
  {
    id: 'klariss',
    category: 'nectarine',
    image: '/sorts/klariss.avif',
    name: {
      ru: 'Кларисс',
      en: 'Clariss',
      uz: 'Klariss',
    },
    shortDescription: {
      ru: 'Ранний сорт с ярким красным румянцем и плотной мякотью',
      en: 'Early variety with bright red blush and firm flesh',
      uz: 'Yorqin qizil rangdagi va zich go\'shtli erta nav',
    },
    caliber: '65-75 mm',
    weight: '130-150 g',
    season: 'Июнь-Июль',
  },
  {
    id: 'venus',
    category: 'nectarine',
    image: '/sorts/sort.avif',
    name: {
      ru: 'Венус',
      en: 'Venus',
      uz: 'Venus',
    },
    shortDescription: {
      ru: 'Среднеспелый сорт с отличными вкусовыми качествами',
      en: 'Mid-season variety with excellent taste qualities',
      uz: 'A\'lo ta\'m sifatlariga ega o\'rta pishar nav',
    },
    caliber: '70-80 mm',
    weight: '140-160 g',
    season: 'Июль',
  },
  {
    id: 'nectaross',
    category: 'nectarine',
    image: '/sorts/sort.avif',
    name: {
      ru: 'Нектаросс',
      en: 'Nectaross',
      uz: 'Nektaross',
    },
    shortDescription: {
      ru: 'Поздний сорт с высокой транспортабельностью',
      en: 'Late variety with high transportability',
      uz: 'Yuqori tashish qobiliyatiga ega kech nav',
    },
    caliber: '70-85 mm',
    weight: '150-170 g',
    season: 'Август-Сентябрь',
  },
  // Абрикосы
  {
    id: 'konqueti',
    category: 'apricot',
    image: '/sorts/konqueti.avif',
    name: {
      ru: 'Конкуети',
      en: 'Conqueti',
      uz: 'Konkveti',
    },
    shortDescription: {
      ru: 'Крупный абрикос с интенсивным оранжевым цветом',
      en: 'Large apricot with intense orange color',
      uz: 'Yorqin to\'q sariq rangdagi yirik o\'rik',
    },
    caliber: '60-70 mm',
    weight: '120-150 g',
    season: 'Июнь-Июль',
  },
  {
    id: 'faralia',
    category: 'apricot',
    image: '/sorts/sort.avif',
    name: {
      ru: 'Фаралия',
      en: 'Faralia',
      uz: 'Faraliya',
    },
    shortDescription: {
      ru: 'Ароматный абрикос с нежной текстурой мякоти',
      en: 'Aromatic apricot with delicate flesh texture',
      uz: 'Nozik go\'sht tuzilishiga ega xushbo\'y o\'rik',
    },
    caliber: '55-65 mm',
    weight: '100-130 g',
    season: 'Июнь',
  },
  {
    id: 'kioto',
    category: 'apricot',
    image: '/sorts/sort.avif',
    name: {
      ru: 'Киото',
      en: 'Kioto',
      uz: 'Kioto',
    },
    shortDescription: {
      ru: 'Японский сорт с высоким содержанием сахара',
      en: 'Japanese variety with high sugar content',
      uz: 'Yuqori shakar miqdoriga ega yapon navi',
    },
    caliber: '60-70 mm',
    weight: '110-140 g',
    season: 'Июль',
  },
  {
    id: 'fardao',
    category: 'apricot',
    image: '/sorts/sort.avif',
    name: {
      ru: 'Фардао',
      en: 'Fardao',
      uz: 'Fardao',
    },
    shortDescription: {
      ru: 'Плотный абрикос идеальный для транспортировки',
      en: 'Firm apricot ideal for transportation',
      uz: 'Tashishga ideal bo\'lgan zich o\'rik',
    },
    caliber: '65-75 mm',
    weight: '130-160 g',
    season: 'Июль-Август',
  },
]

export default function Products() {
  const { language } = useLanguage()

  const nectarines = products.filter(p => p.category === 'nectarine')
  const apricots = products.filter(p => p.category === 'apricot')

  const labels = {
    pageLabel: {
      ru: 'Каталог продукции',
      en: 'Product Catalog',
      uz: 'Mahsulot katalogi',
    },
    title: {
      ru: 'Наша продукция',
      en: 'Our Products',
      uz: 'Bizning mahsulotlar',
    },
    subtitle: {
      ru: 'Премиальные фрукты из Узбекистана',
      en: 'Premium fruits from Uzbekistan',
      uz: 'O\'zbekistondan premium mevalar',
    },
    nectarines: {
      ru: 'Нектарины',
      en: 'Nectarines',
      uz: 'Nektarinlar',
    },
    apricots: {
      ru: 'Абрикосы',
      en: 'Apricots',
      uz: 'O\'riklar',
    },
    caliber: {
      ru: 'Калибр',
      en: 'Caliber',
      uz: 'Kalibr',
    },
    weight: {
      ru: 'Вес',
      en: 'Weight',
      uz: 'Og\'irlik',
    },
    season: {
      ru: 'Сезон',
      en: 'Season',
      uz: 'Mavsum',
    },
    learnMore: {
      ru: 'Подробнее',
      en: 'Learn more',
      uz: 'Batafsil',
    },
    varietiesTitle: {
      ru: 'Более 10 сортов',
      en: 'More than 10 varieties',
      uz: '10 dan ortiq navlar',
    },
    varietiesText: {
      ru: 'В наших садах выращивается более 10 сортов нектаринов и абрикосов, завезенных из Франции от компании DALIVAL — одного из ведущих питомников Европы.',
      en: 'More than 10 varieties of nectarines and apricots imported from France from DALIVAL company, one of the leading nurseries in Europe, are grown in our orchards.',
      uz: 'Bizning bog\'larimizda Fransiyadan, Yevropaning yetakchi ko\'chatxonalaridan biri bo\'lgan DALIVAL kompaniyasidan olib kelingan 10 dan ortiq nektarin va o\'rik navlari yetishtiriladi.',
    },
  }

  const ProductCard = ({ product }: { product: Product }) => (
    <Link href={`/products/${product.id}`} className="product-card">
      <div className="product-image-wrapper">
        <Image
          src={product.image}
          alt={product.name[language]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="product-image"
        />
        <div className="product-overlay">
          <span className="learn-more-btn">{labels.learnMore[language]}</span>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name[language]}</h3>
        <p className="product-description">{product.shortDescription[language]}</p>
        <div className="product-specs">
          <div className="spec-item">
            <span className="spec-label">{labels.caliber[language]}</span>
            <span className="spec-value">{product.caliber}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">{labels.weight[language]}</span>
            <span className="spec-value">{product.weight}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">{labels.season[language]}</span>
            <span className="spec-value">{product.season}</span>
          </div>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">{labels.pageLabel[language]}</span>
          <h1>{labels.title[language]}</h1>
          <p>{labels.subtitle[language]}</p>
        </div>
      </section>

      {/* Нектарины */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-icon">🍑</span>
            <h2>{labels.nectarines[language]}</h2>
          </div>
          <div className="products-grid">
            {nectarines.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Абрикосы */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-icon">🍊</span>
            <h2>{labels.apricots[language]}</h2>
          </div>
          <div className="products-grid">
            {apricots.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Информация о сортах */}
      <section className="section">
        <div className="container">
          <div className="varieties-info">
            <h2>{labels.varietiesTitle[language]}</h2>
            <p>{labels.varietiesText[language]}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

