'use client';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  SAddress,
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
    <SPhoneContact className={className} itemScope itemType="https://schema.org/Hotel">
      <meta itemProp="name" content="Гостиничный комплекс «AURA» в Арзамасе" />
      <meta itemProp="telephone" content="+79524481951" />

      <SPhoneAction itemProp="telephone">
        <STel href="tel:+79524481951" aria-label="Позвонить в AURA">
          <SPhoneIcon>
            <FontAwesomeIcon icon={faPhone} />
          </SPhoneIcon>
          <SPhoneLabel>+7 (952) 448-19-51</SPhoneLabel>
        </STel>
      </SPhoneAction>

      <SAddress itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="addressCountry" content="RU" />
        <meta itemProp="addressRegion" content="Нижегородская область" />
        <meta itemProp="addressLocality" content="Арзамас" />
        <span itemProp="addressLocality">Арзамас</span>,
        <span itemProp="streetAddress">ул. Победы, 19</span>
      </SAddress>
    </SPhoneContact>
  );
};
