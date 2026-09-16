import 'styled-components';

interface IFontCategory {
  extraLarge?: string;
  large: string;
  medium: string;
  small: string;
}

export interface IFontTheme {
  headline: IFontCategory;
  title: IFontCategory;
  body: IFontCategory;
  label: IFontCategory;
  navTab: {
    default: string;
    active: string;
  };
}

export interface IBorderRadiusTheme {
  extraLarge: string;
  large: string;
  medium: string;
  smallMedium: string;
  small: string;
  extraSmall: string;
  full: string;
}

export interface IColorsTheme {
  brand: {
    primary: string;
    primaryHover: string;
    primaryPressed: string;
    primaryContainer: string;
    onPrimary: string;
    onPrimaryContainer: string;

    secondary: string;
    secondaryHover: string;
    secondaryPressed: string;
    secondaryContainer: string;
    onSecondary: string;
    onSecondaryContainer: string;

    accent: string;
    accentHover: string;
    accentPressed: string;
    accentContainer: string;
    onAccent: string;
    onAccentContainer: string;
  };

  surface: {
    default: string;
    bright: string;

    containerLowest: string;
    containerLow: string;
    container: string;
    containerHigh: string;
    containerHighest: string;

    elevated: string;
    inverse: string;

    onSurface: string;
    onSurfaceVariant: string;
    onSurfaceMuted: string;
    onInverse: string;
  };

  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    link: string;
    linkHover: string;
  };

  outline: {
    base: string;
    variant: string;
    strong: string;
    focus: string;
  };

  success: {
    base: string;
    hover: string;
    container: string;
    containerLowest: string;
    onBase: string;
    onContainer: string;
  };

  warning: {
    base: string;
    hover: string;
    container: string;
    containerLowest: string;
    onBase: string;
    onContainer: string;
  };

  error: {
    base: string;
    hover: string;
    container: string;
    containerLowest: string;
    onBase: string;
    onContainer: string;
  };

  info: {
    base: string;
    hover: string;
    container: string;
    containerLowest: string;
    onBase: string;
    onContainer: string;
  };

  disabled: {
    container: string;
    containerVariant: string;
    onContainer: string;
    outline: string;
  };

  overlay: {
    hero: string;
    card: string;
    cardStrong: string;
    promo: string;
    backdrop: string;
  };

  shadow: {
    card: string;
    cardHover: string;
    elevated: string;
    dropdown: string;
  };

  system: {
    white: string;
    black: string;
    transparent: string;
  };
}

export interface IBreakpointsTheme {
  minMobile: string;
  maxMobile: string;

  minTablets: string;
  maxTablets: string;

  minLaptops: string;
  maxLaptops: string;

  minDesktops: string;
  maxDesktops: string;
}

export interface IDeviceTheme {
  isMobile: boolean;
  isTablets: boolean;
  isLaptops: boolean;
  isDesktop: boolean;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: IColorsTheme;
    borderRadius: IBorderRadiusTheme;
    font: IFontTheme;
    breakpoints: IBreakpointsTheme;
  }
}
