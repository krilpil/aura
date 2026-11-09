import type { Metadata } from 'next';

export const siteOrigin = new URL(process.env.SITE_URL || 'https://auraplace.ru').origin;
const trailingSlash = process.env.NEXT_STATIC_EXPORT === '1';

export function pageUrl(path: string) {
  if (path === '/' && !trailingSlash) return siteOrigin;

  const normalized = path === '/' ? '/' : `${path.replace(/\/$/, '')}${trailingSlash ? '/' : ''}`;
  return new URL(normalized, siteOrigin).href;
}

interface SeoPage {
  title: string;
  description: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
}

export const seoPages = {
  '/': {
    title: 'AURA — база отдыха в Арзамасе',
    description:
      'База отдыха AURA в Арзамасе: отдых на природе, развлечения и ресторан с авторской кухней. ' +
      'Для встреч с близкими, свадеб, семейных праздников и корпоративов.',
    breadcrumb: 'Главная',
    image: '/media/promo/summer.jpg',
    imageAlt: 'Площадка AURA среди леса у воды в Арзамасе',
  },
  '/restaurant': {
    title: 'Ресторан и банкетные залы в Арзамасе | AURA',
    description:
      'Ресторан AURA: авторская кухня, меню и банкетные залы «Лесная симфония» до 60 и ' +
      '«Большая вода» до 120 гостей. Лес, река и ресторанный сервис.',
    breadcrumb: 'Ресторан',
    image: '/media/restaurant/big-water.webp',
    imageAlt: 'Интерьер ресторана AURA с праздничной сервировкой',
  },
  '/events/weddings': {
    title: 'Свадьба в Арзамасе — банкет и церемония у реки | AURA',
    description:
      'Свадьба в AURA в Арзамасе: выездная церемония у реки, банкетные залы до 60 и 120 ' +
      'гостей, авторская кухня и фуршет среди леса.',
    breadcrumb: 'Свадьбы',
    image: '/media/restaurant/big-water.webp',
    imageAlt: 'Банкетный зал «Большая вода» для свадьбы в AURA',
  },
  '/events/corporate': {
    title: 'Корпоративы и тимбилдинг в Арзамасе | AURA',
    description:
      'Корпоративы, конференции и тимбилдинги в AURA в Арзамасе. Залы до 60 и 120 гостей, ' +
      'проектор и звук, ресторанная кухня и активности на природе.',
    breadcrumb: 'Корпоративные события',
    image: '/media/actions/corporate-hero.jpg',
    imageAlt: 'Площадка AURA для корпоративных мероприятий',
  },
  '/events/graduation': {
    title: 'Выпускной в Арзамасе — праздник на природе | AURA',
    description:
      'Проведите выпускной в AURA в Арзамасе: банкетные залы до 60 и 120 гостей, ' +
      'праздничное меню и активности среди леса у реки.',
    breadcrumb: 'Выпускные',
    image: '/media/restaurant/big-water.webp',
    imageAlt: 'Ресторан AURA для праздничного выпускного вечера',
  },
  '/events/private': {
    title: 'Дни рождения, юбилеи и гендер-пати в Арзамасе | AURA',
    description:
      'Семейные праздники в AURA: дни рождения, юбилеи и гендер-пати в Арзамасе. Залы до 60 ' +
      'и 120 гостей, авторская кухня и атмосфера леса у реки.',
    breadcrumb: 'Частные события',
    image: '/media/restaurant/forest-symphony.webp',
    imageAlt: 'Зал «Лесная симфония» для семейных праздников в AURA',
  },
  '/events/sports': {
    title: 'Спортивный комплекс | AURA',
    description:
      'В AURA в Арзамасе планируется крытое спортивное пространство: большой теннис, футбол, ' +
      'волейбол, баскетбол и сквош. Подробности и сроки открытия сообщим позже.',
    breadcrumb: 'Спортивный комплекс',
    image: '/media/sports/pavilion-exterior-concept.webp',
    imageAlt: 'Концептуальная визуализация спортивного павильона AURA среди берёз',
  },
  '/house/istok': {
    title: 'Аренда домика «Исток» в Арзамасе — отдых без ночлега | AURA',
    description:
      'Домик «Исток» в AURA в Арзамасе для отдыха без ночлега: шашлык, терраса и лес. ' +
      'Аренда — 10 000 ₽ за сутки. Лазертаг согласуется отдельно.',
    breadcrumb: 'Домик «Исток»',
    image:
      '/media/updated_house/' +
      'xkpDy_cvQ-QZ-CT7nLyI54AHVJC3C6i5iWeY-_Rf7HVfIIMmmeq3E0vbkuDI_DvwTyHhtlY1TU7BGCoAqpvpg1LL.jpg',
    imageAlt: 'Домик «Исток» на лесной территории AURA',
  },
  '/house/istok-old': {
    title: 'Гостевой дом «Исток» в Арзамасе — отдых у леса | AURA',
    description:
      'Гостевой дом «Исток» в AURA в Арзамасе: две спальни, терраса и размещение до 6 ' +
      'гостей. Спокойный отдых у леса или проживание после торжества.',
    breadcrumb: 'Гостевой дом «Исток»',
    image: '/media/house/istok/1.jpg',
    imageAlt: 'Гостевой дом «Исток» на лесной территории AURA',
  },
  '/activities': {
    title: 'Активный отдых и лазертаг в Арзамасе | AURA',
    description:
      'Активный отдых в AURA в Арзамасе: лазертаг, сапы, байдарки, волейбол и детская ' +
      'площадка. Дополните праздник или корпоратив отдыхом среди леса у реки.',
    breadcrumb: 'Активный отдых',
    image: '/media/promo/lasertag.jpg',
    imageAlt: 'Лазертаг на лесной территории AURA',
  },
  '/about': {
    title: 'Контакты AURA в Арзамасе — адрес и бронирование',
    description:
      'AURA в Арзамасе: ул. Победы, 19А. Телефон бронирования +7 (999) 395-03-75, маршрут и ' +
      'контакты. Ресторан, банкетные залы и домик для отдыха без ночлега среди леса у реки.',
    breadcrumb: 'О нас',
    image: '/media/promo/summer.jpg',
    imageAlt: 'Территория комплекса AURA в Арзамасе',
  },
} satisfies Record<string, SeoPage>;

export type SeoPath = keyof typeof seoPages;

export function createPageMetadata(path: SeoPath): Metadata {
  const { title, description, image, imageAlt } = seoPages[path];
  const url = pageUrl(path);
  const index = path !== '/house/istok-old';
  const imageUrl = new URL(image, siteOrigin).href;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },

    openGraph: {
      title,
      description,
      url,
      siteName: 'AURA',
      locale: 'ru_RU',
      type: 'website',
      images: [{ url: imageUrl, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
  };
}
