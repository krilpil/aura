import menuPreview from './menu-pages.json';

export const restaurantInfo = {
  cuisines: ['Русская', 'Азиатская', 'Европейская'],
  averageCheck: 2500,
  hours: { label: 'Ежедневно', opens: '12:00', closes: '23:00' },
};

export const menuPages = menuPreview.pages;
export const restaurantMenuPdf = `/media/restaurant/menu/aura-menu.pdf?v=${menuPreview.version}`;

export const formatMenuPrice = (price: number) =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);
