interface LasertagTariff {
  id: string;
  title: string;
  capacity: string;
  description: string;
  weekdayPrice: string;
  weekendPrice: string;
}

export const lasertagTariffs: LasertagTariff[] = [
  {
    id: 'all-inclusive',
    title: 'Пакет «Все включено»',
    capacity: 'До 15 человек',
    description: 'Беседка 5 ч. + лазертаг 1,5 ч.',
    weekdayPrice: '13\u00a0000\u00a0₽',
    weekendPrice: '15\u00a0000\u00a0₽',
  },
  {
    id: 'big-party',
    title: 'Пакет «Большая тусовка»',
    capacity: 'До 25 человек',
    description: 'Беседка 6 ч. + лазертаг 2 ч. волнами',
    weekdayPrice: '22\u00a0000\u00a0₽',
    weekendPrice: '25\u00a0000\u00a0₽',
  },
  {
    id: 'express',
    title: 'Услуга «Экспресс-игра»',
    capacity: 'До 12 человек',
    description: 'Лазертаг 45–50 мин.',
    weekdayPrice: '5\u00a0000\u00a0₽',
    weekendPrice: '6\u00a0000\u00a0₽',
  },
  {
    id: 'individual',
    title: 'Индивидуальный формат',
    capacity: 'От 8 человек',
    description: 'Лазертаг 1 ч.',
    weekdayPrice: '800\u00a0₽/чел.',
    weekendPrice: '800–900\u00a0₽/чел.',
  },
];
