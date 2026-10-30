'use client';

import { useEffect, useState, type RefObject } from 'react';

const previewSource = '/media/territory/complex-plan-wide-preview.webp';
const mediumSource = '/media/territory/complex-plan-wide-medium.webp';
const hdSource = '/media/territory/complex-plan-wide-hd.webp';

export const useTerritoryImage = (viewportRef: RefObject<HTMLDivElement | null>) => {
  const [imageState, setImageState] = useState({ source: previewSource, fallback: previewSource });

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let disposed = false;
    let started = false;

    const loadVersions = async () => {
      if (started) return;
      started = true;

      for (const source of [previewSource, mediumSource, hdSource]) {
        if (disposed) return;

        const image = new window.Image();
        image.decoding = 'async';
        image.fetchPriority = source === previewSource ? 'auto' : 'low';
        image.src = source;

        try {
          await image.decode();
          if (disposed) return;
          setImageState((current) =>
            current.source === source ? current : { source, fallback: current.source }
          );
        } catch {
          // Сохраняем текущую версию и пробуем следующую даже при ошибке промежуточной.
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          void loadVersions();
        }
      },
      { rootMargin: '400px' }
    );

    observer.observe(viewport);
    return () => {
      disposed = true;
      observer.disconnect();
    };
  }, [viewportRef]);

  return {
    source: imageState.source,
    handleImageError: () =>
      setImageState((current) =>
        current.source === current.fallback
          ? current
          : { source: current.fallback, fallback: previewSource }
      ),
  };
};
