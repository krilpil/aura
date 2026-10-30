import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBuilding,
  faChildReaching,
  faFireExtinguisher,
  faFlagCheckered,
  faHeartPulse,
  faMicrophone,
  faPeopleGroup,
  faPersonSkiingNordic,
  faRestroom,
  faScrewdriverWrench,
  faShieldHalved,
  faSquareParking,
  faStopwatch,
  faTableTennisPaddleBall,
  faTemperatureHigh,
  faTicket,
  faTrashCan,
  faTruck,
  faUmbrella,
  faUtensils,
  faVolleyball,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';

export const territoryCategories = ['Все объекты', 'Отдых', 'Спорт', 'Инфраструктура'] as const;

export type TerritoryCategory = (typeof territoryCategories)[number];

interface ITerritoryLocation {
  id: number;
  name: string;
  icon: IconDefinition;
  category: Exclude<TerritoryCategory, 'Все объекты'>;
  description: string;
  points: [number, number][];
}

// Координаты в пунктах PDF. Область карты: x=110…770, y=200…820.
// Названия объектов сохранены по исходной экспликации.
export const territoryLocations: ITerritoryLocation[] = [
  {
    id: 14,
    name: 'Буфет',
    icon: faUtensils,
    category: 'Отдых',
    description: 'Здание буфета в северо-западной части комплекса.',
    points: [[375.78, 376.23]],
  },
  {
    id: 15,
    name: 'Беседки',
    icon: faUmbrella,
    category: 'Отдых',
    description: 'Шесть беседок вдоль западной стороны территории.',
    points: [
      [164.22, 525.99],
      [189.06, 500.31],
      [220.74, 472.35],
      [241.86, 453.27],
      [292.38, 438.51],
      [297.66, 397.71],
    ],
  },
  {
    id: 24,
    name: 'Детская площадка',
    icon: faChildReaching,
    category: 'Отдых',
    description: 'Площадка для детей рядом с административным зданием и парковкой.',
    points: [[206.54, 609.81]],
  },
  {
    id: 21,
    name: 'Оздоровительный центр',
    icon: faHeartPulse,
    category: 'Отдых',
    description: 'Восстановительно-оздоровительный центр в южной части комплекса.',
    points: [[419.82, 527.91]],
  },
  {
    id: 2,
    name: 'Пляжный волейбол',
    icon: faVolleyball,
    category: 'Спорт',
    description: 'Открытая площадка для пляжного волейбола на западной стороне комплекса.',
    points: [[145.12, 563.97]],
  },
  {
    id: 3,
    name: 'Теннис и сквош',
    icon: faTableTennisPaddleBall,
    category: 'Спорт',
    description: 'Крытый зал для тенниса и сквоша круглогодичного пребывания.',
    points: [[483.97, 530.85]],
  },
  {
    id: 16,
    name: 'Лыжная трасса',
    icon: faPersonSkiingNordic,
    category: 'Спорт',
    description:
      'Трасса проходит по центральной и северной частям территории. Старт и финиш расположены внизу схемы.',
    points: [[283.38, 548.07]],
  },
  {
    id: 10,
    name: 'Прокат лыж и касса',
    icon: faTicket,
    category: 'Спорт',
    description: 'Помещение выдачи лыж и касса рядом с раздевалками.',
    points: [[311.34, 567.27]],
  },
  {
    id: 8,
    name: 'Вестибюль-грелка',
    icon: faTemperatureHigh,
    category: 'Спорт',
    description: 'Помещение для обогрева в ряду зданий у лыжной трассы.',
    points: [[255.45, 587.07]],
  },
  ...[
    { id: 9, point: [283.05, 576.87] },
    { id: 12, point: [367.5, 546.39] },
    { id: 13, point: [395.82, 537.39] },
  ].map(({ id, point }) => ({
    id,
    name: `Раздевалка и санузел №${id}`,
    icon: faRestroom,
    category: 'Инфраструктура' as const,
    description: 'Раздевалка с санузлом в ряду зданий вдоль южной стороны трассы.',
    points: [point as [number, number]],
  })),
  {
    id: 20,
    name: 'Парковки',
    icon: faSquareParking,
    category: 'Инфраструктура',
    description:
      'Места для автомобилей отмечены у въезда, на юге и в северо-западной части территории.',
    points: [
      [242.74, 623.91],
      [528.5, 561.33],
      [423.26, 332.25],
    ],
  },
  {
    id: 1,
    name: 'Административное здание',
    icon: faBuilding,
    category: 'Инфраструктура',
    description: 'Административное здание в юго-западной части территории, рядом с парковкой.',
    points: [[215.54, 653.01]],
  },
  {
    id: 17,
    name: 'Пост охраны',
    icon: faShieldHalved,
    category: 'Инфраструктура',
    description: 'Помещение для сторожа у южной границы территории.',
    points: [[225.3, 673.11]],
  },
  {
    id: 18,
    name: 'Гараж спецтехники',
    icon: faTruck,
    category: 'Инфраструктура',
    description: 'Гараж для специальной техники у южной границы комплекса.',
    points: [[264.54, 658.95]],
  },
  {
    id: 11,
    name: 'Склад лыж',
    icon: faWarehouse,
    category: 'Инфраструктура',
    description: 'Склад лыж рядом с пунктом проката и раздевалками.',
    points: [[339.42, 557.07]],
  },
  {
    id: 26,
    name: 'Склад инвентаря',
    icon: faWarehouse,
    category: 'Инфраструктура',
    description: 'Склад инвентаря в центральной части территории.',
    points: [[499.9, 427.59]],
  },
  {
    id: 22,
    name: 'Контейнерная площадка',
    icon: faTrashCan,
    category: 'Инфраструктура',
    description: 'Мусороконтейнерная площадка в восточной части комплекса.',
    points: [[593.5, 549.39]],
  },
  {
    id: 23,
    name: 'Пожарный проезд',
    icon: faFireExtinguisher,
    category: 'Инфраструктура',
    description: 'Проезд для пожарной техники вдоль южной границы комплекса.',
    points: [[445.1, 580.65]],
  },
  ...[
    {
      id: 4,
      name: 'Судейский павильон',
      icon: faFlagCheckered,
      description: 'Временная сборно-разборная конструкция для судейства.',
      point: [370.17, 525.03],
    },
    {
      id: 5,
      name: 'Трибуны',
      icon: faPeopleGroup,
      description: 'Переносные трибуны на 25 посадочных мест.',
      point: [302.13, 529.35],
    },
    {
      id: 6,
      name: 'Павильон комментаторов',
      icon: faMicrophone,
      description: 'Временная сборно-разборная конструкция для комментаторов соревнований.',
      point: [364.65, 453.39],
    },
    {
      id: 7,
      name: 'Навес для техников',
      icon: faScrewdriverWrench,
      description: 'Сборно-разборный навес для техников на время соревнований.',
      point: [297.57, 476.91],
    },
    {
      id: 19,
      name: 'Пост секундометристов',
      icon: faStopwatch,
      description: 'Временная конструкция для судей-секундометристов на время соревнований.',
      point: [401.58, 514.23],
    },
  ].map(({ id, name, icon, description, point }) => ({
    id,
    name,
    icon,
    description,
    category: 'Спорт' as const,
    points: [point as [number, number]],
  })),
];
