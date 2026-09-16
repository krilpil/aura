import type { IHeroPromo } from '../model';

const heroPromos: IHeroPromo[] = [
  {
    id: 'summer-events',
    image: {
      src: '/media/promo/summer.png',
      alt: 'Летняя площадка Aura среди леса у воды',
    },
    title: 'Уникальная площадка в Арзамасе',
    description: [
      'Площадка для свадеб, юбилеев, корпоративов',
      'и семейных праздников с ресторанным сервисом среди природы.',
    ].join(' '),
    facts: ['Ресторан', 'Гостевой дом', 'Лазертаг'],
    actions: [
      { label: 'Забронировать дату', variant: 'primary' },
      { label: 'Посмотреть площадку', variant: 'secondary' },
    ],
  },
  {
    id: 'restaurant-halls',
    image: {
      src: '/media/promo/restaurant_inside.png',
      alt: 'Интерьер банкетного зала Aura',
    },
    title: 'Два зала для праздников',
    description: [
      '«Лесная симфония» до 60 гостей и «Большая вода» до 120 гостей:',
      'камерные ужины, пышные свадьбы, выпускные и корпоративные банкеты.',
    ].join(' '),
    facts: ['60 гостей', '120 гостей'],
    actions: [
      { label: 'Выбрать зал', variant: 'primary' },
      { label: 'Узнать меню', variant: 'secondary' },
    ],
  },
  {
    id: 'season-booking',
    image: {
      src: '/media/promo/winter.png',
      alt: 'Зимний вид лесной площадки Aura',
    },
    title: 'Открываем бронь на зимний сезон',
    description: [
      'Пятницы и субботы разбирают первыми.',
      'При бронировании до конца месяца — съедобная картина',
      'с авторскими намазками для фуршета в подарок.',
    ].join(' '),
    facts: ['Подарок к брони', 'Зимние даты'],
    actions: [
      { label: 'Узнать свободные даты', variant: 'primary' },
      { label: 'Получить подарок', variant: 'secondary' },
    ],
  },
  {
    id: 'lasertag',
    image: {
      src: '/media/promo/lasertag.png',
      alt: 'Лазертаг на закрытой лесной территории Aura',
    },
    title: 'Лазертаг для активного праздника',
    description: [
      'Добавьте драйв к корпоративу, выпускному, дню рождения или семейному выезду:',
      'командная игра на закрытой территории среди леса.',
    ].join(' '),
    facts: ['Для компаний', 'Закрытая территория'],
    actions: [
      { label: 'Добавить к мероприятию', variant: 'primary' },
      { label: 'Собрать программу', variant: 'secondary' },
    ],
  },
];

export const getHeroPromos = () => heroPromos;
