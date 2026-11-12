import { contacts } from '@/shared/config/contacts';

import { pageUrl, seoPages, siteOrigin, type SeoPath } from './config';

const organizationId = `${siteOrigin}/#organization`;
const restaurantId = `${siteOrigin}/#restaurant`;
const websiteId = `${siteOrigin}/#website`;

const address = {
  '@type': 'PostalAddress',
  streetAddress: contacts.venue.street.replace('г. Арзамас, ', ''),
  addressLocality: 'Арзамас',
  addressRegion: contacts.venue.region,
  addressCountry: 'RU',
};

export function StructuredData({ path }: { path: SeoPath }) {
  const page = seoPages[path];
  const url = pageUrl(path);
  const graph: Record<string, unknown>[] = [
    {
      '@type': path === '/about' ? 'AboutPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: 'ru-RU',
      isPartOf: { '@id': websiteId },
      about: { '@id': path === '/restaurant' ? restaurantId : organizationId },
      ...(path !== '/' && { breadcrumb: { '@id': `${url}#breadcrumb` } }),
    },
  ];

  if (path === '/') {
    graph.push({
      '@type': 'WebSite',
      '@id': websiteId,
      url,
      name: 'AURA',
      alternateName: 'Аура',
      inLanguage: 'ru-RU',
      publisher: { '@id': organizationId },
    });
  } else {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: pageUrl('/') },
        { '@type': 'ListItem', position: 2, name: page.breadcrumb, item: url },
      ],
    });
  }

  if (path === '/about') {
    graph.push({
      '@type': 'LocalBusiness',
      '@id': organizationId,
      name: 'AURA',
      legalName: 'Общество с ограниченной ответственностью «Олимп»',
      url: pageUrl('/'),
      description: seoPages['/'].description,
      image: new URL(page.image, siteOrigin).href,
      telephone: contacts.booking.href.replace('tel:', ''),
      email: contacts.business.email,
      address,
      geo: { '@type': 'GeoCoordinates', latitude: 55.423157, longitude: 43.816434 },
      sameAs: ['https://vk.ru/aura.place'],
      department: { '@id': restaurantId },
    });
  }

  if (path === '/restaurant') {
    graph.push({
      '@type': 'Restaurant',
      '@id': restaurantId,
      name: 'Ресторан AURA',
      url,
      image: new URL(page.image, siteOrigin).href,
      description: page.description,
      telephone: contacts.booking.href.replace('tel:', ''),
      address,
      parentOrganization: { '@id': organizationId },
      servesCuisine: ['Русская', 'Азиатская', 'Европейская', 'Фьюжн'],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '23:00',
      },
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
          /</g,
          '\\u003c'
        ),
      }}
    />
  );
}
