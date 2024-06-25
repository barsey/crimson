export enum ThemeSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
export type ParticleSize = keyof typeof ThemeSize;
export type ParticleFeedbackColor = 'success' | 'error' | 'warning' | 'info';
export type ParticleColor = ParticleFeedbackColor | 'primary' | 'secondary';

export type DefaultParticleProps = {
  color?: ParticleColor;
  size?: ParticleSize;
  disabled?: boolean;
  id?: string;
};

export type OptionType = {
  label: string;
  value: string;
};
