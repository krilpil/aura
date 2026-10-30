import { EventRequestModalTrigger } from '@/features/EventRequest';

import { getPhoneHref } from '../lib';
import type { IHouseInfoSidebarProps } from '../model';
import {
  SBookingActions,
  SBookingCard,
  SBookingText,
  SBookingTitle,
  SCharacteristicItem,
  SCharacteristicLabel,
  SCharacteristicValue,
  SCharacteristicsCard,
  SCharacteristicsGrid,
  SHouseInfoSidebar,
  SPhoneLink,
  SPrice,
  SPriceCaption,
  SPriceNote,
  SPricePanel,
} from './houseInfoSidebar.styles';

export const HouseInfoSidebar = ({
  price,
  phone,
  characteristics,
  requestType,
  bookingTitle = 'Забронировать проживание',
  priceNote = 'Дом целиком для компании до 6 человек.',
  bookingText = 'Оставьте заявку или позвоните — подскажем свободные даты и обсудим условия проживания.',
}: IHouseInfoSidebarProps) => {
  return (
    <SHouseInfoSidebar>
      <SBookingCard>
        <SBookingTitle>{bookingTitle}</SBookingTitle>
        <SPricePanel>
          <SPriceCaption>Стоимость за сутки</SPriceCaption>
          <SPrice>{price}</SPrice>
          <SPriceNote>{priceNote}</SPriceNote>
        </SPricePanel>
        <SBookingText>{bookingText}</SBookingText>
        <SBookingActions>
          <SPhoneLink href={getPhoneHref(phone)}>{phone}</SPhoneLink>
          <EventRequestModalTrigger requestType={requestType} variant="primary">
            Оставить заявку
          </EventRequestModalTrigger>
        </SBookingActions>
      </SBookingCard>

      <SCharacteristicsCard>
        <SCharacteristicsGrid>
          {characteristics.map((characteristic) => (
            <SCharacteristicItem key={characteristic.label}>
              <SCharacteristicLabel>{characteristic.label}</SCharacteristicLabel>
              <SCharacteristicValue>{characteristic.value}</SCharacteristicValue>
            </SCharacteristicItem>
          ))}
        </SCharacteristicsGrid>
      </SCharacteristicsCard>
    </SHouseInfoSidebar>
  );
};
