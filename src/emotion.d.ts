import '@emotion/react';
import { ParticleTheme } from './core/theme.types';

declare module '@emotion/react' {
  export interface Theme extends ParticleTheme {}
}
