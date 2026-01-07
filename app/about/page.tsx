'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import './page.css'

export default function About() {
  const { language } = useLanguage()

  const content = {
    ru: {
      heroLabel: 'О компании',
      heroTitle: 'AMUDAGRO',
      heroSubtitle: 'Высокотехнологичный агрохолдинг',
      aboutTitle: 'О компании',
      aboutText: 'AMUDAGRO — высокотехнологичный агрохолдинг, специализирующийся на промышленном выращивании косточковых фруктов высокого-класса для внутреннего и международного рынков. Мы объединяем природный потенциал Узбекистана с лучшими мировыми практиками, создавая продукт, отвечающий самым строгим стандартам качества.',
      missionTitle: 'Миссия',
      missionText: 'Наша цель — обеспечение потребителей натуральными, свежими и безопасными фруктами. В основе нашей стратегии лежат три принципа: использование инновационных технологий, опора на международный экспертный опыт и приверженность принципам экологической ответственности.',
      productionTitle: 'Производственная база и технологии',
      productionText: 'На сегодняшний день агрохолдинг управляет земельным фондом площадью более 110 га в Хорезмской области (Республика Узбекистан). Развитие проекта началось в 2022 году с закладки интенсивного сада площадью 35 га.',
      geneticTitle: 'Генетический фонд',
      geneticText: 'В садах высажены новейшие сертифицированные сорта из французского питомника DALIVAL — одного из ведущих центров селекции в Европе.',
      irrigationTitle: 'Интеллектуальный полив',
      irrigationText: 'Ирригационная система спроектирована и внедрена компанией NETAFIM, мировым лидером в области капельного орошения.',
      varietiesTitle: 'Наши сорта',
      varietiesText: 'Мы выращиваем более 10 селекционных сортов нектаринов и абрикосов.',
      varietiesItems: [
        'высокими органолептическими свойствами и безупречным вкусом',
        'эталонным товарным видом для ритейла',
        'превосходной транспортабельностью и длительным сроком хранения',
      ],
      teamTitle: 'Команда',
      teamText: 'Агрономическая служба AMUDAGRO состоит из специалистов с глубокой теоретической базой и многолетним практическим стажем. Они регулярно принимают участие в профильных семинарах и конференциях для повышения квалификации. Научное и практическое сопровождение проекта осуществляет международный консультант из Франции — Жан-Марк Одергон, обладающий обширным опытом в области промышленного садоводства. Применение удобрений и средств защиты растений строго регламентировано и осуществляется в полном соответствии с мировыми стандартами безопасности.',
      stats: {
        area: '110+ га',
        areaLabel: 'земельный фонд',
        varieties: '10+ сортов',
        varietiesLabel: 'нектаринов и абрикосов',
        year: 'с 2022',
        yearLabel: 'года на рынке',
      },
    },
    en: {
      heroLabel: 'About Company',
      heroTitle: 'AMUDAGRO',
      heroSubtitle: 'High-tech Agricultural Holding',
      aboutTitle: 'About Company',
      aboutText: 'AMUDAGRO is a high-tech agricultural holding specializing in the industrial cultivation of high-class stone fruits for domestic and international markets. We combine the natural potential of Uzbekistan with the best world practices.',
      missionTitle: 'Mission',
      missionText: 'Our goal is to provide consumers with natural, fresh and safe fruits. Our strategy is based on three principles: innovative technologies, international expertise, and environmental responsibility.',
      productionTitle: 'Production Base and Technologies',
      productionText: 'Today, the holding manages over 110 hectares of land in the Khorezm region. The project development began in 2022 with the establishment of a 35-hectare intensive garden.',
      geneticTitle: 'Genetic Fund',
      geneticText: 'The gardens feature the latest certified varieties from DALIVAL French nursery — one of Europe\'s leading breeding centers.',
      irrigationTitle: 'Smart Irrigation',
      irrigationText: 'The irrigation system is designed and implemented by NETAFIM, a world leader in drip irrigation.',
      varietiesTitle: 'Our Varieties',
      varietiesText: 'We grow more than 10 breeding varieties of nectarines and apricots.',
      varietiesItems: [
        'high organoleptic properties and impeccable taste',
        'reference appearance for retail',
        'excellent transportability and long shelf life',
      ],
      teamTitle: 'Team',
      teamText: 'The AMUDAGRO agronomic service consists of specialists with a deep theoretical background and many years of practical experience. They regularly participate in specialized seminars and conferences to improve their qualifications. The project is scientifically and practically supported by an international consultant from France, Jean-Marc Odergon, who has extensive experience in industrial horticulture. The use of fertilizers and plant protection products is strictly regulated and carried out in full compliance with global safety standards.',
      stats: {
        area: '110+ ha',
        areaLabel: 'land fund',
        varieties: '10+ varieties',
        varietiesLabel: 'of nectarines and apricots',
        year: 'since 2022',
        yearLabel: 'on the market',
      },
    },
    uz: {
      heroLabel: 'Kompaniya haqida',
      heroTitle: 'AMUDAGRO',
      heroSubtitle: 'Yuqori texnologiyali agro-xolding',
      aboutTitle: 'Kompaniya haqida',
      aboutText: 'AMUDAGRO — yuqori sifatli toshli mevalarni sanoat miqyosida yetishtirish bilan shug\'ullanadigan yuqori texnologiyali agro-xolding. Biz O\'zbekistonning tabiiy salohiyatini eng yaxshi jahon amaliyoti bilan birlashtiramiz.',
      missionTitle: 'Missiya',
      missionText: 'Bizning maqsadimiz — iste\'molchilarga tabiiy, yangi va xavfsiz mevalar bilan ta\'minlashdir. Strategiyamiz: innovatsion texnologiyalar, xalqaro ekspert tajribasi va ekologik mas\'uliyat.',
      productionTitle: 'Ishlab chiqarish bazasi va texnologiyalar',
      productionText: 'Bugungi kunda xolding Xorazm viloyatida 110 gektardan ortiq yer fondini boshqaradi. Loyiha 2022 yilda 35 gektar intensiv bog\' yaratish bilan boshlangan.',
      geneticTitle: 'Genetik fond',
      geneticText: 'Bog\'larda DALIVAL fransuz ko\'chatxonasidan eng yangi sertifikatlangan navlar ekilgan.',
      irrigationTitle: 'Intellektual sug\'orish',
      irrigationText: 'Sug\'orish tizimi NETAFIM kompaniyasi tomonidan loyihalashtirilgan va joriy etilgan.',
      varietiesTitle: 'Bizning navlar',
      varietiesText: 'Biz 10 dan ortiq nektarin va o\'rik navlarini yetishtiramiz.',
      varietiesItems: [
        'yuqori organoleptik xususiyatlar va benuqson ta\'m',
        'chakana savdo uchun etalon ko\'rinish',
        'ajoyib tashish qobiliyati va uzoq saqlash muddati',
      ],
      teamTitle: 'Jamoa',
      teamText: `AMUDAGRO Agronomiya xizmati chuqur nazariy asosga ega va ko'p yillik amaliy tajribaga ega mutaxassislardan iborat. Ular muntazam ravishda malaka oshirish uchun ixtisoslashtirilgan seminar va konferentsiyalarda qatnashadilar.MUDAGRO Agronomiya xizmati chuqur nazariy asosga ega va ko'p yillik amaliy tajribaga ega mutaxassislardan iborat. Ular muntazam ravishda malaka oshirish uchun ixtisoslashtirilgan seminar va konferentsiyalarda qatnashadilar. Loyihani ilmiy va amaliy qo'llab — quvvatlash Fransiyaning xalqaro maslahatchisi Jan-Mark Odergon tomonidan amalga oshiriladi,`,
      stats: {
        area: '110+ ga',
        areaLabel: 'yer fondi',
        varieties: '10+ nav',
        varietiesLabel: 'nektarin va o\'rik',
        year: '2022 yildan',
        yearLabel: 'bozorda',
      },
    },
  }

  const t = content[language]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="hero-label">{t.heroLabel}</span>
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="image-text-section">
        <div className="container">
          <div className="image-text-grid">
            <div className="image-side">
              <div className="image-wrapper">

                                <Image
                  src="/process/about.avif"
                  alt="Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="section-image"
                />
              </div>
            </div>
            <div className="text-side">
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Green Background */}
      <section className="green-section">
        <div className="container">
          <div className="green-content">
            <div className="green-text-block">
              <h2>{t.missionTitle}</h2>
              <p>{t.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Section with Image */}
      <section className="image-text-section reverse">
        <div className="container">
          <div className="image-text-grid">
            <div className="text-side">
              <h2>{t.productionTitle}</h2>
              <p>{t.productionText}</p>
              
              <div className="info-blocks">
                <div className="info-block">
                  <h3>{t.geneticTitle}</h3>
                  <p>{t.geneticText}</p>
                </div>
                <div className="info-block">
                  <h3>{t.irrigationTitle}</h3>
                  <p>{t.irrigationText}</p>
                </div>
              </div>
            </div>
            <div className="image-side">
              <div className="image-wrapper">

                                <video
                  src="/process/netafim.mp4"
                  className="section-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Light Green */}
      <section className="light-green-section">
        <div className="container">
          <h2 className="section-title">{t.varietiesTitle}</h2>
          <p className="section-subtitle">{t.varietiesText}</p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <Image
                  src="/process/planet-earth.png"
                  alt="Земельный фонд"
                  width={80}
                  height={80}
                  className="stat-icon-image"
                />
              </div>
              <div className="stat-value">{t.stats.area}</div>
              <div className="stat-label">{t.stats.areaLabel}</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Image
                  src="/process/peach.png"
                  alt="Сорта"
                  width={80}
                  height={80}
                  className="stat-icon-image"
                />
              </div>
              <div className="stat-value">{t.stats.varieties}</div>
              <div className="stat-label">{t.stats.varietiesLabel}</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Image
                  src="/process/calendar.png"
                  alt="Год основания"
                  width={80}
                  height={80}
                  className="stat-icon-image"
                />
              </div>
              <div className="stat-value">{t.stats.year}</div>
              <div className="stat-label">{t.stats.yearLabel}</div>
            </div>
          </div>
          
          <div className="features-list">
            {t.varietiesItems.map((item, index) => (
              <div key={index} className="feature-item">
                <span className="feature-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Image */}
      <section className="image-text-section">
        <div className="container">
          <div className="image-text-grid">
            <div className="image-side">
              <div className="image-wrapper">
                <Image
                  src="/process/team.avif"
                  alt="Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="section-image"
                />
              </div>
            </div>
            <div className="text-side">
              <h2>{t.teamTitle}</h2>
              <p>{t.teamText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
