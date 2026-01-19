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
  sugar: string
  season: string
}

// Данные о продуктах
const products: Product[] = [
  // Нектарины
  {
    id: 'Honey Sugar',
    category: 'nectarine',
    image: '/nectarins/honey_sugar.avif',
    name: {
      ru: 'Honey Sugar',
      en: 'Honey Sugar',
      uz: 'Honey Sugar',
    },
    shortDescription: {
      ru: 'Крупный нектарин с красно-желтой кожицей и сладкой желтой мякотью',
      en: 'Large nectarine with red-yellow skin and sweet yellow flesh',
      uz: 'Qizil-sariq po\'stli va shirin sariq go\'shtli yirik nektarin',
    },
    caliber: '65-75 мм',
    sugar: '14° Brix',
    season: '15-25 Июнь',
  },
  {
    id: 'Kinolea',
    category: 'nectarine',
    image: '/nectarins/kinolea.avif',
    name: {
      ru: 'Kinolea',
      en: 'Kinolea',
      uz: 'Kinolea',
    },
    shortDescription: {
      ru: 'Ранний сорт с ярким красным румянцем и плотной желтой мякотью',
      en: 'Early variety with bright red blush and firm yellow flesh',
      uz: 'Yorqin qizil rangdagi va zich sariq go\'shtli erta nav',
    },
    caliber: '65-75 мм',
    sugar: '16° Brix',
    season: '10-15 Июнь',
  },
  {
    id: 'Honey Top',
    category: 'nectarine',
    image: '/nectarins/honey_top.avif',
    name: {
      ru: 'Honey Top',
      en: 'Honey Top',
      uz: 'Honey Top',
    },
    shortDescription: {
      ru: 'Среднеспелый сорт с отличными вкусовыми качествами и желтой мякотью',
      en: 'Mid-season variety with excellent taste qualities and yellow flesh',
      uz: 'A\'lo ta\'m sifatlariga ega sariq go\'shtli o\'rta pishar nav',
    },
    caliber: '65-75 мм',
    sugar: '15° Brix',
    season: '25-30 Июнь',
  },
  {
    id: 'Luciana',
    category: 'nectarine',
    image: '/nectarins/luciana.avif',
    name: {
      ru: 'Luciana',
      en: 'Luciana',
      uz: 'Luciana',
    },
    shortDescription: {
      ru: 'Поздний сорт с высокой транспортабельностью и темно-красным окрасом',
      en: 'Late variety with high transportability and dark red color',
      uz: 'Yuqori tashish qobiliyatiga ega to\'q qizil rangdagi kech nav',
    },
    caliber: '65-75 мм',
    sugar: '15° Brix',
    season: '01-10 Июль',
  },
  {
    id: 'Clariss',
    category: 'nectarine',
    image: '/nectarins/clarris.avif',
    name: {
      ru: 'Clariss',
      en: 'Clariss',
      uz: 'Klariss',
    },
    shortDescription: {
      ru: 'Овальный нектарин с оранжевым окрасом и белой мякотью',
      en: 'Oval nectarine with orange color and white flesh',
      uz: 'To\'q sariq rangdagi va oq go\'shtli oval nektarin',
    },
    caliber: '65-75 мм',
    sugar: '14° Brix',
    season: '15-25 Июль',
  },
  {
    id: 'Conquete',
    category: 'nectarine',
    image: '/nectarins/conquete.avif',
    name: {
      ru: 'Conquete',
      en: 'Conquete',
      uz: 'Conquete',
    },
    shortDescription: {
      ru: 'Ароматный нектарин с золотисто-оранжевым окрасом и белой мякотью',
      en: 'Aromatic nectarine with golden orange color and white flesh',
      uz: 'Oltin-to\'q sariq rangdagi va oq go\'shtli xushbo\'y nektarin',
    },
    caliber: '65-75 мм',
    sugar: '16° Brix',
    season: '01-10 Август',
  },
  // Абрикосы
  {
    id: 'Rubissia',
    category: 'apricot',
    image: '/appricots/rubissia.avif',
    name: {
      ru: 'Rubissia',
      en: 'Rubissia',
      uz: 'Rubissia',
    },
    shortDescription: {
      ru: 'Французский сорт с высоким содержанием сахара и красным окрасом',
      en: 'French variety with high sugar content and red color',
      uz: 'Yuqori shakar miqdoriga ega qizil rangdagi fransuz navi',
    },
    caliber: '40-50 мм',
    sugar: '15° Brix',
    season: '25-30 Май',
  },
  {
    id: 'Bolero',
    category: 'apricot',
    image: '/appricots/bolero.avif',
    name: {
      ru: 'Bolero',
      en: 'Bolero',
      uz: 'Bolero',
    },
    shortDescription: {
      ru: 'Плотный абрикос с ярко-оранжевым окрасом, идеальный для транспортировки',
      en: 'Firm apricot with bright orange color, ideal for transportation',
      uz: 'Yorqin to\'q sariq rangdagi zich o\'rik, tashishga ideal',
    },
    caliber: '40-50 мм',
    sugar: '15° Brix',
    season: '01-10 Июнь',
  },
  {
    id: 'Milord',
    category: 'apricot',
    image: '/appricots/milord.avif',
    name: {
      ru: 'Milord',
      en: 'Milord',
      uz: 'Milord',
    },
    shortDescription: {
      ru: 'Крупный абрикос с оранжево-красным окрасом и высоким сахаром',
      en: 'Large apricot with orange-red color and high sugar content',
      uz: 'To\'q sariq-qizil rangdagi va yuqori shakarli yirik o\'rik',
    },
    caliber: '40-50 мм',
    sugar: '17° Brix',
    season: '05-15 Июль',
  },
  {
    id: 'Madrigal',
    category: 'apricot',
    image: '/appricots/madrigal.avif',
    name: {
      ru: 'Madrigal',
      en: 'Madrigal',
      uz: 'Madrigal',
    },
    shortDescription: {
      ru: 'Премиальный абрикос с глубоким оранжевым цветом и высоким уровнем сахара',
      en: 'Premium apricot with deep orange color and high sugar level',
      uz: 'Chuqur to\'q sariq rangdagi va yuqori shakar darajasiga ega premium o\'rik',
    },
    caliber: '40-50 мм',
    sugar: '19° Brix',
    season: '10-20 Июль',
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
    sugar: {
      ru: 'Сладость',
      en: 'Sugar',
      uz: 'Shakar',
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
        <p className="products-list-description">{product.shortDescription[language]}</p>
        <div className="product-specs">
          <div className="spec-item">
            <span className="spec-label">{labels.caliber[language]}</span>
            <span className="spec-value">{product.caliber}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">{labels.sugar[language]}</span>
            <span className="spec-value">{product.sugar}</span>
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

