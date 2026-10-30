'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { CarouselRef } from 'antd/es/carousel';

import { menuPages, restaurantMenuPdf } from '../model/menu';
import {
  SMenuCarousel,
  SMenuControls,
  SMenuPage,
  SMenuViewer,
  STextLink,
} from './restaurantScreen.styles';

export const RestaurantMenu = () => {
  const carousel = useRef<CarouselRef>(null);
  const [current, setCurrent] = useState(0);
  const [wide, setWide] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const viewport = window.matchMedia('(min-width: 1000px)');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateViewport = () => setWide(viewport.matches);
    const updateMotion = () => setReducedMotion(motion.matches);
    updateViewport();
    updateMotion();
    viewport.addEventListener('change', updateViewport);
    motion.addEventListener('change', updateMotion);
    return () => {
      viewport.removeEventListener('change', updateViewport);
      motion.removeEventListener('change', updateMotion);
    };
  }, []);

  const visibleCount = Math.min(wide ? 2 : 1, menuPages.length);
  const hasPagination = menuPages.length > visibleCount;
  const lastStart = menuPages.length - visibleCount;
  const first = Math.min(current, lastStart);
  const last = first + visibleCount;
  const goTo = (index: number) => carousel.current?.goTo(Math.max(0, Math.min(index, lastStart)));

  return (
    <SMenuViewer>
      <p className="menu-hint">Нажмите на страницу, чтобы открыть меню в PDF и увеличить.</p>
      <div
        id="restaurant-menu-pages"
        role="region"
        aria-roledescription="карусель"
        aria-label="Страницы меню ресторана"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            goTo(first + (event.key === 'ArrowRight' ? 1 : -1));
          }
          if (event.key === 'Home' || event.key === 'End') {
            event.preventDefault();
            goTo(event.key === 'Home' ? 0 : lastStart);
          }
        }}
      >
        <SMenuCarousel
          ref={carousel}
          slidesToShow={visibleCount}
          slidesToScroll={1}
          infinite={false}
          dots={false}
          autoplay={false}
          accessibility
          draggable={hasPagination}
          speed={reducedMotion ? 0 : 350}
          afterChange={setCurrent}
        >
          {menuPages.map((page, index) => (
            <SMenuPage key={page.page}>
              <a
                href={`${restaurantMenuPdf}#page=${index + 1}`}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={index >= first && index < last ? 0 : -1}
                aria-label={`Открыть PDF: страница ${page.page}`}
              >
                <Image
                  src={page.src}
                  alt={`Меню ресторана Aura, страница ${page.page}`}
                  width={page.width}
                  height={page.height}
                  unoptimized
                  sizes="(min-width: 1000px) 46vw, 92vw"
                />
              </a>
            </SMenuPage>
          ))}
        </SMenuCarousel>
      </div>
      <SMenuControls>
        {hasPagination && (
          <div className="page-controls">
            <button
              type="button"
              disabled={first === 0}
              onClick={() => goTo(first - 1)}
              aria-label="Предыдущая страница меню"
            >
              ←
            </button>
            <span role="status" aria-live="polite" aria-atomic="true">
              {visibleCount > 1 ? `Страницы ${first + 1}–${last}` : `Страница ${first + 1}`} из{' '}
              {menuPages.length}
            </span>
            <button
              type="button"
              disabled={first === lastStart}
              onClick={() => goTo(first + 1)}
              aria-label="Следующая страница меню"
            >
              →
            </button>
          </div>
        )}
        <div className="pdf-actions">
          <STextLink href={restaurantMenuPdf} target="_blank" rel="noopener noreferrer">
            Открыть PDF
          </STextLink>
          <STextLink href={restaurantMenuPdf} download="Меню ресторана Aura.pdf">
            Скачать меню
          </STextLink>
        </div>
      </SMenuControls>
    </SMenuViewer>
  );
};
