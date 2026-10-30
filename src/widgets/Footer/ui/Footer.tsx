import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons';

import {
  SAddress,
  SBrandColumn,
  SBrandText,
  SColumnTitle,
  SContactColumn,
  SCopyright,
  SFooter,
  SFooterBottom,
  SFooterContent,
  SFooterLogo,
  SNavigationColumn,
  SNavigationLink,
  SNavigationList,
  SPhone,
  SRouteLink,
  SSocialLink,
  SSocials,
} from './footer.styles';

const navigation = [
  {
    title: 'Дом',
    links: [{ label: 'Домик «Исток»', href: '/house/istok' }],
  },
  {
    title: 'Активный отдых',
    links: [
      { label: 'Лазертаг', href: '/activities#lasertag' },
      { label: 'Сапы', href: '/activities#water' },
      { label: 'Байдарки', href: '/activities#water' },
      { label: 'Волейбольная площадка', href: '/activities#volleyball' },
      { label: 'Ориентирование', href: '/activities#orientation' },
      { label: 'Пляжный мини-футбол', href: '/activities#football' },
      { label: 'Бадминтон', href: '/activities#badminton' },
      { label: 'Детская площадка', href: '/activities#playground' },
    ],
  },
  {
    title: 'Мероприятия',
    links: [
      { label: 'Ресторан', href: '/restaurant' },
      { label: 'Корпоративные клиенты', href: '/events/corporate' },
      { label: 'Частные события', href: '/events/private' },
      { label: 'Свадьбы', href: '/events/weddings' },
      { label: 'Выпускные', href: '/events/graduation' },
      { label: 'Спортивный комплекс', href: '/events/sports' },
    ],
  },
  {
    title: 'О комплексе',
    links: [{ label: 'О нас', href: '/about' }],
  },
];

export const Footer = () => {
  return (
    <SFooter>
      <SFooterContent>
        <SBrandColumn>
          <SFooterLogo href="/" aria-label="AURA — главная" />

          <SBrandText>
            Больше, чем просто отдых.
            <br />
            Это место силы.
          </SBrandText>

          <SSocials aria-label="Социальные сети">
            <SSocialLink
              href="https://vk.ru/aura.place"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AURA во ВКонтакте"
            >
              <FontAwesomeIcon icon={faVk} />
            </SSocialLink>
          </SSocials>
        </SBrandColumn>

        {navigation.map(({ title, links }) => (
          <SNavigationColumn key={title} aria-label={title}>
            <SColumnTitle>{title}</SColumnTitle>

            <SNavigationList>
              {links.map(({ label, href }) => (
                <SNavigationLink key={label} href={href}>
                  {label}
                </SNavigationLink>
              ))}
            </SNavigationList>
          </SNavigationColumn>
        ))}

        <SContactColumn>
          <SPhone href="tel:+79993950375">8 (999) 395-03-75</SPhone>

          <SAddress>
            Нижегородская область,
            <br />
            г. Арзамас, ул. Победы, 19А
          </SAddress>

          <SRouteLink
            href="https://yandex.ru/maps/?rtext=~55.423157%2C43.816434&rtt=auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Построить маршрут
          </SRouteLink>
        </SContactColumn>
      </SFooterContent>

      <SFooterBottom>
        <SCopyright>© 2026 Гостиничный комплекс AURA. Все права защищены.</SCopyright>
      </SFooterBottom>
    </SFooter>
  );
};
