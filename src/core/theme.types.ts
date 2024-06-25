import { ParticleSize } from '../components/types';
import { ColorType, NeutralColorType } from '../colors/types';

export interface DefaultTokenTypeVariant {
  main: string;
}

export interface BorderRadiusType {
  50: string;
  100: string;
  200: string;
}
export interface BorderWidthType {
  100: string;
  200: string;
  300: string;
}

export interface ShadowType {
  0: string;
  50: string;
  100: string;
  200: string;
}

export interface SpacingType {
  0: number;
  25: number;
  50: number;
  100: number;
  200: number;
  300: number;
  400: number;
  500: number;
  600: number;
  700: number;
  800: number;
  900: number;
}

export interface ParticleColorType extends ColorType, DefaultTokenTypeVariant {}

export interface ParticleColorTheme {
  colors: {
    primary: ParticleColorType;
    secondary: ParticleColorType;
    success: ParticleColorType;
    info: ParticleColorType;
    warning: ParticleColorType;
    error: ColorType & DefaultTokenTypeVariant;
    neutral: NeutralColorType;
    grey: ParticleColorType;
  };
}

export type ParticleColorThemeCustom = {
  colors: {
    primary?: ParticleColorType;
    secondary?: ParticleColorType;
    success?: ParticleColorType;
    info?: ParticleColorType;
    warning?: ParticleColorType;
    error?: ColorType & DefaultTokenTypeVariant;
    neutral?: NeutralColorType;
    grey?: ParticleColorType;
  };
};

export interface ParticleFont {
  family: {
    base: string;
  };
  weight: {
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  size: {
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
  };
}

export interface ParticleBorder {
  radius: BorderRadiusType & DefaultTokenTypeVariant;
  width: BorderWidthType & DefaultTokenTypeVariant;
}

export interface ParticleLineHeight {
  100: number;
  200: number;
  300: number;
}

export interface ParticleSpacings extends SpacingType {
  main: number;
}
export interface ParticleTheme extends ParticleColorTheme {
  spacing: number;
  spacings: ParticleSpacings;
  shadow: ShadowType & DefaultTokenTypeVariant;
  border: ParticleBorder;
  font: ParticleFont;
  lineHeight: ParticleLineHeight;
  getContrastText: (background: string) => string;
  verticalTextSpacing: (size: ParticleSize) => number;
}
