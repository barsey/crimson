export type ParticleSize = 'small' | 'medium' | 'large';
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
