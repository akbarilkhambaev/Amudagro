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
        title: 'AMUDAGRO — Premium Fruits from Uzbekistan to the World',
        subtitle: 'Мы выращиваем высококачественные абрикосы, нектарины и персики в современных интенсивных садах Хорезма.',
        description: 'Наша продукция соответствует международным стандартам',
        tagline: 'Свежесть. Качество. Надёжность.',
        cta: 'Связаться с нами',
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
    },
    about: {
      title: 'О компании',
      subtitle: 'Кто мы',
      description: 'AMUDAGRO — современное агропредприятие, специализирующееся на выращивании премиальных фруктов для внутреннего и международного рынка.',
      mission: {
        title: 'Миссия',
        text: 'Создавать натуральные, свежие и безопасные фрукты высшего качества, используя современные технологии, международный опыт и экологичный подход.',
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
      title: 'Контакты',
      subtitle: 'Свяжитесь с нами',
      address: {
        title: 'Адрес',
        value: 'Хорезмская область, Республика Узбекистан',
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
        message: 'Сообщение',
        send: 'Отправить сообщение',
      },
    },
    footer: {
      description: 'Премиальные фрукты из Узбекистана в мир',
      navigation: 'Навигация',
      contacts: 'Контакты',
      rights: 'Все права защищены',
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
        title: 'AMUDAGRO — Premium Fruits from Uzbekistan to the World',
        subtitle: 'We grow high-quality apricots, nectarines and peaches in modern intensive orchards of Khorezm.',
        description: 'Our products meet international standards',
        tagline: 'Freshness. Quality. Reliability.',
        cta: 'Contact Us',
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
    },
    about: {
      title: 'About Company',
      subtitle: 'Who We Are',
      description: 'AMUDAGRO is a modern agricultural enterprise specializing in growing premium fruits for domestic and international markets.',
      mission: {
        title: 'Mission',
        text: 'To create natural, fresh and safe fruits of the highest quality using modern technologies, international experience and an eco-friendly approach.',
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
      title: 'Contacts',
      subtitle: 'Get in Touch',
      address: {
        title: 'Address',
        value: 'Khorezm Region, Republic of Uzbekistan',
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
        message: 'Message',
        send: 'Send Message',
      },
    },
    footer: {
      description: 'Premium Fruits from Uzbekistan to the World',
      navigation: 'Navigation',
      contacts: 'Contacts',
      rights: 'All rights reserved',
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
        subtitle: 'Biz Xorazmning zamonaviy intensiv bog\'larida yuqori sifatli o\'rik, nektarin va shaftoli yetishtiramiz.',
        description: 'Bizning mahsulotlarimiz xalqaro standartlarga javob beradi',
        tagline: 'Yangilik. Sifat. Ishonchlilik.',
        cta: 'Biz bilan bog\'laning',
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
    },
    about: {
      title: 'Kompaniya haqida',
      subtitle: 'Biz kimmiz',
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
      title: 'Kontaktlar',
      subtitle: 'Biz bilan bog\'laning',
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
        message: 'Xabar',
        send: 'Xabar yuborish',
      },
    },
    footer: {
      description: 'O\'zbekistondan dunyoga premium mevalar',
      navigation: 'Navigatsiya',
      contacts: 'Kontaktlar',
      rights: 'Barcha huquqlar himoyalangan',
    },
    language: 'uz' as const,
  },
}

