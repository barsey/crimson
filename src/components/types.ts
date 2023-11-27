enum ThemeSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
export type ParticleSize = keyof typeof ThemeSize;
export type ParticleColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error';

export type DefaultParticleProps = {
  color?: ParticleColor;
  size?: ParticleSize;
};

export type ButtonVariants = 'default' | 'contained' | 'outlined' | 'gradient';

export const ParticleFontSizes = {
  [ThemeSize.small]: 0.875,
  [ThemeSize.medium]: 1,
  [ThemeSize.large]: 1.125,
};

export const ParticleHeights: { [key: string]: number } = {
  [ThemeSize.small]: 2,
  [ThemeSize.medium]: 2.25,
  [ThemeSize.large]: 2.5,
};

export const ParticleTextPadding: { [key: string]: number } = {
  [ThemeSize.small]: 0.375,
  [ThemeSize.medium]: 0.5,
  [ThemeSize.large]: 0.625,
};
