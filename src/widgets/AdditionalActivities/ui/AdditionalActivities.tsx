import Image from 'next/image';
import type { ReactNode } from 'react';

import { getActivityOffers } from '../lib';
import {
  SActivities,
  SCard,
  SCardImage,
  SCardTitle,
  SDescription,
  SGrid,
  SInner,
  SSectionHeader,
  STitle,
} from './additionalActivities.styles';

interface IAdditionalActivitiesProps {
  title?: ReactNode;
  description?: string;
  seamless?: boolean;
  headerLayout?: 'stacked' | 'split';
}

export const AdditionalActivities = ({
  title = 'Спортивные развлечения на территории',
  description,
  seamless = false,
  headerLayout = 'stacked',
}: IAdditionalActivitiesProps) => {
  return (
    <SActivities $seamless={seamless} aria-labelledby="additional-activities-title">
      <SInner>
        <SSectionHeader $split={headerLayout === 'split'}>
          <STitle id="additional-activities-title" $hasDescription={Boolean(description)}>
            {title}
          </STitle>
          {description && <SDescription>{description}</SDescription>}
        </SSectionHeader>

        <SGrid>
          {getActivityOffers().map((activity) => (
            <SCard href={activity.href} prefetch={false} key={activity.id}>
              <SCardImage>
                <Image src={activity.image} alt="" fill sizes="(max-width: 1199px) 50vw, 33vw" />
              </SCardImage>
              <SCardTitle>{activity.title}</SCardTitle>
            </SCard>
          ))}
        </SGrid>
      </SInner>
    </SActivities>
  );
};
