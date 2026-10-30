import type { IBreadcrumbItem } from '../model';

export const getBreadcrumbItems = (items: readonly IBreadcrumbItem[]) =>
  items.map((item, index) => ({
    ...item,
    isCurrent: index === items.length - 1,
  }));
