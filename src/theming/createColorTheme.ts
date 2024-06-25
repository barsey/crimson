import {
  ParticleColorTheme,
  ParticleColorThemeCustom,
} from '../core/theme.types';
import { deepmerge } from './deepmerge';
import { DEFAULT_THEME } from './theme';

export const createColorTheme = (
  options?: ParticleColorThemeCustom,
): ParticleColorTheme => {
  const { colors } = DEFAULT_THEME;
  if (!options) {
    return { colors };
  }
  return deepmerge({ colors }, { ...options });
};
