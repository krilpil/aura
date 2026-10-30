'use client';

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { breakpoints } from '@/entities/theme';

import { useTerritoryImage } from '../lib/useTerritoryImage';
import {
  getTerritoryPosition,
  territoryFocus,
  territoryMinScale,
  territoryViewBounds,
} from '../model/geometry';
import {
  territoryCategories,
  territoryLocations,
  type TerritoryCategory,
} from '../model/locations';
import {
  SCanvas,
  SControls,
  SDetails,
  SDetailsMeta,
  SFilters,
  SHeader,
  SHint,
  SLayout,
  SMarker,
  SSection,
  SViewport,
} from './territoryMap.styles';

interface IMapView {
  scale: number;
  x: number;
  y: number;
}

const initialScale = territoryMinScale;
const initialView: IMapView = { scale: initialScale, x: 0, y: 0 };
const maxScale = 4;

const boundView = (next: IMapView, viewport: HTMLDivElement, canvas: HTMLDivElement): IMapView => {
  const style = getComputedStyle(canvas);
  const width = parseFloat(style.width) * next.scale;
  const height = parseFloat(style.height) * next.scale;
  const viewportSize = viewport.getBoundingClientRect();
  const minX = viewportSize.width / 2 - (territoryViewBounds.right - 0.5) * width;
  const maxX = -viewportSize.width / 2 - (territoryViewBounds.left - 0.5) * width;
  const minY = viewportSize.height / 2 - (territoryViewBounds.bottom - 0.5) * height;
  const maxY = -viewportSize.height / 2 - (territoryViewBounds.top - 0.5) * height;

  return {
    scale: next.scale,
    x: Math.max(minX, Math.min(maxX, next.x)),
    y: Math.max(minY, Math.min(maxY, next.y)),
  };
};

const getInitialView = (viewport: HTMLDivElement, canvas: HTMLDivElement) =>
  boundView(
    {
      scale: initialScale,
      x: (0.5 - territoryFocus.x) * canvas.offsetWidth * initialScale,
      y: (0.5 - territoryFocus.y) * canvas.offsetHeight * initialScale,
    },
    viewport,
    canvas
  );

export const TerritoryMap = () => {
  const [view, setView] = useState(initialView);
  const [isViewReady, setIsViewReady] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [category, setCategory] = useState<TerritoryCategory>('Все объекты');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const { source: mapSource, handleImageError } = useTerritoryImage(viewportRef);
  const canvasRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const activeMarkerRef = useRef<HTMLButtonElement | null>(null);
  const dragRef = useRef<{ pointerId: number; x: number; y: number; start: IMapView } | null>(null);
  const selected = territoryLocations.find((location) => location.id === selectedId);
  const visibleLocations = territoryLocations.filter(
    (location) => category === 'Все объекты' || location.category === category
  );

  useEffect(() => {
    if (selectedId !== null) closeRef.current?.focus({ preventScroll: true });
  }, [selectedId]);

  useEffect(() => {
    const mobileQuery = window.matchMedia(`(max-width: ${breakpoints.maxMobile}px)`);
    const resetMobileCategory = () => {
      if (mobileQuery.matches) setCategory('Все объекты');
    };

    resetMobileCategory();
    mobileQuery.addEventListener('change', resetMobileCategory);
    return () => mobileQuery.removeEventListener('change', resetMobileCategory);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const canvas = canvasRef.current;
    if (!viewport || !canvas) return;

    const updateLayout = () => {
      setHasOverflow(
        canvas.offsetWidth > viewport.clientWidth || canvas.offsetHeight > viewport.clientHeight
      );
      setView(getInitialView(viewport, canvas));
      setIsViewReady(true);
      dragRef.current = null;
    };

    updateLayout();
    const observer = new ResizeObserver(updateLayout);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const closeDetails = () => {
    setSelectedId(null);
    activeMarkerRef.current?.focus({ preventScroll: true });
  };

  const constrainView = (next: IMapView): IMapView => {
    const viewport = viewportRef.current;
    const canvas = canvasRef.current;
    if (!viewport || !canvas) return next;

    return boundView(next, viewport, canvas);
  };

  const resetView = () => {
    const viewport = viewportRef.current;
    const canvas = canvasRef.current;
    if (viewport && canvas) setView(getInitialView(viewport, canvas));
  };

  const zoom = (step: number) => {
    setView((current) => {
      const scale =
        Math.round(Math.max(initialScale, Math.min(maxScale, current.scale + step)) * 100) / 100;
      return constrainView({
        scale,
        x: (current.x / current.scale) * scale,
        y: (current.y / current.scale) * scale,
      });
    });
  };

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target instanceof Element && event.target.closest('button, [data-map-details]'))
      return;
    setSelectedId(null);
    if ((!hasOverflow && view.scale <= initialScale) || event.button !== 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      start: view,
    };
  };

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    setView(
      constrainView({
        scale: drag.start.scale,
        x: drag.start.x + event.clientX - drag.x,
        y: drag.start.y + event.clientY - drag.y,
      })
    );
  };

  return (
    <SSection id="territory" aria-labelledby="territory-title">
      <SHeader>
        <h2 id="territory-title">Территория комплекса</h2>
        <p>Познакомьтесь с территорией. Нажмите на точку, чтобы узнать больше о месте.</p>
      </SHeader>
      <SLayout>
        <SViewport
          ref={viewportRef}
          $pannable={hasOverflow || view.scale > initialScale}
          $scaled={view.scale > initialScale}
          tabIndex={0}
          role="group"
          aria-label="Интерактивная схема территории. Плюс и минус меняют масштаб, стрелки перемещают карту."
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={() => {
            dragRef.current = null;
          }}
          onPointerCancel={() => {
            dragRef.current = null;
          }}
          onLostPointerCapture={() => {
            dragRef.current = null;
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape' && selectedId !== null) {
              event.preventDefault();
              event.stopPropagation();
              closeDetails();
              return;
            }
            if (event.target !== event.currentTarget) return;
            if (
              ['+', '=', '-', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home'].includes(
                event.key
              )
            ) {
              event.preventDefault();
            }
            if (event.key === '+' || event.key === '=') zoom(0.5);
            if (event.key === '-') zoom(-0.5);
            if (event.key === 'Home') resetView();
            const direction: Record<string, [number, number]> = {
              ArrowLeft: [60, 0],
              ArrowRight: [-60, 0],
              ArrowUp: [0, 60],
              ArrowDown: [0, -60],
            };
            const offset = direction[event.key];
            if (offset)
              setView((current) =>
                constrainView({ ...current, x: current.x + offset[0], y: current.y + offset[1] })
              );
          }}
        >
          <SCanvas
            ref={canvasRef}
            style={
              {
                transform: `translate(-50%, -50%) translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
                '--map-scale': view.scale,
                visibility: isViewReady ? 'visible' : 'hidden',
              } as CSSProperties
            }
          >
            <Image
              src={mapSource}
              alt="Комплекс у озера: беседки, здания, площадки, лесные дорожки и дорога справа, вид сверху"
              fill
              sizes="(max-width: 767px) 854px, 1320px"
              draggable={false}
              unoptimized
              onError={handleImageError}
            />
            {visibleLocations.flatMap((location) =>
              location.points.map(([x, y], index) => (
                <SMarker
                  key={`${location.id}-${index}`}
                  type="button"
                  $selected={selectedId === location.id}
                  aria-label={`${location.name}, объект ${location.id}, точка ${index + 1}`}
                  aria-expanded={selectedId === location.id}
                  aria-controls={
                    selectedId === location.id ? 'territory-object-details' : undefined
                  }
                  style={getTerritoryPosition(x, y)}
                  onClick={(event) => {
                    activeMarkerRef.current = event.currentTarget;
                    setSelectedId(location.id);
                    closeRef.current?.focus({ preventScroll: true });
                  }}
                >
                  <span aria-hidden="true">
                    <FontAwesomeIcon icon={location.icon} aria-hidden="true" focusable="false" />
                  </span>
                </SMarker>
              ))
            )}
          </SCanvas>
          <SFilters role="group" aria-label="Категории объектов">
            {territoryCategories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => {
                  setCategory(item);
                  setSelectedId(null);
                  resetView();
                }}
              >
                {item}
              </button>
            ))}
          </SFilters>
          <SControls aria-label="Масштаб карты">
            <button
              type="button"
              aria-label="Увеличить карту"
              disabled={view.scale >= maxScale}
              onClick={() => zoom(0.5)}
            >
              +
            </button>
            <button
              type="button"
              aria-label="Уменьшить карту"
              disabled={view.scale <= initialScale}
              onClick={() => zoom(-0.5)}
            >
              −
            </button>
            <button
              type="button"
              aria-label="Вернуться к комплексу"
              title="Вернуться к комплексу"
              onClick={resetView}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </SControls>
          {!selected && (
            <SHint>
              Карта комплекса <span>·</span> {Math.round(view.scale * 100)}%
            </SHint>
          )}
          {selected && (
            <SDetails
              id="territory-object-details"
              data-map-details
              role="dialog"
              aria-modal="false"
              aria-labelledby="territory-object-title"
              aria-describedby="territory-object-description"
            >
              <button
                ref={closeRef}
                type="button"
                aria-label="Закрыть информацию об объекте"
                onClick={closeDetails}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              <SDetailsMeta>
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={selected.icon} aria-hidden="true" focusable="false" />
                </span>
                {selected.category}
              </SDetailsMeta>
              <h3 id="territory-object-title">{selected.name}</h3>
              <p id="territory-object-description">{selected.description}</p>
            </SDetails>
          )}
        </SViewport>
      </SLayout>
    </SSection>
  );
};
