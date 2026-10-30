import Image from 'next/image';

import { EventRequestModalTrigger } from '@/features/EventRequest';
import { Breadcrumbs } from '@/features/Breadcrumbs';
import { Gallery } from '@/widgets/Gallery';

import { formatMenuPrice, restaurantInfo } from '../model/menu';
import { RestaurantMenu } from './RestaurantMenu';
import {
  SActions,
  SBooking,
  SButton,
  SCuisine,
  SGallerySection,
  SHall,
  SHallImage,
  SHalls,
  SHero,
  SHeroContent,
  SHeroImage,
  SIntro,
  SIntroColumns,
  SLocation,
  SMenu,
  SPavilion,
  SPavilionImage,
  SRestaurantScreen,
  SRequestActions,
  SRestaurantFacts,
  SSection,
  SSectionHeader,
  SService,
  SText,
  STextLink,
  STitle,
} from './restaurantScreen.styles';

const phoneHref = 'tel:+79993950375';

const halls = [
  {
    id: 'big-water',
    name: 'Большая вода',
    capacity: 'До 120 гостей',
    description:
      'Просторный панорамный зал для большого праздника. Соберите близких за красиво ' +
      'сервированными столами — для свадьбы, выпускного или торжественного вечера.',
    image: '/media/restaurant/big-water.webp',
    alt: 'Панорамный банкетный зал «Большая вода» с праздничной сервировкой',
  },
  {
    id: 'forest-symphony',
    name: 'Лесная симфония',
    capacity: 'До 60 гостей',
    description:
      'Камерный зал для встреч в близком кругу. Тёплая атмосфера, продуманная сервировка ' +
      'и ресторанный сервис для семейного ужина, юбилея или небольшой свадьбы.',
    image: '/media/restaurant/forest-symphony.webp',
    alt: 'Интерьер зала «Лесная симфония» с накрытыми столами',
  },
];

const galleryImages = [
  {
    src: '/media/restaurant/big-water.webp',
    alt: 'Зал «Большая вода»: сервированные столы и панорамные окна с видом на лес',
  },
  {
    src: '/media/restaurant/entrance.webp',
    alt: 'Входная зона Aura с мраморной стойкой и светлыми арками',
  },
  {
    src: '/media/restaurant/interior-detail.webp',
    alt: 'Детали интерьера Aura: плетёные светильники, мягкие диваны и живые растения',
  },
  {
    src: '/media/restaurant/forest-symphony.webp',
    alt: 'Зал «Лесная симфония»: мягкие диваны, сервировка и окна с видом на лес',
  },
];

export const RestaurantScreen = () => (
  <SRestaurantScreen>
    <SHero>
      <SHeroImage>
        <Image
          src="/media/restaurant/big-water.webp"
          alt="Ресторан Aura с сервированными столами и видом на лес"
          fill
          preload
          sizes="100vw"
        />
      </SHeroImage>
      <SHeroContent>
        <h1>Ресторан AURA в Арзамасе</h1>
        <p>Авторская кухня, тёплые встречи и большие праздники. Среди леса, рядом с рекой.</p>
        <SActions>
          <SButton href="#menu">Посмотреть меню</SButton>
          <STextLink href="#spaces">Выбрать пространство</STextLink>
        </SActions>
      </SHeroContent>
    </SHero>

    <SIntro>
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Ресторан' }]} />
      <p>Место, где вкус и атмосфера становятся частью вашего события.</p>
      <SIntroColumns>
        <SCuisine>
          <SText>
            В основе кухни Aura — российские продукты, азиатские техники и европейская подача.
            Авторский подход раскрывается в сочетаниях вкусов и внимании к каждому блюду.
          </SText>
          <SText>
            От первой закуски до десерта мы продумываем ужин как часть вашей встречи. Для торжества
            поможем составить меню под формат события.
          </SText>
          <STextLink href="#menu">Познакомиться с меню</STextLink>
        </SCuisine>
        <SRestaurantFacts aria-label="Информация о ресторане">
          <div>
            <dt>Кухни</dt>
            <dd>{restaurantInfo.cuisines.join(', ')}</dd>
          </div>
          <div>
            <dt>Средний чек</dt>
            <dd>
              {formatMenuPrice(restaurantInfo.averageCheck)}
              <span className="fact-note">на человека</span>
            </dd>
          </div>
          <div>
            <dt>Режим работы</dt>
            <dd>
              {restaurantInfo.hours.opens}–{restaurantInfo.hours.closes}
              <span className="fact-note">{restaurantInfo.hours.label}</span>
            </dd>
          </div>
        </SRestaurantFacts>
      </SIntroColumns>
    </SIntro>

    <SMenu id="menu" aria-labelledby="menu-title">
      <SSectionHeader>
        <STitle id="menu-title">Меню ресторана</STitle>
        <p>Листайте меню, выбирайте блюда или скачайте PDF, чтобы обсудить заказ с близкими.</p>
      </SSectionHeader>
      <RestaurantMenu />
    </SMenu>

    <SSection id="spaces" aria-labelledby="spaces-title">
      <SSectionHeader>
        <STitle id="spaces-title">Три пространства для вашей встречи</STitle>
        <p>Два зала и открытый свадебный павильон. У каждого — своя атмосфера.</p>
      </SSectionHeader>
      <SHalls>
        {halls.map((hall) => (
          <SHall id={hall.id} key={hall.id}>
            <SHallImage>
              <Image src={hall.image} alt={hall.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
            </SHallImage>
            <div className="hall-body">
              <span className="hall-capacity">{hall.capacity}</span>
              <h3>{hall.name}</h3>
              <p>{hall.description}</p>
              <SRequestActions>
                <EventRequestModalTrigger
                  requestType="restaurant"
                  initialValues={{ space: hall.name }}
                >
                  Обсудить бронирование
                </EventRequestModalTrigger>
              </SRequestActions>
            </div>
          </SHall>
        ))}
      </SHalls>
      <SPavilion id="wedding-pavilion">
        <SPavilionImage>
          <Image
            src="/media/actions/canopy.webp"
            alt="Открытый свадебный павильон Aura с двускатной крышей без стен"
            width={1674}
            height={940}
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </SPavilionImage>
        <div>
          <span className="hall-capacity">Под открытым небом</span>
          <h3>Свадебный павильон</h3>
          <p>
            Открытый двускатный навес без стен: свежий воздух, природа вокруг и ощущение простора.
            Для свадебного банкета с ресторанной сервировкой и обслуживанием.
          </p>
          <p>Вместимость, доступность на вашу дату и условия проведения обсудим лично.</p>
          <SRequestActions>
            <EventRequestModalTrigger
              requestType="restaurant"
              initialValues={{ space: 'Павильон', format: 'Свадьба' }}
            >
              Обсудить свадьбу в павильоне
            </EventRequestModalTrigger>
          </SRequestActions>
        </div>
      </SPavilion>
    </SSection>

    <SService aria-labelledby="service-title">
      <div className="service-inner">
        <div>
          <STitle id="service-title">Ресторан выходит навстречу природе</STitle>
          <SText>
            Фуршет у реки, приём на лесной поляне или банкет на свежем воздухе. Организуем выездное
            обслуживание с тем же вниманием к подаче и гостям.
          </SText>
          <SRequestActions>
            <EventRequestModalTrigger requestType="restaurant">
              Обсудить меню события
            </EventRequestModalTrigger>
          </SRequestActions>
        </div>
        <ul>
          <li>Банкетное меню под формат встречи</li>
          <li>Фуршеты и выездное обслуживание</li>
          <li>Мобильные барные и сервисные станции</li>
          <li>Белый текстиль и безупречное стекло</li>
        </ul>
      </div>
    </SService>

    <SGallerySection aria-labelledby="restaurant-gallery-title">
      <SSectionHeader>
        <STitle id="restaurant-gallery-title">Атмосфера Aura</STitle>
        <p>Мягкий свет, сервировка и пространство для ваших самых тёплых встреч.</p>
      </SSectionHeader>
      <Gallery images={galleryImages} ariaLabel="Интерьеры ресторана и банкетных залов Aura" />
    </SGallerySection>

    <SBooking id="booking" aria-labelledby="restaurant-booking-title">
      <div>
        <STitle id="restaurant-booking-title">Начнём с вашей даты</STitle>
        <SText>
          Планируете торжество? Оставьте заявку или позвоните — уточним доступность пространств,
          обсудим меню и условия проведения вашего события.
        </SText>
      </div>
      <div className="booking-contact">
        <a href={phoneHref}>8 (999) 395-03-75</a>
        <p>Aura · Арзамас, Нижегородская область</p>
        <SRequestActions>
          <EventRequestModalTrigger requestType="restaurant" variant="primary">
            Обсудить бронирование
          </EventRequestModalTrigger>
        </SRequestActions>
      </div>
    </SBooking>
    <SLocation id="location" aria-labelledby="restaurant-location-title">
      <SSectionHeader>
        <STitle id="restaurant-location-title">Как добраться</STitle>
      </SSectionHeader>
      <iframe
        title="Яндекс Карта: Арзамас, улица Победы, 19А"
        src={
          'https://yandex.ru/map-widget/v1/?ll=43.816434%2C55.423157&z=17&mode=whatshere' +
          '&whatshere%5Bpoint%5D=43.816434%2C55.423157&whatshere%5Bzoom%5D=17'
        }
        loading="lazy"
        allowFullScreen
      />
    </SLocation>
  </SRestaurantScreen>
);
