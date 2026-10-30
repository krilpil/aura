'use client';

import styled from 'styled-components';

export const SHouseInfoSidebar = styled.div`
  position: sticky;
  top: 100px;

  display: grid;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    position: static;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SBookingCard = styled.aside`
  padding: 0 0 clamp(24px, 3vw, 34px);

  border-bottom: 1px solid rgba(31, 90, 61, 0.18);
`;

export const SBookingTitle = styled.h3`
  ${({ theme }) => theme.typography.card};
  max-width: 270px;
  margin: 0 0 22px;

  color: #1d2b22;
  text-wrap: balance;
`;

export const SPricePanel = styled.div`
  margin-bottom: 22px;
  padding: 0 0 22px;

  border-bottom: 1px solid rgba(31, 90, 61, 0.16);
`;

export const SPriceCaption = styled.p`
  ${({ theme }) => theme.typography.caption};
  margin: 0 0 10px;

  color: ${({ theme }) => theme.color.text.tertiary};
`;

export const SPrice = styled.p`
  ${({ theme }) => theme.typography.section};
  margin: 0;

  color: #1d2b22;
`;

export const SPriceNote = styled.p`
  ${({ theme }) => theme.typography.caption};
  max-width: 300px;
  margin: 14px 0 0;

  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SBookingText = styled.p`
  ${({ theme }) => theme.typography.body};
  margin: 0 0 16px;

  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SPhoneLink = styled.a`
  ${({ theme }) => theme.typography.phone};
  position: relative;

  display: inline-block;

  color: ${({ theme }) => theme.color.text.primary};

  text-decoration: none;

  &::after {
    position: absolute;
    right: 0;
    bottom: -4px;
    left: 0;

    height: 1px;

    content: '';

    background: currentColor;

    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 220ms ease;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover::after {
      transform: scaleX(1);
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.outline.focus};
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`;

export const SCharacteristicsCard = styled.aside`
  padding: clamp(24px, 3vw, 34px) 0 0;
`;

export const SCharacteristicsGrid = styled.div`
  display: grid;
  gap: 0;
  margin: 0;
`;

export const SCharacteristicItem = styled.div`
  display: grid;
  grid-template-columns: minmax(96px, 0.72fr) minmax(0, 1fr);
  gap: 18px;
  align-items: baseline;

  min-height: 56px;
  padding: 16px 0;

  border-bottom: 1px solid rgba(31, 90, 61, 0.16);

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

export const SCharacteristicLabel = styled.span`
  ${({ theme }) => theme.typography.caption};

  color: ${({ theme }) => theme.color.text.tertiary};
`;

export const SCharacteristicValue = styled.span`
  ${({ theme }) => theme.typography.meta};

  color: #1d2b22;
`;

export const SBookingActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
