import type { IGalleryImage } from '../model';

export const getGalleryImages = (images: readonly IGalleryImage[]) =>
  images.map((image, index) => ({
    ...image,
    preload: index === 0,
  }));
