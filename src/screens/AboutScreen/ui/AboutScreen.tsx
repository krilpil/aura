import { Breadcrumbs } from '@/features/Breadcrumbs';

import { contacts, organizationDetails } from '../model/about';
import {
  SAboutScreen,
  SContent,
  SDescription,
  SDetails,
  SContactColumn,
  SContacts,
  SLocation,
  SSectionTitle,
} from './aboutScreen.styles';

export const AboutScreen = () => (
  <SAboutScreen>
    <SContent>
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'О нас' }]} />
      <h1>О AURA — контакты и адрес в Арзамасе</h1>
      <SDescription aria-label="О комплексе Aura">
        <p className="description-lead">
          Aura — комплекс для отдыха и праздников среди леса у реки в Арзамасе: ресторан, банкетные
          пространства, домик для отдыха без ночлега и активности на природе.
        </p>
        <p>
          Авторская кухня объединяет российские продукты, азиатские техники и европейскую подачу.
          Организуем ужины, банкеты, фуршеты и выездное обслуживание с сервировкой и мобильными
          барными станциями.
        </p>
        <p>
          Для событий доступны «Лесная симфония» до 60 гостей, «Большая вода» до 120 гостей и
          открытый свадебный павильон под двускатной крышей. Проводим свадьбы, выездные церемонии,
          юбилеи, дни рождения, выпускные и гендер-пати. Для корпоративных клиентов — праздничные
          вечера, конференции, стратегические сессии и тимбилдинги с проектором и звуком.
        </p>
        <p>
          Домик «Исток» с террасой можно арендовать для встречи с близкими и шашлыка на природе.
          Ночлег не предусмотрен; игру в лазертаг можно согласовать отдельно.
        </p>
        <p>
          Для активного отдыха есть лазертаг, сапы, байдарки, волейбол, ориентирование, пляжный
          мини-футбол и бадминтон; для детей — игровая площадка. Доступность занятий уточняется при
          бронировании.
        </p>
      </SDescription>
      <SContacts aria-label="Связаться с Aura">
        <SContactColumn aria-labelledby="booking-contact-title">
          <h2 id="booking-contact-title">Бронирование и посещение</h2>
          <a className="phone" href={contacts.booking.href}>
            {contacts.booking.phone}
          </a>
        </SContactColumn>
        <SContactColumn aria-labelledby="business-contact-title">
          <h2 id="business-contact-title">Сотрудничество и документы</h2>
          <a className="phone" href={contacts.business.href}>
            {contacts.business.phone}
          </a>
          <a className="email" href={`mailto:${contacts.business.email}`}>
            {contacts.business.email}
          </a>
        </SContactColumn>
      </SContacts>

      <SLocation aria-labelledby="contacts-location-title">
        <div className="location-heading">
          <SSectionTitle id="contacts-location-title">Ждём вас в Aura</SSectionTitle>
          <div>
            <address>
              {contacts.venue.region},<br />
              {contacts.venue.street}
            </address>
            <p className="hours-label">Часы работы ресторана</p>
            <p className="hours">{contacts.venue.restaurantHours}</p>
            <a
              className="route"
              href={contacts.venue.route}
              target="_blank"
              rel="noopener noreferrer"
            >
              Построить маршрут
            </a>
          </div>
        </div>
        <iframe
          title="Яндекс Карта: Aura, Арзамас, улица Победы, 19А"
          src={contacts.venue.map}
          loading="lazy"
          allowFullScreen
        />
      </SLocation>
      <SSectionTitle id="organization-title">Сведения об организации</SSectionTitle>
      <SDetails aria-labelledby="organization-title">
        {organizationDetails.map(({ label, value }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </SDetails>
    </SContent>
  </SAboutScreen>
);
