'use client';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  SOpeningHours,
  SPhoneAction,
  SPhoneContact,
  SPhoneIcon,
  SPhoneLabel,
  STel,
} from './phoneContact.styles';

interface IPhoneContactProps {
  className?: string;
}

export const PhoneContact = ({ className }: IPhoneContactProps) => {
  return (
    <SPhoneContact className={className} itemScope itemType="http://schema.org">
      <meta itemProp="name" content="Гостиничный комплекс «AURA» в Арзамасе" />

      <SPhoneAction itemProp="telephone">
        <STel href="tel:+79524481951" aria-label="Позвонить в AURA">
          <SPhoneIcon>
            <FontAwesomeIcon icon={faPhone} />
          </SPhoneIcon>
          <SPhoneLabel>+7 (952) 448-19-51</SPhoneLabel>
        </STel>
      </SPhoneAction>

      <time itemProp="openingHours" dateTime="Mo-Su 09:00-21:00">
        <SOpeningHours>Ежедневно 9:00-21:00</SOpeningHours>
      </time>
    </SPhoneContact>
  );
};
