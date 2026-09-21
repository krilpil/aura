import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faVk } from '@fortawesome/free-brands-svg-icons';

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
  SLegalLink,
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
    title: 'Проживание',
    links: [
      { label: 'Гостевые дома', href: '/accommodation' },
      { label: 'Для семей с детьми', href: '/family' },
    ],
  },
  {
    title: 'Активный отдых',
    links: [
      { label: 'Сапы', href: '/activities/sup' },
      { label: 'Детская площадка', href: '/activities/playground' },
      { label: 'Волейбольная площадка', href: '/activities/volleyball' },
      { label: 'Байдарки', href: '/activities/kayaks' },
      { label: 'Бадминтон', href: '/activities/badminton' },
      { label: 'Пляжный мини-футбол', href: '/activities/football' },
    ],
  },
  {
    title: 'Мероприятия',
    links: [
      { label: 'Корпоративные клиенты', href: '/events/corporate' },
      { label: 'Частные события', href: '/events/private' },
      { label: 'Свадьбы', href: '/events/weddings' },
      { label: 'Выпускные', href: '/events/graduation' },
    ],
  },
  {
    title: 'О комплексе',
    links: [
      { label: 'О нас', href: '/about' },
      { label: 'Территория', href: '/territory' },
      { label: 'Галерея', href: '/gallery' },
      { label: 'Контакты', href: '/contacts' },
    ],
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
              href="https://vk.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AURA во ВКонтакте"
            >
              <FontAwesomeIcon icon={faVk} />
            </SSocialLink>

            <SSocialLink
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AURA в Instagram"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
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
          <SPhone href="tel:+79524481951">+7 (952) 448-19-51</SPhone>

          <SAddress>
            Нижегородская область,
            <br />
            г. Арзамас, ул. Победы, 19
          </SAddress>

          <SRouteLink href="https://yandex.ru/maps/" target="_blank" rel="noopener noreferrer">
            Построить маршрут
          </SRouteLink>
        </SContactColumn>
      </SFooterContent>

      <SFooterBottom>
        <SCopyright>© 2026 Гостиничный комплекс AURA. Все права защищены.</SCopyright>

        <SLegalLink href="/privacy">Политика конфиденциальности</SLegalLink>

        <SLegalLink href="/terms">Пользовательское соглашение</SLegalLink>
      </SFooterBottom>
    </SFooter>
  );
};
