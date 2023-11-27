import { ButtonVariants, ParticleColor } from '../components/types';

export interface ParticleColorTheme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    error: string;
  };
}
export interface ParticleTheme extends ParticleColorTheme {
  getContrastText: (background: string) => string;
  getButtonBackground: (
    theme: ParticleTheme,
    color?: ParticleColor,
    variant?: ButtonVariants,
  ) => string;
  getButtonColor: (
    theme: ParticleTheme,
    color?: ParticleColor,
    variant?: ButtonVariants,
  ) => string;
  getButtonBorder: (
    theme: ParticleTheme,
    color?: ParticleColor,
    variant?: ButtonVariants,
  ) => string;
}
