'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const SHomeScreen = styled.div`
  ${({ theme }) => theme.typography.body};

  background: #f8f6f0;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: calc(100svh + 1px);
  }
`;

export const SEvents = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.5fr);
  gap: clamp(32px, 6vw, 88px);
  max-width: 1320px;
  width: calc(100% - clamp(32px, 10vw, 144px));
  margin: 0 auto;
  padding: clamp(40px, 5vw, 72px) 0 clamp(48px, 6vw, 88px);
  scroll-margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    grid-template-columns: 1fr;
  }
`;

export const SEventsTitle = styled.h2`
  ${({ theme }) => theme.typography.section};
  margin: 0;

  color: #1d2b22;
`;

export const SEventsHeader = styled.div`
  padding-top: 20px;

  p {
    ${({ theme }) => theme.typography.body};
    max-width: 360px;
    margin: 24px 0 0;

    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const SEventsLinks = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.color.outline.base};
`;

export const SEventLink = styled(Link)`
  display: block;
  border-top: 1px solid ${({ theme }) => theme.color.outline.base};
  color: #1d2b22;
  text-decoration: none;

  &:hover h3 {
    color: #856d55;
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 1px;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.outline.focus};
    outline-offset: 4px;
  }
`;

export const SEventContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: 16px 28px;
  padding: clamp(24px, 3vw, 36px) 0;

  h3 {
    ${({ theme }) => theme.typography.card};
    margin: 0;

    text-wrap: balance;
  }

  p {
    ${({ theme }) => theme.typography.body};
    max-width: 380px;
    margin: 0;
    color: ${({ theme }) => theme.color.text.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const SHomeIntro = styled.section`
  max-width: 1320px;
  width: calc(100% - clamp(32px, 10vw, 144px));
  margin: 0 auto;
  padding: clamp(32px, 5vw, 64px) 0;

  h1 {
    ${({ theme }) => theme.typography.section};
    margin: 0;

    color: ${({ theme }) => theme.color.text.primary};
    text-wrap: balance;
  }

  p {
    ${({ theme }) => theme.typography.body};
    max-width: 900px;
    margin: 24px 0 0;

    color: ${({ theme }) => theme.color.text.secondary};
  }
`;
