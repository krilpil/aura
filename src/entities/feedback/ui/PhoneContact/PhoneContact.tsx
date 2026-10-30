'use client';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { contacts } from '@/shared/config/contacts';

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
    <SPhoneContact className={className}>
      <SPhoneAction>
        <STel href={contacts.booking.href} aria-label="Позвонить в AURA">
          <SPhoneIcon>
            <FontAwesomeIcon icon={faPhone} />
          </SPhoneIcon>
          <SPhoneLabel>{contacts.booking.phone}</SPhoneLabel>
        </STel>
      </SPhoneAction>

      <SAddress>{contacts.venue.street}</SAddress>
    </SPhoneContact>
  );
};
