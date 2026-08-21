import { link } from "fs"

export type Language = 'ru' | 'en' | 'uz'

export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'О компании',
      products: 'Продукция',
      export: 'Экспорт',
      gallery: 'Галерея',
      contacts: 'Контакты',
    },
    home: {
      hero: {
        label:'Приглашаем к сотрудничеству',
        title: 'AMUDAGRO — Сочетание вкуса и инноваций',
        subtitle: 'Мы выращиваем высококачественные абрикосы и нектарины в современных интенсивных садах Узбекистана.',
        description: 'Наша продукция соответствует международным стандартам',
        tagline: 'Свежесть. Качество. Надёжность.',
        cta: 'Связаться с нами',
        products :'Наши продукты',
      },
      features: {
        title: 'Наши преимущества',
        modern: {
          title: 'Современные технологии',
          desc: 'Интенсивные технологии выращивания',
        },
        irrigation: {
          title: 'Система орошения',
          desc: 'Собственная система орошения и ухода',
        },
        partnerships: {
          title: 'Международные партнерства',
          desc: 'Прямые международные партнерства',
        },
        quality: {
          title: 'Высокие стандарты',
          desc: 'Высокие стандарты сортировки и упаковки',
        },
      },
      mafRoda: {
        title: 'Современная сортировка — MAF Roda (Франция)',
        desc: 'Профессиональная сортировочная линия обеспечивает автоматическую калибровку и отбор по качеству',
      },
      shorts: {
        label: 'Видео',
        title: 'AMUDAGRO в коротких видео',
      },
    },
    about: {
      title: 'О компании',
      label: 'О компании',
      subtitle: 'Кто мы',
      link : 'Больше фото',
      readMore: 'Подробнее',
      description: 'AMUDAGRO — современное агропредприятие, специализирующееся на выращивании премиальных фруктов для внутреннего и международного рынков.',
      mission: {
        title: 'Миссия',
        text: 'Наша цель создавать натуральные, свежие и безопасные фрукты высшего качества, используя современные технологии, международный опыт и экологичный подход.',
      },
      advantages: {
        title: 'Наши преимущества',
        items: [
          'современные интенсивные технологии выращивания',
          'собственная система орошения и ухода',
          'прямые международные партнерства',
          'высокие стандарты сортировки и упаковки',
        ],
      },
      history: {
        title: 'История',
        text: 'Агрохолдинг «AMUDAGRO» владеет более 110 га сельскохозяйственных земель в Хорезмской области Республики Узбекистан. Основным видом деятельности является выращивание и продажа свежих фруктов. Посадка первого проекта фруктового сада началась в 2022 году на территории более 35 га с применением передовых мировых технологий. Были завезены новейшие сорта фруктовых саженцев из Франции, от компании DALIVAL, которая является одним из ведущих питомников Европы. Капельная оросительная система сада проведена компанией NETAFIM, которая является мировым лидером в отрасли капельного орошения.',
      },
      varieties: {
        title: 'Сорта',
        text: 'На данный момент в садах производятся более 10 сортов качественных Нектаринов и Абрикосов. Наши фрукты имеют очень хорошие вкусовые качества и товарный вид, а также отличаются устойчивой транспортабельностью и хранением.',
      },
    },
    products: {
      title: 'Наша продукция',
      subtitle: 'Премиальные фрукты из Узбекистана',
      nectarines: {
        title: 'Нектарины',
        description: 'Сладкие, ароматные и плотные. Идеальны для экспорта благодаря отличной транспортабельности.',
      },
      apricots: {
        title: 'Абрикосы',
        description: 'Солнечные и ароматные, с высокими вкусовыми характеристиками.',
      },
      technical: 'Техническая информация',
      nectarinesTech: [
        'Отличная транспортабельность',
        'Высокие вкусовые качества',
        'Плотная мякоть',
        'Ароматный запах',
      ],
      apricotsTech: [
        'Солнечный цвет',
        'Высокие вкусовые характеристики',
        'Ароматная мякоть',
        'Отличное хранение',
      ],
    },
    export: {
      label: 'Международный экспорт',
      title: 'Экспорт',
      subtitle: 'Фрукты мирового уровня',
      description: 'AMUDAGRO ориентирован на экспорт в Европу, Ближний Восток и страны СНГ. Мы инвестируем в технологии, которые позволяют соответствовать международным требованиям к качеству, калибровке и упаковке фруктов.',
      mafRoda: {
        title: 'Современная сортировка — MAF Roda (Франция)',
        description: 'Мы внедряем профессиональную сортировочную линию MAF Roda, что обеспечивает:',
        items: [
          'автоматическую калибровку по размеру и весу',
          'отбор по цвету и качеству',
          'минимизацию человеческого фактора',
          'стабильность поставок для международных клиентов',
        ],
      },
      process: {
        steps: [
          {
            title: 'Современная сортировка — MAF Roda (Франция)',
            text: 'Профессиональная автоматизированная линия сортировки фруктов, обеспечивающая высокую производительность и точность.',
          },
          {
            title: 'Калибровка по размеру, весу и по дефектам',
            text: 'Точная автоматическая сортировка без человеческого фактора. Каждый плод проходит индивидуальную оценку.',
          },
          {
            title: 'Отбор по цвету и качеству',
            text: 'Оптические сенсоры анализируют цвет, форму, внешние и внутренние дефекты, обеспечивая стабильное премиум-качество.',
          },
          {
            title: 'Упаковка и охлаждение',
            text: 'Предохлаждение, контролируемое хранение и упаковка по международным стандартам для сохранения свежести.',
          },
          {
            title: 'Стабильность поставок',
            text: 'Единый стандарт качества для международных клиентов. Надёжные партнёрства с импортёрами по всему миру.',
          },
        ],
      },
      packaging: {
        title: 'Упаковка и охлаждение',
        description: 'Мы соблюдаем международные стандарты:',
        items: [
          'предохлаждение',
          'холодильное хранение',
          'профессиональная упаковка согласно требованиям импортёров',
        ],
      },
      geography: {
        title: 'География поставок',
        text: 'Наши фрукты экспортируются в Россию, Европу и страны Ближнего Востока.',
      },
    },
    gallery: {
      title: 'Галерея',
      subtitle: 'Наши сады и продукция',
      categories: {
        orchard: 'Сад',
        harvest: 'Уборка урожая',
        fruits: 'Фрукты',
        video: 'Видео',
      },
    },
    contacts: {
      label: 'Связаться с нами',
      title: 'Контакты',
      subtitle: 'Свяжитесь с нами',
      location: 'Наше местоположение',
      address: {
        title: 'Адрес',
        value: 'Республика Узбекистан, Хорезмская область, Ургенч ул.Хонка 165',
      },
      phone: {
        title: 'Телефон',
      },
      email: {
        title: 'Email',
      },
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      form: {
        name: 'Имя',
        email: 'Email',
        phone: 'Телефон',
        message: 'Сообщение',
        send: 'Отправить сообщение',
        namePlaceholder: 'Ваше имя',
        emailPlaceholder: 'email@example.com',
        phonePlaceholder: '+998 XX XXX XX XX',
        messagePlaceholder: 'Ваше сообщение...',
      },
    },
    footer: {
      description: 'Премиальные фрукты из Узбекистана',
      navigation: 'Навигация',
      information: 'Информация',
      contacts: 'Контакты',
      rights: 'Все права защищены',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
    },
    language: 'ru' as const,
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      export: 'Export',
      gallery: 'Gallery',
      contacts: 'Contacts',
    },
    home: {
      hero: {
        label : 'Invitation to cooperate',
        title: 'AMUDAGRO — Where taste meets innovation',
        subtitle: 'We grow high-quality apricots and nectarines in modern intensive orchards of Uzbekistan.',
        description: 'Our products meet international standards',
        tagline: 'Freshness. Quality. Reliability.',
        cta: 'Contact Us',
        products: 'Our products',
      },
      features: {
        title: 'Our Advantages',
        modern: {
          title: 'Modern Technologies',
          desc: 'Intensive growing technologies',
        },
        irrigation: {
          title: 'Irrigation System',
          desc: 'Own irrigation and care system',
        },
        partnerships: {
          title: 'International Partnerships',
          desc: 'Direct international partnerships',
        },
        quality: {
          title: 'High Standards',
          desc: 'High standards of sorting and packaging',
        },
      },
      mafRoda: {
        title: 'Modern Sorting — MAF Roda (France)',
        desc: 'Professional sorting line ensures automatic calibration and quality selection',
      },
      shorts: {
        label: 'Video',
        title: 'AMUDAGRO in Short Videos',
      },
    },
    about: {
      title: 'About Company',
      label: 'About Company',
      subtitle: 'Who We Are',
      link : 'More photos',
      readMore: 'Learn More',
      description: 'AMUDAGRO is a modern agricultural enterprise specializing in growing premium fruits for domestic and international markets.',
      mission: {
        title: 'Mission',
        text: 'Our mission is to deliver natural, fresh, and safe fruits of the highest quality through modern technologies, international expertise, and an eco-friendly approach.',
      },
      advantages: {
        title: 'Our Advantages',
        items: [
          'modern intensive growing technologies',
          'own irrigation and care system',
          'direct international partnerships',
          'high standards of sorting and packaging',
        ],
      },
      history: {
        title: 'History',
        text: 'Agroholding "AMUDAGRO" owns more than 110 hectares of agricultural land in Khorezm region of the Republic of Uzbekistan. The main activity is growing and selling fresh fruits. The planting of the first fruit orchard project began in 2022 on an area of more than 35 hectares using advanced world technologies. The newest varieties of fruit seedlings were imported from France, from DALIVAL company, which is one of the leading nurseries in Europe. The drip irrigation system of the orchard was installed by NETAFIM company, which is a world leader in drip irrigation industry.',
      },
      varieties: {
        title: 'Varieties',
        text: 'Currently, more than 10 varieties of high-quality Nectarines and Apricots are produced in the orchards. Our fruits have very good taste qualities and commercial appearance, as well as excellent transportability and storage.',
      },
    },
    products: {
      title: 'Our Products',
      subtitle: 'Premium Fruits from Uzbekistan',
      nectarines: {
        title: 'Nectarines',
        description: 'Sweet, aromatic and firm. Ideal for export due to excellent transportability.',
      },
      apricots: {
        title: 'Apricots',
        description: 'Sunny and aromatic with high taste characteristics.',
      },
      technical: 'Technical Information',
      nectarinesTech: [
        'Excellent transportability',
        'High taste qualities',
        'Firm flesh',
        'Aromatic smell',
      ],
      apricotsTech: [
        'Sunny color',
        'High taste characteristics',
        'Aromatic flesh',
        'Excellent storage',
      ],
    },
    export: {
      label: 'International Export',
      title: 'Export',
      subtitle: 'World-Class Fruits',
      description: 'AMUDAGRO is focused on exports to Europe, the Middle East and CIS countries. We invest in technologies that allow us to meet international requirements for quality, calibration and fruit packaging.',
      mafRoda: {
        title: 'Modern Sorting — MAF Roda (France)',
        description: 'We implement a professional MAF Roda sorting line, which ensures:',
        items: [
          'automatic calibration by size and weight',
          'selection by color and quality',
          'minimization of human factor',
          'stable supplies for international clients',
        ],
      },
      process: {
        steps: [
          {
            title: 'Modern Sorting — MAF Roda (France)',
            text: 'Professional automated fruit sorting line ensuring high productivity and accuracy.',
          },
          {
            title: 'Calibration by Size, Weight and Defects',
            text: 'Precise automatic sorting without human factor. Each fruit undergoes individual assessment.',
          },
          {
            title: 'Color and Quality Selection',
            text: 'Optical sensors analyze color, shape, external and internal defects, ensuring consistent premium quality.',
          },
          {
            title: 'Packaging and Cooling',
            text: 'Pre-cooling, controlled storage and packaging according to international standards to preserve freshness.',
          },
          {
            title: 'Supply Stability',
            text: 'Unified quality standard for international clients. Reliable partnerships with importers worldwide.',
          },
        ],
      },
      packaging: {
        title: 'Packaging and Cooling',
        description: 'We comply with international standards:',
        items: [
          'pre-cooling',
          'cold storage',
          'professional packaging according to importers requirements',
        ],
      },
      geography: {
        title: 'Supply Geography',
        text: 'Our fruits are exported to Russia, Europe and Middle East countries.',
      },
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Our Orchards and Products',
      categories: {
        orchard: 'Orchard',
        harvest: 'Harvest',
        fruits: 'Fruits',
        video: 'Video',
      },
    },
    contacts: {
      label :'Contact Us',
      title: 'Contacts',
      subtitle: 'Get in Touch',
      location: 'Our Location',
      address: {
        title: 'Address',
        value: 'Republic of Uzbekistan, Khorezm Region, Urgench Khonka st.165 ',
      },
      phone: {
        title: 'Phone',
      },
      email: {
        title: 'Email',
      },
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        send: 'Send Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'email@example.com',
        phonePlaceholder: '+998 XX XXX XX XX',
        messagePlaceholder: 'Your message...',
      },
    },
    footer: {
      description: 'Premium Fruits from Uzbekistan',
      navigation: 'Navigation',
      information: 'Information',
      contacts: 'Contacts',
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
    language: 'en' as const,
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Kompaniya haqida',
      products: 'Mahsulotlar',
      export: 'Eksport',
      gallery: 'Galereya',
      contacts: 'Kontaktlar',
    },
    home: {
      hero: {
        title: 'AMUDAGRO — O\'zbekistondan dunyoga premium mevalar',
        subtitle: 'Biz O\'zbekistonning zamonaviy intensiv bog\'larida yuqori sifatli o\'rik va nektarin yetishtiramiz.',
        description: 'Bizning mahsulotlarimiz xalqaro standartlarga javob beradi',
        tagline: 'Yangilik. Sifat. Ishonchlilik.',
        cta: 'Biz bilan bog\'laning',
        products :'Bizning maxsulotlar',
      },
      features: {
        title: 'Bizning afzalliklarimiz',
        modern: {
          title: 'Zamonaviy texnologiyalar',
          desc: 'Intensiv yetishtirish texnologiyalari',
        },
        irrigation: {
          title: 'Suv ta\'minoti tizimi',
          desc: 'O\'z suv ta\'minoti va parvarishlash tizimi',
        },
        partnerships: {
          title: 'Xalqaro hamkorliklar',
          desc: 'To\'g\'ridan-to\'g\'ri xalqaro hamkorliklar',
        },
        quality: {
          title: 'Yuqori standartlar',
          desc: 'Saralash va qadoqlashning yuqori standartlari',
        },
      },
      mafRoda: {
        title: 'Zamonaviy saralash — MAF Roda (Fransiya)',
        desc: 'Professional saralash liniyasi avtomatik kalibratsiya va sifat bo\'yicha tanlashni ta\'minlaydi',
      },
      shorts: {
        label: 'Video',
        title: 'AMUDAGRO qisqa videolarda',
      },
    },
    about: {
      title: 'Kompaniya haqida',
      label: 'Kompaniya haqida',
      subtitle: 'Biz kimmiz',
      link : 'Koproq rasmlar',
      readMore: 'Batafsil',
      description: 'AMUDAGRO — ichki va xalqaro bozorlar uchun premium mevalar yetishtirishga ixtisoslashgan zamonaviy qishloq xo\'jalik korxonasi.',
      mission: {
        title: 'Missiya',
        text: 'Zamonaviy texnologiyalar, xalqaro tajriba va ekologik yondashuvdan foydalanib, eng yuqori sifatli tabiiy, yangi va xavfsiz mevalar yaratish.',
      },
      advantages: {
        title: 'Bizning afzalliklarimiz',
        items: [
          'zamonaviy intensiv yetishtirish texnologiyalari',
          'o\'z suv ta\'minoti va parvarishlash tizimi',
          'to\'g\'ridan-to\'g\'ri xalqaro hamkorliklar',
          'saralash va qadoqlashning yuqori standartlari',
        ],
      },
      history: {
        title: 'Tarix',
        text: 'Agroxolding "AMUDAGRO" O\'zbekiston Respublikasi Xorazm viloyatida 110 gektardan ortiq qishloq xo\'jaligi yerlariga ega. Asosiy faoliyat turi yangi mevalar yetishtirish va sotishdir. Birinchi meva bog\'i loyihasining ekish ishlari 2022 yilda 35 gektardan ortiq maydonda ilg\'or jahon texnologiyalarini qo\'llash bilan boshlandi. Meva ko\'chatlarining eng yangi navlari Fransiyadan, Yevropaning yetakchi ko\'chatxonalaridan biri bo\'lgan DALIVAL kompaniyasidan olib kelingan. Bog\'ning tomchili sug\'orish tizimi tomchili sug\'orish sohasida jahon yetakchisi bo\'lgan NETAFIM kompaniyasi tomonidan o\'rnatilgan.',
      },
      varieties: {
        title: 'Navlar',
        text: 'Hozirgi vaqtda bog\'larda 10 dan ortiq yuqori sifatli Nektarin va O\'rik navlari yetishtirilmoqda. Bizning mevalarimiz juda yaxshi ta\'m xususiyatlariga va tovar ko\'rinishiga ega, shuningdek, barqaror tashish va saqlash bilan ajralib turadi.',
      },
    },
    products: {
      title: 'Bizning mahsulotlarimiz',
      subtitle: 'O\'zbekistondan premium mevalar',
      nectarines: {
        title: 'Nektarinlar',
        description: 'Shirin, xushbo\'y va qattiq. Ajoyib tashish xususiyati tufayli eksport uchun ideal.',
      },
      apricots: {
        title: 'O\'riklar',
        description: 'Quyoshli va xushbo\'y, yuqori ta\'m xususiyatlariga ega.',
      },
      technical: 'Texnik ma\'lumot',
      nectarinesTech: [
        'Ajoyib tashish xususiyati',
        'Yuqori ta\'m sifatlari',
        'Qattiq go\'sht',
        'Xushbo\'y hid',
      ],
      apricotsTech: [
        'Quyoshli rang',
        'Yuqori ta\'m xususiyatlari',
        'Xushbo\'y go\'sht',
        'Ajoyib saqlash',
      ],
    },
    export: {
      label: 'Xalqaro eksport',
      title: 'Eksport',
      subtitle: 'Jahon darajasidagi mevalar',
      description: 'AMUDAGRO Yevropa, Yaqin Sharq va MDH mamlakatlariga eksportga yo\'naltirilgan. Biz sifat, kalibratsiya va meva qadoqlash bo\'yicha xalqaro talablarga javob berishga imkon beradigan texnologiyalarga sarmoya kiritamiz.',
      mafRoda: {
        title: 'Zamonaviy saralash — MAF Roda (Fransiya)',
        description: 'Biz professional MAF Roda saralash liniyasini joriy qilamiz, bu quyidagilarni ta\'minlaydi:',
        items: [
          'o\'lcham va og\'irlik bo\'yicha avtomatik kalibratsiya',
          'rang va sifat bo\'yicha tanlash',
          'inson omilini minimallashtirish',
          'xalqaro mijozlar uchun barqaror yetkazib berish',
        ],
      },
       process: {
        steps: [
          {
            title: 'Modern Sorting — MAF Roda (France)',
            text: 'Professional automated fruit sorting line ensuring high productivity and accuracy.',
          },
          {
            title: 'Calibration by Size, Weight and Defects',
            text: 'Precise automatic sorting without human factor. Each fruit undergoes individual assessment.',
          },
          {
            title: 'Color and Quality Selection',
            text: 'Optical sensors analyze color, shape, external and internal defects, ensuring consistent premium quality.',
          },
          {
            title: 'Packaging and Cooling',
            text: 'Pre-cooling, controlled storage and packaging according to international standards to preserve freshness.',
          },
          {
            title: 'Supply Stability',
            text: 'Unified quality standard for international clients. Reliable partnerships with importers worldwide.',
          },
        ],
      },
      packaging: {
        title: 'Qadoqlash va sovutish',
        description: 'Biz xalqaro standartlarga rioya qilamiz:',
        items: [
          'oldindan sovutish',
          'muzlatilgan saqlash',
          'import qiluvchilar talablariga muvofiq professional qadoqlash',
        ],
      },
      geography: {
        title: 'Yetkazib berish geografiyasi',
        text: 'Bizning mevalarimiz Rossiya, Yevropa va Yaqin Sharq mamlakatlariga eksport qilinadi.',
      },
    },
    gallery: {
      title: 'Galereya',
      subtitle: 'Bizning bog\'larimiz va mahsulotlarimiz',
      categories: {
        orchard: 'Bog\'',
        harvest: 'Hosil yig\'ish',
        fruits: 'Mevalar',
        video: 'Video',
      },
    },
    contacts: {
      label: 'Biz bilan bog\'laning',
      title: 'Kontaktlar',
      subtitle: 'Biz bilan bog\'laning',
      location: 'Bizning manzilimiz',
      address: {
        title: 'Manzil',
        value: 'Xorazm viloyati, O\'zbekiston Respublikasi',
      },
      phone: {
        title: 'Telefon',
      },
      email: {
        title: 'Email',
      },
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      form: {
        name: 'Ism',
        email: 'Email',
        phone: 'Telefon',
        message: 'Xabar',
        send: 'Xabar yuborish',
        namePlaceholder: 'Ismingiz',
        emailPlaceholder: 'email@example.com',
        phonePlaceholder: '+998 XX XXX XX XX',
        messagePlaceholder: 'Xabaringiz...',
      },
    },
    footer: {
      description: 'O\'zbekistondan dunyoga premium mevalar',
      navigation: 'Navigatsiya',
      information: 'Ma\'lumot',
      contacts: 'Kontaktlar',
      rights: 'Barcha huquqlar himoyalangan',
      privacy: 'Maxfiylik siyosati',
      terms: 'Foydalanish shartlari',
    },
    language: 'uz' as const,
  },
}

