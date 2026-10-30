'use client';

import Image from 'next/image';

import { getHeroPromos } from '../lib';
import {
  SCarousel,
  SContent,
  SFact,
  SFacts,
  SImageLayer,
  SSlide,
  SText,
  STitle,
} from './hero.styles';

const HERO_SWIPE_THRESHOLD = 3;
const HERO_SLIDE_SPEED = 420;
const HERO_AUTOPLAY_INTERVAL = 15_000;

export const Hero = () => {
  const promos = getHeroPromos();

  return (
    <SCarousel
      autoplay
      autoplaySpeed={HERO_AUTOPLAY_INTERVAL}
      dots={{ className: 'hero-dots' }}
      speed={HERO_SLIDE_SPEED}
      touchThreshold={HERO_SWIPE_THRESHOLD}
      waitForAnimate
    >
      {promos.map((promo, index) => (
        <SSlide key={promo.id}>
          <SImageLayer>
            <Image
              src={promo.image.src}
              alt={promo.image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
            />
          </SImageLayer>

          <SContent>
            <STitle>{promo.title}</STitle>

            <SText>{promo.description}</SText>

            <SFacts>
              {promo.facts.map((fact) => (
                <SFact key={fact}>{fact}</SFact>
              ))}
            </SFacts>
          </SContent>
        </SSlide>
      ))}
    </SCarousel>
  );
};
