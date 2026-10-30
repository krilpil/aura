import { fonts } from './fonts';

const textStyle = (family: string, size: string, lineHeight: number, weight = 400) => `
  font-family: ${family};
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
  letter-spacing: normal;
`;

export const interfaceTypography = {
  fontFamily: fonts.Manrope,
  fontSize: 16,
  fontSizeSM: 14,
  fontSizeLG: 18,
  lineHeight: 1.5,
  fontWeightStrong: 600,
};

export const typography = {
  hero: textStyle(fonts.Lora, 'clamp(40px, 6.4vw, 96px)', 1.05),
  section: textStyle(fonts.Lora, 'clamp(32px, 3.8vw, 56px)', 1.12),
  card: textStyle(fonts.Lora, 'clamp(24px, 2.1vw, 30px)', 1.2),
  body: textStyle(fonts.Manrope, 'clamp(16px, 1.25vw, 18px)', 1.6),
  bodyStrong: textStyle(fonts.Manrope, 'clamp(16px, 1.25vw, 18px)', 1.6, 600),
  caption: textStyle(fonts.Manrope, '14px', 1.5),
  meta: textStyle(fonts.Manrope, '14px', 1.5, 500),
  captionStrong: textStyle(fonts.Manrope, '14px', 1.5, 600),
  small: textStyle(fonts.Manrope, '12px', 1.5),
  control: textStyle(
    fonts.Manrope,
    `${interfaceTypography.fontSize}px`,
    interfaceTypography.lineHeight
  ),
  button: textStyle(
    fonts.Manrope,
    `${interfaceTypography.fontSize}px`,
    interfaceTypography.lineHeight,
    600
  ),
  navigation: textStyle(fonts.Manrope, '14px', 1.5, 500),
  navigationMobile: textStyle(fonts.Manrope, '18px', 1.5, 500),
  phone: textStyle(fonts.Manrope, 'clamp(24px, 2.1vw, 30px)', 1.2, 600),
  phoneCompact: textStyle(fonts.Manrope, '16px', 1.5, 600),
};

export type TypographyTheme = typeof typography;
