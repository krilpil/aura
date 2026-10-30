import Image from 'next/image';

import { EventRequestModalTrigger } from '@/features/EventRequest';
import { Breadcrumbs } from '@/features/Breadcrumbs';
import { getActivityOffers } from '@/widgets/AdditionalActivities';

import { LasertagTariffs } from './LasertagTariffs';
import {
  SActivity,
  SActivityAudience,
  SActivityAudienceLabel,
  SActivityBody,
  SActivityDescription,
  SActivityImage,
  SActivityTitle,
  SActivitiesList,
  SActivitiesScreen,
  SClosing,
  SClosingInner,
  SClosingText,
  SClosingTitle,
  SHero,
  SHeroContent,
  SHeroImage,
  SHeroLead,
  SHeroTitle,
  SIntro,
  SIntroText,
  SRequestActions,
  SJumpLink,
  SJumpLinks,
} from './activitiesScreen.styles';

const activities = getActivityOffers();

export const ActivitiesScreen = () => (
  <SActivitiesScreen>
    <SHero>
      <SHeroImage>
        <Image
          src="/media/promo/water-activities.jpg"
          alt="Сапы и байдарка на реке у лесного берега"
          fill
          preload
          sizes="100vw"
        />
      </SHeroImage>
      <SHeroContent>
        <SHeroTitle>Активный отдых в AURA в Арзамасе</SHeroTitle>
        <SHeroLead>
          Смените ритм у воды, соберите друзей для игры или проведите день с семьёй среди природы.
          Выберите занятие, которое подходит вашему отдыху.
        </SHeroLead>
      </SHeroContent>
    </SHero>

    <SIntro>
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Активный отдых' }]} />
      <SIntroText>
        Приезжайте в Aura за временем на свежем воздухе — для спокойной прогулки или общего азарта.
      </SIntroText>
      <SJumpLinks aria-label="Выбрать активность">
        {activities.map((activity) => (
          <SJumpLink href={activity.href} key={activity.id}>
            {activity.title}
          </SJumpLink>
        ))}
      </SJumpLinks>
    </SIntro>

    <SActivitiesList aria-label="Виды активного отдыха">
      {activities.map((activity) => (
        <SActivity id={activity.id} aria-labelledby={`${activity.id}-title`} key={activity.id}>
          <SActivityImage>
            <Image
              src={activity.image}
              alt={activity.imageAlt}
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </SActivityImage>
          <SActivityBody>
            <SActivityTitle id={`${activity.id}-title`}>{activity.title}</SActivityTitle>
            <SActivityDescription>{activity.description}</SActivityDescription>
            <SActivityAudience>
              <SActivityAudienceLabel>Кому подойдёт</SActivityAudienceLabel>
              <span>{activity.audience}</span>
            </SActivityAudience>
            <SRequestActions>
              <EventRequestModalTrigger
                requestType="activities"
                initialValues={{ activity: activity.title }}
              >
                Уточнить условия
              </EventRequestModalTrigger>
            </SRequestActions>
          </SActivityBody>
          {activity.id === 'lasertag' && <LasertagTariffs />}
        </SActivity>
      ))}
    </SActivitiesList>

    <SClosing aria-labelledby="activities-contact-title">
      <SClosingInner>
        <SClosingTitle id="activities-contact-title">Планируете день в Aura?</SClosingTitle>
        <SClosingText>
          Оставьте заявку — расскажем, какие активности доступны на вашу дату, и поможем составить
          программу. Уточним условия и стоимость выбранных занятий.
        </SClosingText>
        <SRequestActions>
          <EventRequestModalTrigger requestType="activities" variant="primary">
            Обсудить программу
          </EventRequestModalTrigger>
        </SRequestActions>
      </SClosingInner>
    </SClosing>
  </SActivitiesScreen>
);
