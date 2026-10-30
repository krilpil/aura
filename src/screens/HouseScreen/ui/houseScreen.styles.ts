'use client';

import styled from 'styled-components';

export const SHouseScreen = styled.main`
  min-height: 100svh;

  background:
    linear-gradient(180deg, #f7f6f1 0%, #eef0e8 100%), ${({ theme }) => theme.color.surface.default};

  color: ${({ theme }) => theme.color.text.primary};
`;

export const SHero = styled.section`
  position: relative;

  display: flex;
  align-items: flex-end;

  min-height: clamp(500px, 68svh, 660px);

  padding: clamp(112px, 10vw, 148px) clamp(20px, 5vw, 72px) clamp(42px, 5vw, 72px);

  overflow: hidden;
  isolation: isolate;

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;

    content: '';

    background:
      linear-gradient(
        90deg,
        rgba(15, 30, 22, 0.9) 0%,
        rgba(20, 38, 29, 0.64) 42%,
        rgba(20, 38, 29, 0.18) 74%
      ),
      linear-gradient(180deg, rgba(12, 24, 18, 0.1) 0%, rgba(12, 24, 18, 0.78) 100%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: 520px;

    padding: 104px clamp(20px, 5vw, 72px) 38px;

    &::after {
      background:
        linear-gradient(
          180deg,
          rgba(13, 25, 18, 0.12) 0%,
          rgba(13, 25, 18, 0.36) 36%,
          rgba(13, 25, 18, 0.92) 100%
        ),
        linear-gradient(90deg, rgba(13, 25, 18, 0.56), rgba(13, 25, 18, 0.04));
    }
  }
`;

export const SHeroImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    object-fit: cover;
    object-position: center;
    filter: saturate(0.96) contrast(1.06) brightness(0.9);
  }
`;

export const SHeroContent = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;

  gap: clamp(14px, 1.6vw, 22px);

  width: min(1320px, 100%);
  margin: 0 auto;

  color: ${({ theme }) => theme.color.text.inverse};
`;

export const SSubtitle = styled.p`
  ${({ theme }) => theme.typography.meta};
  margin: 0;

  color: rgba(255, 255, 255, 0.78);
`;

export const STitle = styled.h1`
  ${({ theme }) => theme.typography.hero};
  margin: 0;

  text-shadow:
    0 22px 56px rgba(0, 0, 0, 0.45),
    0 1px 0 rgba(255, 255, 255, 0.08);
`;

export const SLead = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 680px;
  margin: 0;

  color: rgba(255, 255, 255, 0.88);
  text-wrap: pretty;
`;

export const SFacts = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
`;

export const SFact = styled.span`
  ${({ theme }) => theme.typography.meta};
  display: inline-flex;
  align-items: center;

  min-height: 36px;

  padding: 8px 13px;

  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: ${({ theme }) => theme.borderRadius.full};

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);

  color: rgba(255, 255, 255, 0.9);
`;

export const SIntro = styled.section`
  padding: clamp(54px, 7vw, 96px) clamp(16px, 5vw, 72px) clamp(28px, 4vw, 48px);

  max-width: 1320px;
  margin: 0 auto;
`;

export const SDescription = styled.div`
  max-width: 820px;
`;

export const SSection = styled.section`
  padding: clamp(34px, 5vw, 64px) clamp(16px, 5vw, 72px);
`;

export const SBreadcrumbsSlot = styled.div`
  width: min(1320px, 100%);
  margin: 0 auto 22px;
`;

export const SStayLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.42fr) minmax(320px, 0.58fr);
  gap: clamp(18px, 3.6vw, 56px);
  align-items: start;

  max-width: 1320px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    grid-template-columns: 1fr;
  }
`;

export const SSectionTitle = styled.h2`
  ${({ theme }) => theme.typography.section};
  width: min(1320px, 100%);
  margin: 0 auto clamp(22px, 3vw, 34px);

  color: #1d2b22;
  text-wrap: balance;
`;

export const SSectionText = styled.p`
  ${({ theme }) => theme.typography.body};
  margin: 0;

  color: ${({ theme }) => theme.color.text.secondary};
  text-wrap: pretty;
`;

export const SDetailsSection = styled.section`
  padding: clamp(42px, 5vw, 72px) clamp(16px, 5vw, 72px);
`;

export const SDetailsInner = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export const SAmenitiesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(32px, 4vw, 52px) clamp(24px, 5vw, 72px);

  margin: clamp(28px, 4vw, 48px) 0 0;
  padding: 0;

  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SAmenityItem = styled.li`
  min-width: 0;
`;

export const SAmenityTitle = styled.h3`
  ${({ theme }) => theme.typography.card};
  margin: 0 0 10px;

  color: ${({ theme }) => theme.color.text.primary};
`;

export const SAmenityDescription = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 550px;
  margin: 0;

  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SConditionsGrid = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(32px, 4vw, 52px) clamp(24px, 5vw, 72px);

  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SConditionItem = styled.div`
  min-width: 0;
`;

export const SConditionLabel = styled.dt`
  ${({ theme }) => theme.typography.card};
  margin-bottom: 10px;

  color: ${({ theme }) => theme.color.text.primary};
`;

export const SConditionValue = styled.dd`
  ${({ theme }) => theme.typography.body};
  max-width: 550px;
  margin: 0;

  color: ${({ theme }) => theme.color.text.secondary};
`;
