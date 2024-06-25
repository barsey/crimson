import { useTheme } from '@emotion/react';
import {
  ParticleBorder,
  ParticleColorTheme,
  ParticleFont,
  ParticleSpacings,
} from './theme.types';

interface ParticleThemeExportableType extends ParticleColorTheme {
  spacings: ParticleSpacings;
  border: ParticleBorder;
  font: ParticleFont;
}

export function useParticleTheme(): ParticleThemeExportableType {
  const { colors, font, spacings, border } = useTheme();

  return { colors, font, spacings, border };
}
