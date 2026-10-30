import { DefaultTheme } from 'styled-components';

import { IBorderRadiusTheme, IBreakpointsTheme, IColorsTheme } from '../model/theme';
import { breakpoints } from './breakpoints';
import { typography } from './typography';

const borderRadiusTheme: IBorderRadiusTheme = {
  full: '9999px',
  large: '28px',
  medium: '24px',
  smallMedium: '16px',
  small: '12px',
  extraSmall: '8px',
  extraLarge: '32px',
};

const breakpointsTheme: IBreakpointsTheme = {
  minMobile: `${breakpoints.minMobile}px`,
  maxMobile: `${breakpoints.maxMobile}px`,

  minTablets: `${breakpoints.minTablets}px`,
  maxTablets: `${breakpoints.maxTablets}px`,

  minLaptops: `${breakpoints.minLaptops}px`,
  maxLaptops: `${breakpoints.maxLaptops}px`,

  minDesktops: `${breakpoints.minDesktops}px`,
  maxDesktops: `${breakpoints.maxDesktops}px`,
};

const colorTheme: IColorsTheme = {
  brand: {
    primary: '#1F5A3D',
    primaryHover: '#174A32',
    primaryPressed: '#103924',
    primaryContainer: '#E4EEE8',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#163C2A',
    secondary: '#496B59',
    secondaryHover: '#3C5B4B',
    secondaryPressed: '#30493D',
    secondaryContainer: '#EDF2EE',
    onSecondary: '#FFFFFF',
    onSecondaryContainer: '#294336',
    accent: '#A28B60',
    accentHover: '#8D784F',
    accentPressed: '#776440',
    accentContainer: '#F3EBDD',
    onAccent: '#FFFFFF',
    onAccentContainer: '#4F422B',
  },
  surface: {
    default: '#F7F6F1',
    bright: '#FFFFFF',
    containerLowest: '#FFFFFF',
    containerLow: '#F3F3ED',
    container: '#ECEDE6',
    containerHigh: '#E3E6DE',
    containerHighest: '#D8DDD4',
    elevated: '#FCFCF8',
    inverse: '#183326',
    onSurface: '#1C211D',
    onSurfaceVariant: '#4F5952',
    onSurfaceMuted: '#7A827D',
    onInverse: '#FFFFFF',
  },
  text: {
    primary: '#1B211D',
    secondary: '#4C554F',
    tertiary: '#7C847F',
    inverse: '#FFFFFF',
    link: '#1F5A3D',
    linkHover: '#174A32',
  },
  outline: {
    base: '#D5DAD3',
    variant: '#E4E7E1',
    strong: '#AEB8B1',
    focus: '#1F5A3D',
  },
  success: {
    base: '#2E6A49',
    hover: '#24593D',
    container: '#DCECE2',
    containerLowest: '#F2F8F4',
    onBase: '#FFFFFF',
    onContainer: '#19412C',
  },
  warning: {
    base: '#A87934',
    hover: '#8F6529',
    container: '#F1E4CE',
    containerLowest: '#FBF6ED',
    onBase: '#FFFFFF',
    onContainer: '#5B421F',
  },
  error: {
    base: '#B54A45',
    hover: '#983C38',
    container: '#F3DDDA',
    containerLowest: '#FCF3F2',
    onBase: '#FFFFFF',
    onContainer: '#682B28',
  },
  info: {
    base: '#426B72',
    hover: '#365A60',
    container: '#DDEBED',
    containerLowest: '#F2F8F8',
    onBase: '#FFFFFF',
    onContainer: '#29484D',
  },
  disabled: {
    container: '#E5E7E2',
    containerVariant: '#DADDD7',
    onContainer: '#9A9F9B',
    outline: '#D3D6D1',
  },
  overlay: {
    hero: 'linear-gradient(180deg, rgba(10, 25, 17, 0.08) 20%, rgba(8, 24, 16, 0.76) 100%)',
    card: 'linear-gradient(180deg, rgba(8, 20, 14, 0.02) 25%, rgba(8, 22, 15, 0.72) 100%)',
    cardStrong: 'linear-gradient(180deg, rgba(5, 17, 11, 0.12) 10%, rgba(5, 17, 11, 0.86) 100%)',
    promo:
      'linear-gradient(90deg, rgba(15, 56, 37, 0.94) 0%, rgba(15, 56, 37, 0.72) 42%, rgba(15, 56, 37, 0.06) 100%)',
    backdrop: 'rgba(10, 20, 14, 0.48)',
  },
  shadow: {
    card: '0 2px 12px rgba(26, 45, 34, 0.06)',
    cardHover: '0 8px 28px rgba(26, 45, 34, 0.12)',
    elevated: '0 12px 40px rgba(26, 45, 34, 0.14)',
    dropdown: '0 8px 32px rgba(18, 35, 25, 0.16)',
  },
  system: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
  },
};

export const theme: DefaultTheme = {
  color: colorTheme,
  borderRadius: borderRadiusTheme,
  typography,
  breakpoints: breakpointsTheme,
};
