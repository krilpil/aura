import { Hero } from '@/widgets/Hero';
import { ShortActions } from '@/widgets/ShortActions';
import { AdditionalActivities } from '@/widgets/AdditionalActivities';
import { TerritoryMap } from '@/widgets/TerritoryMap';

import {
  SHomeIntro,
  SEventContent,
  SEventLink,
  SEvents,
  SEventsHeader,
  SEventsLinks,
  SEventsTitle,
  SHomeScreen,
} from './homeScreen.styles';

const events = [
  {
    label: 'Корпоративные клиенты',
    href: '/events/corporate',
    description: 'Командные встречи, банкеты и отдых на природе.',
  },
  {
    label: 'Частные события',
    href: '/events/private',
    description: 'Дни рождения, юбилеи и тёплые встречи с близкими.',
  },
  {
    label: 'Свадьбы',
    href: '/events/weddings',
    description: 'Церемония у воды и праздничный ужин среди леса.',
  },
  {
    label: 'Выпускные',
    href: '/events/graduation',
    description: 'Особенный вечер, с которого начинается новая история.',
  },
  {
    label: 'Спортивный комплекс',
    href: '/events/sports',
    description: 'Планируемое крытое пространство для индивидуальных и командных игр.',
  },
];

export const HomeScreen = () => {
  return (
    <SHomeScreen>
      <Hero />
      <SHomeIntro>
        <h1>AURA — ресторан и площадка для мероприятий в Арзамасе</h1>
        <p>
          Свадьбы, юбилеи, выпускные и корпоративы среди леса у реки в Нижегородской области. Залы
          «Лесная симфония» до 60 гостей и «Большая вода» до 120 гостей, авторская фьюжн-кухня и
          ресторанный сервис — для праздника, продуманного до деталей.
        </p>
      </SHomeIntro>
      <AdditionalActivities
        seamless
        headerLayout="split"
        title={
          <>
            <span>Спортивные </span>
            <span>развлечения </span>
            <span>на территории</span>
          </>
        }
        description={
          'Лесные маршруты, игры на свежем воздухе и отдых у воды — в AURA можно провести ' +
          'активный день с близкими или дополнить программу вашего события.'
        }
      />
      <ShortActions />
      <SEvents id="events" aria-labelledby="home-events-title">
        <SEventsHeader>
          <SEventsTitle id="home-events-title">Мероприятия</SEventsTitle>
          <p>
            Важные поводы — в особенном месте. Лес, река и ресторанный сервис для вашего события.
          </p>
        </SEventsHeader>
        <SEventsLinks aria-label="Форматы мероприятий">
          {events.map((event) => (
            <SEventLink key={event.href} href={event.href}>
              <SEventContent>
                <h3>{event.label}</h3>
                <p>{event.description}</p>
              </SEventContent>
            </SEventLink>
          ))}
        </SEventsLinks>
      </SEvents>
      <TerritoryMap />
    </SHomeScreen>
  );
};
