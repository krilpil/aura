import Image from 'next/image';

import { Breadcrumbs } from '@/features/Breadcrumbs';
import { EventRequestSection } from '@/features/EventRequest';
import { corporateFormats as formats } from '@/shared/config/eventRequest';
import { AdditionalActivities } from '@/widgets/AdditionalActivities';

import {
  SCorporateScreen,
  SEquipment,
  SEquipmentCopy,
  SEquipmentGrid,
  SEquipmentList,
  SEquipmentNote,
  SFormat,
  SFormatList,
  SFormatName,
  SFormatText,
  SHall,
  SHallBody,
  SHallImage,
  SHallMeta,
  SHallName,
  SHallText,
  SHalls,
  SHallsList,
  SHero,
  SHeroContent,
  SHeroImage,
  SHeroLead,
  SHeroLink,
  SHeroTitle,
  SIntro,
  SIntroText,
  SSection,
  SSectionHeader,
  SSectionTitle,
  SService,
  SServiceImage,
  SServiceText,
} from './corporateScreen.styles';

const halls = [
  {
    name: 'Лесная симфония',
    guests: 'До 60 гостей',
    text: 'Камерный зал для стратегических сессий, встреч команд и праздничных ужинов в близком кругу.',
    image: '/media/restaurant/forest-symphony.webp',
    alt: 'Зал Лесная симфония с сервированными столами и видом на лес',
  },
  {
    name: 'Большая вода',
    guests: 'До 120 гостей',
    text: 'Просторный панорамный зал для конференций, общих сборов и масштабных корпоративных вечеров.',
    image: '/media/restaurant/big-water.webp',
    alt: 'Панорамный зал Большая вода с банкетной сервировкой',
  },
];

const equipment = ['Экран', 'Проектор', 'Звук', 'Микрофоны', 'Wi-Fi', 'Флипчарты'];

export const CorporateScreen = () => {
  return (
    <SCorporateScreen>
      <SHero>
        <SHeroImage>
          <Image
            src="/media/actions/corporate-hero.jpg"
            alt="Подготовленный к корпоративному мероприятию зал Aura с сервированными столами и экраном"
            fill
            preload
            sizes="100vw"
          />
        </SHeroImage>
        <SHeroContent>
          <SHeroTitle>Корпоративы в AURA в Арзамасе</SHeroTitle>
          <SHeroLead>
            Деловая программа, праздничный ужин и время для команды — среди леса у реки, с
            ресторанным сервисом.
          </SHeroLead>
          <SHeroLink href="#request">Оставить заявку</SHeroLink>
        </SHeroContent>
      </SHero>

      <SIntro>
        <Breadcrumbs
          items={[{ label: 'Главная', href: '/' }, { label: 'Корпоративные события' }]}
        />
        <SIntroText>
          Здесь легко сменить ритм: сосредоточиться на важных решениях, собрать коллег за одним
          столом и провести время вместе за пределами города.
        </SIntroText>
      </SIntro>

      <SSection aria-labelledby="corporate-formats-title">
        <SSectionHeader>
          <SSectionTitle id="corporate-formats-title">Для разных задач команды</SSectionTitle>
          <p>
            От содержательной встречи до большого праздника — программа складывается вокруг вас.
          </p>
        </SSectionHeader>
        <SFormatList>
          {formats.map((format) => (
            <SFormat key={format.title}>
              <SFormatName>{format.title}</SFormatName>
              <SFormatText>{format.text}</SFormatText>
            </SFormat>
          ))}
        </SFormatList>
      </SSection>

      <SHalls aria-labelledby="corporate-halls-title">
        <SSectionHeader>
          <SSectionTitle id="corporate-halls-title">Площадка под ваш масштаб</SSectionTitle>
          <p>
            Два зала с видом на природу — для камерной работы и событий с большим числом гостей.
          </p>
        </SSectionHeader>
        <SHallsList>
          {halls.map((hall) => (
            <SHall key={hall.name}>
              <SHallImage>
                <Image
                  src={hall.image}
                  alt={hall.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </SHallImage>
              <SHallBody>
                <SHallMeta>{hall.guests}</SHallMeta>
                <SHallName>{hall.name}</SHallName>
                <SHallText>{hall.text}</SHallText>
              </SHallBody>
            </SHall>
          ))}
        </SHallsList>
      </SHalls>

      <SEquipment aria-labelledby="corporate-equipment-title">
        <SEquipmentGrid>
          <div>
            <SSectionTitle id="corporate-equipment-title">Всё для работы по делу</SSectionTitle>
            <SEquipmentCopy>
              Презентация, выступление или работа в группах — техническую часть можно встроить в
              программу вашего события.
            </SEquipmentCopy>
          </div>
          <div>
            <SEquipmentList>
              {equipment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </SEquipmentList>
            <SEquipmentNote>Флипчартов хватит и для нескольких рабочих групп.</SEquipmentNote>
          </div>
        </SEquipmentGrid>
      </SEquipment>

      <SService aria-labelledby="corporate-service-title">
        <SServiceImage>
          <Image
            src="/media/restaurant/big-water.webp"
            alt="Ресторанная сервировка в зале Aura"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </SServiceImage>
        <div>
          <SSectionTitle id="corporate-service-title">Ужин — часть впечатления</SSectionTitle>
          <SServiceText>
            Авторское меню соединяет российские продукты, азиатские техники и европейскую подачу.
            Для встречи у воды или на лесной поляне организуем фуршет и выездное обслуживание.
          </SServiceText>
        </div>
      </SService>

      <AdditionalActivities
        title="Добавьте день для команды"
        description="Активности можно включить в программу до ужина или сделать основой выездного дня."
        seamless
      />

      <EventRequestSection id="request" requestType="corporate" />
    </SCorporateScreen>
  );
};
