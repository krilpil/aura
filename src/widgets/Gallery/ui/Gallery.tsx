'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { getGalleryImages } from '../lib';
import type { IGalleryImage } from '../model';
import {
  SGallery,
  SGalleryImage,
  SPhotoDialog,
  SPhotoControls,
  SPhotoButton,
  SFullPhoto,
} from './gallery.styles';

interface IGalleryProps {
  images: readonly IGalleryImage[];
  ariaLabel: string;
}

export const Gallery = ({ images, ariaLabel }: IGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = activeIndex !== null;
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    dialog?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const changePhoto = (direction: number) => {
    setActiveIndex((index) =>
      index === null ? null : (index + direction + images.length) % images.length
    );
  };

  return (
    <>
      <SGallery role="group" aria-label={ariaLabel}>
        {getGalleryImages(images).map((image, index) => (
          <SGalleryImage
            key={image.src}
            type="button"
            aria-label={`Открыть фото: ${image.alt}`}
            aria-haspopup="dialog"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload={image.preload}
              sizes="(max-width: 900px) 100vw, 62vw"
            />
          </SGalleryImage>
        ))}
      </SGallery>
      <SPhotoDialog
        ref={dialogRef}
        aria-label={ariaLabel}
        onCancel={() => setActiveIndex(null)}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            changePhoto(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
      >
        {activeImage && (
          <>
            <SPhotoControls>
              <span aria-live="polite">
                {(activeIndex ?? 0) + 1} / {images.length}
              </span>
              <SPhotoButton
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Закрыть фото"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </SPhotoButton>
            </SPhotoControls>
            <SFullPhoto>
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" />
            </SFullPhoto>
            {images.length > 1 && (
              <SPhotoControls $navigation>
                <SPhotoButton
                  type="button"
                  onClick={() => changePhoto(-1)}
                  aria-label="Предыдущее фото"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m14 5-7 7 7 7" />
                  </svg>
                </SPhotoButton>
                <SPhotoButton
                  type="button"
                  onClick={() => changePhoto(1)}
                  aria-label="Следующее фото"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m10 5 7 7-7 7" />
                  </svg>
                </SPhotoButton>
              </SPhotoControls>
            )}
          </>
        )}
      </SPhotoDialog>
    </>
  );
};
