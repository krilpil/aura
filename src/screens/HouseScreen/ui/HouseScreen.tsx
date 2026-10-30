import Image from 'next/image';

import { Breadcrumbs } from '@/features/Breadcrumbs';
import { AdditionalActivities } from '@/widgets/AdditionalActivities';
import { Gallery } from '@/widgets/Gallery';
import { HouseInfoSidebar } from '@/widgets/HouseInfoSidebar';

import {
  SAmenityDescription,
  SAmenityItem,
  SAmenitiesGrid,
  SAmenityTitle,
  SBreadcrumbsSlot,
  SConditionItem,
  SConditionLabel,
  SConditionsGrid,
  SConditionValue,
  SDetailsInner,
  SDetailsSection,
  SFact,
  SFacts,
  SHero,
  SHeroContent,
  SHeroImage,
  SHouseScreen,
  SLead,
  SSection,
  SSectionText,
  SSectionTitle,
  SSubtitle,
  SStayLayout,
  STitle,
} from './houseScreen.styles';

const houseFacts = ['55 м2', '2 спальни', 'до 6 человек', 'Терраса'];

const housePrice = '10 000 ₽';
const housePhone = '8 (999) 395-03-75';

const houseBreadcrumbs = [{ label: 'Главная', href: '/' }, { label: 'Гостевой дом «Исток»' }];

const characteristics = [
  {
    label: 'Площадь',
    value: '55 м2',
  },
  {
    label: 'Планировка',
    value: '2 спальни',
  },
  {
    label: 'Вместимость',
    value: 'до 6 человек',
  },
  {
    label: 'На улице',
    value: 'Терраса',
  },
  {
    label: 'Окружение',
    value: 'Лесная территория',
  },
];

// Черновые сведения об оснащении и правилах: подтвердить у владельца перед публикацией.
const amenities = [
  {
    title: 'Кухня',
    description:
      'Холодильник, варочная панель, микроволновая печь, чайник и посуда на шесть человек.',
  },
  {
    title: 'Wi-Fi',
    description: 'Беспроводной интернет в доме.',
  },
  {
    title: 'Комфортный климат',
    description: 'Отопление и кондиционер.',
  },
  {
    title: 'Бельё и полотенца',
    description: 'Постельное бельё и полотенца подготовлены к вашему приезду.',
  },
  {
    title: 'Парковка',
    description: 'Место для автомобиля на территории комплекса.',
  },
];

const conditions = [
  {
    label: 'Стоимость',
    value: [
      `${housePrice} за сутки за весь дом.`,
      'Размещение до 6 гостей и перечисленные удобства включены; доплаты в пределах этой вместимости нет.',
      'Размещение свыше 6 гостей не предусмотрено.',
    ].join(' '),
  },
  {
    label: 'Минимальный срок',
    value: 'Одни сутки.',
  },
  {
    label: 'Заезд и выезд',
    value: 'Заезд с 15:00, выезд до 12:00.',
  },
  {
    label: 'Оплата',
    value: 'Предоплата 30% при бронировании, оставшаяся сумма — при заезде.',
  },
  {
    label: 'Отмена',
    value:
      'При отмене за 7 дней и ранее предоплата возвращается. При более поздней отмене — не возвращается.',
  },
  {
    label: 'Дети и питомцы',
    value:
      'Дети размещаются в пределах общей вместимости дома. Проживание с питомцами — по согласованию.',
  },
];

const gallery = [
  {
    src: '/media/house/istok/1.jpg',
    alt: 'Гостиничный дом Исток среди лесной территории Aura',
  },
  {
    src: '/media/house/istok/2.jpg',
    alt: 'Интерьер гостиничного дома Исток',
  },
  {
    src: '/media/house/istok/3.jpg',
    alt: 'Терраса гостиничного дома Исток',
  },
];

export const HouseScreen = () => {
  return (
    <SHouseScreen>
      <SHero>
        <SHeroImage>
          <Image src={gallery[0].src} alt={gallery[0].alt} fill preload sizes="100vw" />
        </SHeroImage>

        <SHeroContent>
          <SSubtitle>Гостевой дом «Исток»</SSubtitle>
          <STitle>Гостевой дом «Исток»</STitle>
          <SLead>
            Приватный дом AURA у леса в Арзамасе для спокойного проживания после торжества,
            камерного уикенда или утренних сборов перед важным днём.
          </SLead>

          <SFacts>
            {houseFacts.map((fact) => (
              <SFact key={fact}>{fact}</SFact>
            ))}
          </SFacts>
        </SHeroContent>
      </SHero>

      <SSection>
        <SBreadcrumbsSlot>
          <Breadcrumbs items={houseBreadcrumbs} />
        </SBreadcrumbsSlot>
        <SSectionTitle>Фотографии дома</SSectionTitle>
        <SStayLayout>
          <Gallery images={gallery} ariaLabel="Фотографии дома Исток" />

          <HouseInfoSidebar
            requestType="houseStay"
            price={housePrice}
            phone={housePhone}
            characteristics={characteristics}
          />
        </SStayLayout>
      </SSection>

      <SDetailsSection aria-labelledby="house-amenities-title">
        <SDetailsInner>
          <SSectionTitle id="house-amenities-title">Что есть в доме</SSectionTitle>
          <SSectionText>
            Всё необходимое для спокойного отдыха после праздника или нескольких дней среди леса.
          </SSectionText>
          <SAmenitiesGrid>
            {amenities.map((amenity) => (
              <SAmenityItem key={amenity.title}>
                <SAmenityTitle>{amenity.title}</SAmenityTitle>
                <SAmenityDescription>{amenity.description}</SAmenityDescription>
              </SAmenityItem>
            ))}
          </SAmenitiesGrid>
        </SDetailsInner>
      </SDetailsSection>

      <SDetailsSection aria-labelledby="house-conditions-title">
        <SDetailsInner>
          <SSectionTitle id="house-conditions-title">Условия проживания</SSectionTitle>
          <SConditionsGrid>
            {conditions.map((condition) => (
              <SConditionItem key={condition.label}>
                <SConditionLabel>{condition.label}</SConditionLabel>
                <SConditionValue>{condition.value}</SConditionValue>
              </SConditionItem>
            ))}
          </SConditionsGrid>
        </SDetailsInner>
      </SDetailsSection>

      <AdditionalActivities />
    </SHouseScreen>
  );
};
