import { activityOffers } from './activityOffers';
import { lasertagTariffs } from './lasertagTariffs';

export const corporateFormats = [
  {
    title: 'Корпоративы',
    text: 'Праздничный ужин, общение без спешки и время для команды в месте, куда хочется вернуться.',
  },
  {
    title: 'Конференции',
    text: 'Выступления и обсуждения в зале с экраном, проектором, микрофонами и звуком.',
  },
  {
    title: 'Стратегические сессии',
    text: 'Работа в общей группе и параллельные обсуждения с флипчартами для команд.',
  },
  {
    title: 'Тимбилдинги',
    text: 'Совместные задачи и активный день на природе, который завершится ужином в Aura.',
  },
] as const;

export const eventFormatOptions = [...corporateFormats.map(({ title }) => title), 'Другое'];

export type RequestField = {
  name: string;
  label: string;
  type: 'date' | 'number' | 'select' | 'tel' | 'time' | 'textarea';
  required?: boolean;
  options?: readonly string[];
  defaultValue?: string;
  max?: number;
  when?: { field: string; value: string };
};

type RequestConfig = {
  title: string;
  description: string;
  service: string;
  path: string;
  fields: readonly RequestField[];
};

const date: RequestField = { name: 'date', label: 'Дата мероприятия', type: 'date' };
const guests: RequestField = {
  name: 'guests',
  label: 'Количество гостей',
  type: 'number',
  required: true,
};
const phone: RequestField = {
  name: 'phone',
  label: 'Номер телефона',
  type: 'tel',
  required: true,
};
const wishes: RequestField = { name: 'wishes', label: 'Пожелания', type: 'textarea' };
const time: RequestField = { name: 'time', label: 'Желаемое время', type: 'time' };
const privateFormats = ['День рождения', 'Юбилей', 'Семейный праздник', 'Гендер-пати', 'Другое'];
const space: RequestField = {
  name: 'space',
  label: 'Пространство',
  type: 'select',
  defaultValue: 'Любой зал',
  options: ['Любой зал', 'Лесная симфония', 'Большая вода', 'Павильон'],
};

export const eventRequestConfigs = {
  corporate: {
    title: 'Обсудим ваше событие',
    service: 'Корпоративное мероприятие',
    path: '/events/corporate',
    description: 'Расскажите о планах — подберём зал, программу и обслуживание для вашей команды.',
    fields: [
      date,
      guests,
      {
        name: 'format',
        label: 'Формат мероприятия',
        type: 'select',
        required: true,
        options: eventFormatOptions,
      },
      phone,
      wishes,
    ],
  },
  weddings: {
    title: 'Обсудим вашу свадьбу',
    service: 'Свадьба',
    path: '/events/weddings',
    description: 'Расскажите, каким вы видите этот день. Обсудим пространство, меню и церемонию.',
    fields: [
      date,
      guests,
      {
        name: 'ceremony',
        label: 'Выездная церемония',
        type: 'select',
        options: ['Нужна', 'Не нужна', 'Пока не решили'],
        defaultValue: 'Пока не решили',
      },
      phone,
      wishes,
    ],
  },
  graduation: {
    title: 'Обсудим ваш выпускной',
    service: 'Выпускной',
    path: '/events/graduation',
    description: 'Поможем собрать праздник для выпускников и взрослых гостей.',
    fields: [
      date,
      guests,
      {
        name: 'format',
        label: 'Формат выпускного',
        type: 'select',
        defaultValue: 'Пока не определились',
        options: ['Школа', 'Детский сад', 'Колледж или вуз', 'Другой', 'Пока не определились'],
      },
      phone,
      wishes,
    ],
  },
  private: {
    title: 'Обсудим ваш праздник',
    service: 'Частное событие',
    path: '/events/private',
    description: 'Расскажите о вашем поводе — обсудим зал, праздничный стол и программу.',
    fields: [
      date,
      guests,
      {
        name: 'format',
        label: 'Повод',
        type: 'select',
        required: true,
        options: privateFormats,
      },
      phone,
      wishes,
    ],
  },
  restaurant: {
    title: 'Обсудим ваше мероприятие',
    service: 'Мероприятие в ресторане',
    path: '/restaurant',
    description: 'Подберём пространство и меню для вашего события.',
    fields: [
      date,
      guests,
      {
        name: 'format',
        label: 'Повод',
        type: 'select',
        required: true,
        options: ['Свадьба', ...privateFormats, 'Корпоратив', 'Выпускной'],
      },
      space,
      phone,
      wishes,
    ],
  },
  activities: {
    title: 'Спланируем ваш день в Aura',
    service: 'Активный отдых',
    path: '/activities',
    description: 'Уточним доступность занятий на вашу дату и поможем составить программу.',
    fields: [
      date,
      { ...guests, label: 'Количество участников' },
      {
        name: 'activity',
        label: 'Активность',
        type: 'select',
        required: true,
        options: [...activityOffers.map(({ title }) => title), 'Помогите выбрать'],
      },
      time,
      {
        name: 'tariff',
        label: 'Тариф лазертага',
        type: 'select',
        options: lasertagTariffs.map(({ title }) => title),
        when: { field: 'activity', value: 'Лазертаг' },
      },
      phone,
      wishes,
    ],
  },
  houseStay: {
    title: 'Спланируем проживание',
    service: 'Домик «Исток» — проживание',
    path: '/house/istok-old',
    description: 'Расскажите о поездке — уточним свободные даты и условия проживания.',
    fields: [
      { ...date, name: 'checkIn', label: 'Дата заезда' },
      {
        ...date,
        name: 'checkOut',
        label: 'Дата выезда',
      },
      { ...guests, max: 6 },
      phone,
      wishes,
    ],
  },
  houseDay: {
    title: 'Обсудим аренду домика',
    service: 'Домик «Исток» — без ночлега',
    path: '/house/istok',
    description: 'Подберём дату для встречи в домике и обсудим программу отдыха без ночлега.',
    fields: [
      { ...date, label: 'Дата посещения' },
      guests,
      time,
      {
        name: 'lasertag',
        label: 'Добавить лазертаг?',
        type: 'select',
        options: ['Да', 'Нет', 'Пока не решили'],
        defaultValue: 'Пока не решили',
      },
      phone,
      wishes,
    ],
  },
} satisfies Record<string, RequestConfig>;

export type EventRequestType = keyof typeof eventRequestConfigs;
export type EventRequestValues = Record<string, string>;
export type EventRequest = {
  requestType: EventRequestType;
  values: EventRequestValues;
  website: string;
};

export function isEventRequestType(value: unknown): value is EventRequestType {
  return typeof value === 'string' && Object.hasOwn(eventRequestConfigs, value);
}

export function getRequestConfig(type: EventRequestType): RequestConfig {
  return eventRequestConfigs[type];
}

export function getInitialRequestValues(type: EventRequestType, initial: EventRequestValues = {}) {
  return Object.fromEntries(
    getRequestConfig(type).fields.map((field) => [
      field.name,
      initial[field.name] ?? field.defaultValue ?? '',
    ])
  );
}

export function isRequestFieldVisible(field: RequestField, values: EventRequestValues) {
  return !field.when || values[field.when.field] === field.when.value;
}

export function getRequestErrors(type: EventRequestType, values: EventRequestValues) {
  const errors: Record<string, string> = {};
  for (const field of getRequestConfig(type).fields) {
    if (!isRequestFieldVisible(field, values)) continue;
    const value = values[field.name];
    if (typeof value !== 'string') {
      errors[field.name] = 'Некорректное значение.';
      continue;
    }
    if (!value.trim()) {
      if (field.required) errors[field.name] = 'Заполните это поле.';
      continue;
    }
    if (field.type === 'date') {
      const parsed = new Date(`${value}T00:00:00Z`);
      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
        Number.isNaN(parsed.getTime()) ||
        parsed.toISOString().slice(0, 10) !== value
      )
        errors[field.name] = 'Укажите корректную дату.';
    }
    if (
      field.type === 'number' &&
      (!/^\d+$/.test(value) ||
        !Number.isSafeInteger(Number(value)) ||
        Number(value) < 1 ||
        (field.max !== undefined && Number(value) > field.max))
    ) {
      errors[field.name] = field.max
        ? `Укажите число от 1 до ${field.max}.`
        : 'Укажите целое число больше нуля.';
    }
    if (field.type === 'select' && !field.options?.includes(value))
      errors[field.name] = 'Выберите вариант из списка.';
    if (
      field.type === 'tel' &&
      (value.length > 64 ||
        !/^\+?[0-9 ()-]+$/.test(value) ||
        !/^\d{10,15}$/.test(value.replace(/\D/g, '')))
    )
      errors[field.name] = 'Укажите телефон: от 10 до 15 цифр.';
    if (field.type === 'time' && !/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) {
      errors[field.name] = 'Укажите время в формате ЧЧ:ММ.';
    }
    if (field.type === 'textarea' && value.length > 1500)
      errors[field.name] = 'Не более 1500 символов.';
  }
  if (type === 'houseStay') {
    if (Boolean(values.checkIn) !== Boolean(values.checkOut)) {
      errors[values.checkIn ? 'checkOut' : 'checkIn'] = 'Укажите обе даты или оставьте их пустыми.';
    } else if (values.checkIn && values.checkOut <= values.checkIn) {
      errors.checkOut = 'Выезд должен быть позже заезда.';
    }
  }
  return errors;
}

export function isValidEventRequest(value: unknown): value is EventRequest {
  if (!value || typeof value !== 'object') return false;
  const data = value as Record<string, unknown>;
  if (
    !isEventRequestType(data.requestType) ||
    data.website !== '' ||
    !data.values ||
    typeof data.values !== 'object' ||
    Array.isArray(data.values)
  )
    return false;
  const fields = getRequestConfig(data.requestType).fields;
  const values = data.values as Record<string, unknown>;
  if (
    Object.keys(values).some((key) => !fields.some((field) => field.name === key)) ||
    !fields.every((field) => typeof values[field.name] === 'string')
  )
    return false;
  return Object.keys(getRequestErrors(data.requestType, values as EventRequestValues)).length === 0;
}

export function getRequestEmailLines(data: EventRequest) {
  const config = getRequestConfig(data.requestType);
  return [
    `Услуга: ${config.service}`,
    `Страница: ${config.path}`,
    '',
    ...config.fields
      .filter((field) => isRequestFieldVisible(field, data.values))
      .map((field) => {
        const value = data.values[field.name];
        const display =
          field.type === 'date'
            ? value
              ? value.split('-').reverse().join('.')
              : 'Не определена'
            : value || 'Не указано';
        return `${field.label}: ${display}`;
      }),
  ];
}
