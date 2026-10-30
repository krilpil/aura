import type { EventRequestType } from '@/shared/config/eventRequest';

export interface IHouseCharacteristic {
  label: string;
  value: string;
}

export interface IHouseInfoSidebarProps {
  price: string;
  phone: string;
  characteristics: readonly IHouseCharacteristic[];
  requestType: Extract<EventRequestType, 'houseDay' | 'houseStay'>;
  bookingTitle?: string;
  priceNote?: string;
  bookingText?: string;
}
