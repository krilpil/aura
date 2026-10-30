'use client';

import styled from 'styled-components';

export const SAboutScreen = styled.main`
  ${({ theme }) => theme.typography.body};
  padding: calc(120px + env(safe-area-inset-top, 0px)) 0 clamp(64px, 8vw, 112px);
  background: ${({ theme }) => theme.color.surface.default};
  color: ${({ theme }) => theme.color.text.primary};

  a:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.outline.focus};
    outline-offset: 5px;
  }

  @media (max-width: 800px) {
    padding-top: calc(100px + env(safe-area-inset-top, 0px));
  }
`;

export const SContent = styled.div`
  width: min(1320px, calc(100% - clamp(32px, 10vw, 144px)));
  margin: 0 auto;

  h1 {
    ${({ theme }) => theme.typography.hero};
    margin: clamp(30px, 4vw, 52px) 0 clamp(32px, 4vw, 48px);

    color: ${({ theme }) => theme.color.brand.onPrimaryContainer};
  }
`;

export const SDescription = styled.section`
  max-width: 80ch;
  margin-bottom: clamp(40px, 5vw, 72px);

  p {
    ${({ theme }) => theme.typography.body};
    margin: 0 0 22px;
    color: ${({ theme }) => theme.color.text.secondary};
  }

  .description-lead {
    ${({ theme }) => theme.typography.bodyStrong};
    color: ${({ theme }) => theme.color.text.primary};
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const SDetails = styled.dl`
  margin: 28px 0 0;
  border-top: 1px solid ${({ theme }) => theme.color.outline.base};

  > div {
    display: grid;
    grid-template-columns: minmax(0, 0.65fr) minmax(0, 1.35fr);
    gap: 8px 40px;
    padding: 22px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.outline.base};
  }

  dt {
    ${({ theme }) => theme.typography.caption};
    color: ${({ theme }) => theme.color.text.secondary};
  }
  dd {
    ${({ theme }) => theme.typography.body};
    min-width: 0;
    margin: 0;
    overflow-wrap: anywhere;
  }

  @media (max-width: 800px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const SContacts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(32px, 7vw, 100px);
  width: 100%;
  margin: 0;
  padding: 0 0 clamp(48px, 6vw, 88px);
  border-bottom: 1px solid ${({ theme }) => theme.color.outline.base};

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SContactColumn = styled.div`
  min-width: 0;

  h2 {
    ${({ theme }) => theme.typography.card};
    margin: 0 0 20px;
    color: ${({ theme }) => theme.color.text.secondary};
  }

  .phone {
    ${({ theme }) => theme.typography.phone};
    display: inline-block;
    color: ${({ theme }) => theme.color.brand.primary};
    text-decoration: none;
    white-space: nowrap;
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 6px;
  }
  .email {
    ${({ theme }) => theme.typography.body};
    display: block;
    width: fit-content;
    padding: 10px 0;
    color: ${({ theme }) => theme.color.brand.primary};
    text-decoration-thickness: 1px;
    text-underline-offset: 5px;
    overflow-wrap: anywhere;
  }
`;

export const SSectionTitle = styled.h2`
  ${({ theme }) => theme.typography.section};
  margin: 0;

  text-wrap: balance;
`;

export const SLocation = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: clamp(56px, 7vw, 96px) 0 clamp(56px, 7vw, 96px);

  .location-heading {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: clamp(28px, 7vw, 100px);
    margin-bottom: 36px;
  }

  address {
    ${({ theme }) => theme.typography.body};
    font-style: normal;
  }
  .hours-label {
    ${({ theme }) => theme.typography.caption};
    margin: 24px 0 6px;
    color: ${({ theme }) => theme.color.text.secondary};
  }
  .hours {
    ${({ theme }) => theme.typography.body};
    margin: 0;
  }
  .route {
    ${({ theme }) => theme.typography.button};
    display: inline-flex;
    align-items: center;
    min-height: 48px;
    margin-top: 20px;
    color: ${({ theme }) => theme.color.brand.primary};
    text-underline-offset: 6px;
  }

  iframe {
    display: block;
    width: 100%;
    height: 480px;
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
    background: ${({ theme }) => theme.color.surface.containerHigh};
  }

  @media (max-width: 800px) {
    .location-heading {
      grid-template-columns: 1fr;
    }
    iframe {
      height: 340px;
    }
  }
`;
