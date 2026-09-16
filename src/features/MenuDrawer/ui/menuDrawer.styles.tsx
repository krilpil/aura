'use client';

import styled from 'styled-components';
import { Button, Drawer } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const iconMenu = <FontAwesomeIcon icon={faBarsStaggered} />;

export const SMenuButton = styled(Button).attrs({
  icon: iconMenu,
})`
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    color: inherit !important;

    .ant-btn-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 18px;
      width: 18px;
      min-width: 18px;
      height: 18px;
      min-height: 18px;
      line-height: 0;
    }

    &:hover,
    &:focus,
    &:active,
    &:focus-visible {
      color: inherit !important;
      background: transparent;
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
      color: inherit !important;
      fill: currentColor !important;
      transition: none;
    }

    path {
      fill: currentColor !important;
    }
  }
`;

export const SMenuDrawer = styled(Drawer).attrs({
  size: '100%',
})``;
