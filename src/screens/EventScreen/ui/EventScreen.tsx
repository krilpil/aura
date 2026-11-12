import Image from 'next/image';

import { EventRequestSection } from '@/features/EventRequest';
import { Breadcrumbs } from '@/features/Breadcrumbs';
import { AdditionalActivities } from '@/widgets/AdditionalActivities';

import { eventPages, type EventKind } from '../model/events';
import {
  SEquipment,
  SEquipmentCopy,
  SEquipmentGrid,
  SEquipmentList,
  SEquipmentNote,
  SEventScreen,
  SFormat,
  SFormatList,
  SFormatName,
  SFormatText,
  SHall,
  SHallBody,
  SHallImage,
  SHallLink,
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
} from './eventScreen.styles';

interface IEventScreenProps {
  event: EventKind;
}

export const EventScreen = ({ event }: IEventScreenProps) => {
  const content = eventPages[event];

  return (
    <SEventScreen>
      <SHero>
        <SHeroImage>
          <Image src={content.heroImage} alt={content.heroAlt} fill preload sizes="100vw" />
        </SHeroImage>
        <SHeroContent>
          <SHeroTitle>{content.heading}</SHeroTitle>
          <SHeroLead>{content.lead}</SHeroLead>
          <SHeroLink href="#request">Обсудить событие</SHeroLink>
        </SHeroContent>
      </SHero>

      <SIntro>
        <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: content.breadcrumb }]} />
        <SIntroText>{content.intro}</SIntroText>
      </SIntro>

      <SSection aria-labelledby={`${event}-formats-title`}>
        <SSectionHeader>
          <SSectionTitle id={`${event}-formats-title`}>{content.formatsTitle}</SSectionTitle>
          <p>{content.formatsIntro}</p>
        </SSectionHeader>
        <SFormatList>
          {content.formats.map((format) => (
            <SFormat key={format.title}>
              <SFormatName>{format.title}</SFormatName>
              <SFormatText>{format.text}</SFormatText>
            </SFormat>
          ))}
        </SFormatList>
      </SSection>

      <SHalls aria-labelledby={`${event}-spaces-title`}>
        <SSectionHeader>
          <SSectionTitle id={`${event}-spaces-title`}>
            Пространство для вашего праздника
          </SSectionTitle>
          <p>{content.spacesIntro}</p>
        </SSectionHeader>
        <SHallsList>
          {content.spaces.map((space) => (
            <SHall key={space.name} data-pavilion={space.pavilion || undefined}>
              <SHallImage>
                <Image
                  src={space.image}
                  alt={space.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </SHallImage>
              <SHallBody>
                <SHallMeta>{space.guests}</SHallMeta>
                <SHallName>{space.name}</SHallName>
                <SHallText>{space.text}</SHallText>
                <SHallLink href={space.href}>Подробнее о пространстве</SHallLink>
              </SHallBody>
            </SHall>
          ))}
        </SHallsList>
      </SHalls>

      <SEquipment aria-labelledby={`${event}-support-title`}>
        <SEquipmentGrid>
          <div>
            <SSectionTitle id={`${event}-support-title`}>{content.supportTitle}</SSectionTitle>
            <SEquipmentCopy>{content.supportIntro}</SEquipmentCopy>
          </div>
          <div>
            <SEquipmentList>
              {content.supportItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </SEquipmentList>
            <SEquipmentNote>{content.supportNote}</SEquipmentNote>
          </div>
        </SEquipmentGrid>
      </SEquipment>

      <SService aria-labelledby={`${event}-cuisine-title`}>
        <SServiceImage>
          <Image
            src="/media/restaurant/big-water.webp"
            alt="Ресторан Aura с празднично сервированными столами"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </SServiceImage>
        <div>
          <SSectionTitle id={`${event}-cuisine-title`}>{content.cuisineTitle}</SSectionTitle>
          <SServiceText>{content.cuisineText}</SServiceText>
          <SHallLink href="/restaurant">Подробнее о ресторане</SHallLink>
        </div>
      </SService>

      <AdditionalActivities
        title={content.activitiesTitle}
        description={content.activitiesDescription}
        seamless
      />

      <EventRequestSection
        id="request"
        requestType={event}
        title={content.bookingTitle}
        description={content.bookingText}
      />
    </SEventScreen>
  );
};
