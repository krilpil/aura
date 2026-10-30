'use client';

import styled from 'styled-components';

export const STariffs = styled.section`
  grid-column: 1 / -1;
  min-width: 0;
`;

export const STariffsTitle = styled.h3`
  ${({ theme }) => theme.typography.card};
  margin: 0 0 28px;

  color: #284131;
`;

export const STariffsTable = styled.table`
  ${({ theme }) => theme.typography.body};
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 24px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.outline.base};
    vertical-align: top;
  }

  thead th {
    ${({ theme }) => theme.typography.captionStrong};
    background: #e4eee8;
    color: #254433;
  }

  tbody th {
    ${({ theme }) => theme.typography.bodyStrong};
    width: 25%;
  }

  td:nth-child(2) {
    width: 35%;
    color: ${({ theme }) => theme.color.text.secondary};
  }

  @media (max-width: 800px) {
    display: block;

    thead {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }

    tbody {
      display: block;
    }

    tbody tr {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 16px;
      padding: 24px 0;
      border-bottom: 1px solid ${({ theme }) => theme.color.outline.base};
    }

    tbody tr:first-child {
      border-top: 1px solid ${({ theme }) => theme.color.outline.base};
    }

    tbody th,
    tbody td,
    tbody td:nth-child(2) {
      display: block;
      width: auto;
      padding: 0;
      border: 0;
    }

    tbody td:nth-child(n + 3) {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
      gap: 6px 16px;
    }
  }
`;

export const STariffCapacity = styled.span`
  display: block;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.color.text.primary};
`;

export const SDayLabel = styled.span`
  ${({ theme }) => theme.typography.caption};
  display: none;

  @media (max-width: 800px) {
    display: block;
    flex: 1 1 160px;
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const STariffPrice = styled.span`
  ${({ theme }) => theme.typography.bodyStrong};
  color: #254433;
  white-space: nowrap;
`;

export const STariffActions = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const STariffsActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  margin-top: 24px;
`;
