import Link from 'next/link';

import { getBreadcrumbItems } from '../lib';
import type { IBreadcrumbItem } from '../model';
import { SBreadcrumbs } from './breadcrumbs.styles';

interface IBreadcrumbsProps {
  items: readonly IBreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: IBreadcrumbsProps) => {
  if (items.length === 0) return null;

  return (
    <SBreadcrumbs aria-label="Хлебные крошки">
      <ol>
        {getBreadcrumbItems(items).map(({ label, href, isCurrent }) => (
          <li key={`${label}-${href ?? 'current'}`}>
            {isCurrent ? (
              <span aria-current="page">{label}</span>
            ) : href ? (
              <Link href={href}>{label}</Link>
            ) : (
              <span>{label}</span>
            )}
          </li>
        ))}
      </ol>
    </SBreadcrumbs>
  );
};
