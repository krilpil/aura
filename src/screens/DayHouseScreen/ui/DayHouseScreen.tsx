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
} from '@/screens/HouseScreen/ui/houseScreen.styles';

const houseFacts = ['Домик целиком', 'Терраса', 'Отдых без ночлега'];

const housePrice = '10 000 ₽';
const housePhone = '8 (999) 395-03-75';

const houseBreadcrumbs = [{ label: 'Главная', href: '/' }, { label: 'Домик «Исток»' }];

const characteristics = [
  { label: 'Формат', value: 'Аренда домика целиком' },
  { label: 'На улице', value: 'Терраса' },
  { label: 'Окружение', value: 'Лесная территория' },
  { label: 'Посещение', value: 'Без ночлега' },
];

const amenities = [
  {
    title: 'Встреча в домике',
    description:
      'Приватное пространство для общения с друзьями и близкими среди леса, вдали от городской суеты.',
  },
  {
    title: 'Шашлык на свежем воздухе',
    description:
      'Проведите время за приготовлением шашлыка и общим столом. ' +
      'Оснащение для приготовления и то, что нужно взять с собой, уточните при бронировании.',
  },
  {
    title: 'Терраса и лес',
    description: 'Отдыхайте на террасе, гуляйте и наслаждайтесь природой на территории AURA.',
  },
  {
    title: 'Лазертаг',
    description:
      'Добавьте к встрече командную игру на лесной территории. ' +
      'Доступность, время и стоимость лазертага уточняются отдельно.',
  },
];

const conditions = [
  {
    label: 'Стоимость аренды',
    value: `${housePrice} за сутки за домик целиком. Ночлег не предусмотрен.`,
  },
  {
    label: 'Время посещения',
    value: 'Время начала и окончания аренды согласуйте при бронировании.',
  },
  {
    label: 'Бронирование',
    value: 'Позвоните, чтобы узнать свободные даты и согласовать условия аренды, оплаты и отмены.',
  },
  {
    label: 'Активности и подготовка',
    value:
      'Лазертаг согласуется отдельно. Уточните его стоимость и доступность, ' +
      'оснащение для шашлыка и что нужно привезти с собой.',
  },
];

const gallery = [
  {
    src:
      '/media/updated_house/' +
      'xkpDy_cvQ-QZ-CT7nLyI54AHVJC3C6i5iWeY-_Rf7HVfIIMmmeq3E0vbkuDI_DvwTyHhtlY1TU7BGCoAqpvpg1LL.jpg',
    alt: 'Домик «Исток» с террасой среди берёз',
  },
  {
    src:
      '/media/updated_house/' +
      'nW3E6-RJvRTl48JWs1zCiM5wNKppZNqyluanaxiXNtNsCX11lXKoRdHlC6LG9uSWgZQDFQPoTApQ2LT6D3KkDbm3.jpg',
    alt: 'Домик «Исток» на лесной территории AURA',
  },
  {
    src:
      '/media/updated_house/' +
      'wQgT2HmxAbnV54P2LOuFK2qbAs0UeBtMLlml727HWFsN1T37g6w2_dFWtgMi7USXfVa5_cnegNm29KnhFYXKNy8l.jpg',
    alt: 'Дорожка к домику «Исток» среди берёз',
  },
  {
    src:
      '/media/updated_house/' +
      'a3HA5Y1Q6n7qWnhdoA_I40Mt0BbGKmL4atV-ujbwLvvGDB0U5TyyZci6_WHi9cA2fnkFQCq93e6BfUCD-GQqykdg.jpg',
    alt: 'Обеденная зона и кухня домика «Исток» с панорамными окнами',
  },
  {
    src:
      '/media/updated_house/' +
      'lSEO-3l2k7dur5Q_lVDje4FLgIB2Wsg4otH5CevTbZuSgOixOC_423acBwtkK6YgUXgegB5zH4hTyKtBtC1J88n4.jpg',
    alt: 'Прихожая домика «Исток» с видом на лес',
  },
  {
    src:
      '/media/updated_house/' +
      'BfNvH37nNnh3P3whV8bFiHS6DkjS8NhS4KEY9cINx8ZerkKsqbySQEVetLRaeInRfhGBfleRdAvy73UI7aWeF9CW.jpg',
    alt: 'Комната домика «Исток»',
  },
  {
    src:
      '/media/updated_house/' +
      'P_UJgpVSomd5w4xKUEE5EQSi0EzKf8SuDkovAe51NKA-ovdubCzYa3MZG0wYo5uz8jUOtj92NYgmyZc5FgeYkURv.jpg',
    alt: 'Санузел домика «Исток»',
  },
];

export const DayHouseScreen = () => {
  return (
    <SHouseScreen>
      <SHero>
        <SHeroImage>
          <Image src={gallery[0].src} alt={gallery[0].alt} fill preload sizes="100vw" />
        </SHeroImage>

        <SHeroContent>
          <SSubtitle>Аренда домика на природе</SSubtitle>
          <STitle>Домик «Исток»</STitle>
          <SLead>
            Соберитесь с близкими в домике у леса в Арзамасе: приготовьте шашлык, отдохните на
            террасе и поиграйте в лазертаг. Приезжайте провести время вместе — ночлег не
            предусмотрен.
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
        <SSectionTitle>Фотографии домика</SSectionTitle>
        <SStayLayout>
          <Gallery images={gallery} ariaLabel="Фотографии домика «Исток»" />

          <HouseInfoSidebar
            requestType="houseDay"
            price={housePrice}
            phone={housePhone}
            characteristics={characteristics}
            bookingTitle="Аренда домика"
            priceNote="Домик целиком для отдыха без ночлега."
            bookingText="Оставьте заявку или позвоните — обсудим дату, условия аренды и игру в лазертаг."
          />
        </SStayLayout>
      </SSection>

      <SDetailsSection aria-labelledby="day-house-activities-title">
        <SDetailsInner>
          <SSectionTitle id="day-house-activities-title">Как провести день</SSectionTitle>
          <SSectionText>
            Шашлык, общение и активный отдых в окружении леса — выберите свой ритм встречи.
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

      <SDetailsSection aria-labelledby="day-house-conditions-title">
        <SDetailsInner>
          <SSectionTitle id="day-house-conditions-title">Условия аренды</SSectionTitle>
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

      <AdditionalActivities
        description={
          'Дополните встречу лазертагом или другими занятиями на природе. ' +
          'Доступность и стоимость активностей уточните при бронировании.'
        }
      />
    </SHouseScreen>
  );
};
