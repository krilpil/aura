import Image from 'next/image';

import {
  SActionCard,
  SActionContent,
  SActionImage,
  SActionsGrid,
  SActionText,
  SActionTitle,
  SDescription,
  SMeta,
  SMetaItem,
  SSectionHeader,
  SShortActions,
  STitle,
} from './shortActions.styles';

const actions = [
  {
    title: 'Большая вода',
    text: 'Панорамный зал до 120 гостей для свадеб, выпускных и масштабных семейных торжеств.',
    meta: ['120 гостей'],
    image: '/media/actions/restaurantB.png',
    alt: 'Банкетный зал Большая вода в Aura',
    featured: true,
  },
  {
    title: 'Лесная симфония',
    text: 'Камерный зал до 60 гостей для ужинов, юбилеев и церемоний .',
    meta: ['60 гостей'],
    image: '/media/actions/restaurantA.png',
    alt: 'Зал Лесная симфония в Aura',
  },
  {
    title: 'Волейбольная площадка',
    text: 'Активная зона для летних встреч, неформальной части корпоратива или семейного выходного.',
    meta: ['Летний сезон'],
    image: '/media/actions/volleyball.png',
    alt: 'Волейбольная площадка в Aura',
  },
  {
    title: 'Гостевой дом',
    text: 'Приватное пространство с двумя спальнями для спокойного отдыха до и после праздника.',
    meta: ['2 спальни', 'до 6 человек'],
    image: '/media/actions/guest_house.png',
    alt: 'Гостевой дом на территории Aura',
  },
  {
    title: 'Лазертаг',
    text: 'Динамичный сценарий для корпоративов, выпускных и дней рождения на свежем воздухе.',
    meta: ['Командный формат'],
    image: '/media/actions/lasertag.png',
    alt: 'Лазертаг на лесной территории Aura',
  },
  {
    title: 'Ориентирование',
    text: 'Маршруты по лесной территории для командных программ, квестов и выездных мероприятий.',
    meta: ['Лесные маршруты'],
    image: '/media/actions/orientation.png',
    alt: 'Спортивное ориентирование на территории Aura',
  },
];

export const ShortActions = () => {
  return (
    <SShortActions aria-labelledby="short-actions-title">
      <SSectionHeader>
        <STitle id="short-actions-title">Форматы для события с полным ощущением места</STitle>
        <SDescription>
          Aura объединяет ресторанный уровень сервиса, лесную тишину и продуманную инфраструктуру
          для праздников разного масштаба.
        </SDescription>
      </SSectionHeader>

      <SActionsGrid>
        {actions.map((action) => (
          <SActionCard $featured={action.featured} key={action.title}>
            <SActionImage>
              <Image
                src={action.image}
                alt={action.alt}
                fill
                sizes={
                  action.featured
                    ? '(max-width: 900px) 100vw, 50vw'
                    : '(max-width: 900px) 100vw, 33vw'
                }
              />
            </SActionImage>

            <SActionContent>
              <SMeta>
                {action.meta.map((metaItem) => (
                  <SMetaItem key={metaItem}>{metaItem}</SMetaItem>
                ))}
              </SMeta>
              <SActionTitle>{action.title}</SActionTitle>
              <SActionText>{action.text}</SActionText>
            </SActionContent>
          </SActionCard>
        ))}
      </SActionsGrid>
    </SShortActions>
  );
};
