import Image from 'next/image';

import { Breadcrumbs } from '@/features/Breadcrumbs';

import {
  SContent,
  SDirections,
  SDirectionsList,
  SHero,
  SHeroImage,
  SHeroContent,
  SHeroNote,
  SBreadcrumbsSection,
  SSeoText,
  SInteriors,
  SInteriorsGrid,
  SInterior,
  SNote,
  SSportsScreen,
} from './sportsScreen.styles';

const sports = ['Большой теннис', 'Футбол', 'Волейбол', 'Баскетбол', 'Сквош'];

const interiors = [
  {
    src: '/media/sports/pavilion-interior-long-concept.webp',
    alt: 'Визуализация зала вдоль боковых окон с видом на берёзовый лес',
    caption: 'Вид вдоль зала',
  },
  {
    src: '/media/sports/pavilion-interior-end-concept.webp',
    alt: 'Визуализация зала с белым арочным сводом и деревянным спортивным полом',
    caption: 'Вид в сторону торца',
  },
];

export const SportsScreen = () => (
  <SSportsScreen>
    <SHero aria-labelledby="sports-title">
      <SHeroImage>
        <Image
          src="/media/sports/pavilion-exterior-concept.webp"
          alt="Концептуальная визуализация спортивного павильона AURA среди берёз"
          fill
          preload
          sizes="100vw"
        />
      </SHeroImage>
      <SHeroContent>
        <h1 id="sports-title">Спортивный комплекс</h1>
        <p>В AURA планируется крытое спортивное пространство для индивидуальных и командных игр.</p>
        <SHeroNote>Концептуальная визуализация</SHeroNote>
      </SHeroContent>
    </SHero>

    <SContent>
      <SBreadcrumbsSection>
        <Breadcrumbs
          items={[{ label: 'Главная', href: '/' }, { label: 'Спортивный комплекс' }]}
        />
      </SBreadcrumbsSection>

      <SSeoText>
        В AURA в Арзамасе планируется крытое пространство для спортивных мероприятий среди
        берёзового леса. Павильон размером 70 × 21 м задуман для индивидуальных и командных игр.
        Планируемые направления — большой теннис, футбол, волейбол, баскетбол и сквош. Новое
        спортивное пространство дополнит возможности комплекса в Нижегородской области. Подробности
        и сроки открытия сообщим позже.
      </SSeoText>

      <SDirections aria-labelledby="sports-directions-title">
        <h2 id="sports-directions-title">Планируемые направления</h2>
        <SDirectionsList>
          {sports.map((sport) => (
            <li key={sport}>{sport}</li>
          ))}
        </SDirectionsList>
      </SDirections>

      <SInteriors aria-labelledby="sports-interiors-title">
        <h2 id="sports-interiors-title">Пространство для игры</h2>
        <SInteriorsGrid>
          {interiors.map((interior) => (
            <SInterior key={interior.src}>
              <Image
                src={interior.src}
                alt={interior.alt}
                width={1672}
                height={941}
                sizes="(max-width: 800px) 90vw, (max-width: 1470px) 44vw, 648px"
                loading="lazy"
              />
              <figcaption>
                {interior.caption}
                <span>Концептуальная визуализация</span>
              </figcaption>
            </SInterior>
          ))}
        </SInteriorsGrid>
      </SInteriors>

      <SNote>
        Пространство находится на этапе планирования. Подробности и сроки открытия сообщим позже.
      </SNote>
    </SContent>
  </SSportsScreen>
);
