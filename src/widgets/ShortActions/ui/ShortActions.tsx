import Image from 'next/image';

import {
  SActionCard,
  SActionContent,
  SActionImage,
  SActionLink,
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
    href: '/restaurant#big-water',
    text: 'Панорамный зал до 120 гостей для свадеб, выпускных и масштабных семейных торжеств.',
    meta: ['120 гостей'],
    image: '/media/restaurant/big-water.webp',
    alt: 'Банкетный зал Большая вода в Aura',
    featured: true,
  },
  {
    title: 'Лесная симфония',
    href: '/restaurant#forest-symphony',
    text: 'Камерный зал до 60 гостей для ужинов, юбилеев и церемоний .',
    meta: ['60 гостей'],
    image: '/media/restaurant/forest-symphony.webp',
    alt: 'Зал Лесная симфония в Aura',
  },
  {
    title: 'Корпоративы',
    text:
      'Командные события с ресторанным сервисом: авторское меню, проектор и звук, ' +
      'лес и река за панорамными окнами.',
    meta: ['Проектор и звук'],
    image: '/media/actions/corporate.jpg',
    alt: 'Гости на корпоративном приёме в зале Aura у реки',
    href: '/events/corporate',
  },
  {
    title: 'Домик «Исток»',
    text: 'Домик у леса для встречи с близкими, шашлыка и активного отдыха без ночлега.',
    meta: ['Терраса', 'Без ночлега'],
    image:
      '/media/updated_house/' +
      'xkpDy_cvQ-QZ-CT7nLyI54AHVJC3C6i5iWeY-_Rf7HVfIIMmmeq3E0vbkuDI_DvwTyHhtlY1TU7BGCoAqpvpg1LL.jpg',
    alt: 'Домик «Исток» на территории AURA',
    href: '/house/istok',
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
            {action.href && (
              <SActionLink href={action.href} aria-label={`Подробнее: ${action.title}`} />
            )}
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
