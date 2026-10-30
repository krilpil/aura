import Image from 'next/image';

import { getGalleryImages } from '../lib';
import type { IGalleryImage } from '../model';
import { SGallery, SGalleryImage } from './gallery.styles';

interface IGalleryProps {
  images: readonly IGalleryImage[];
  ariaLabel: string;
}

export const Gallery = ({ images, ariaLabel }: IGalleryProps) => {
  return (
    <SGallery role="group" aria-label={ariaLabel}>
      {getGalleryImages(images).map((image) => (
        <SGalleryImage key={image.src}>
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
  );
};
