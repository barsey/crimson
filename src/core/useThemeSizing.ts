import { css } from '@emotion/react';
import {
  ParticleFontSizes,
  ParticleHeights,
  ParticleSize,
  ParticleTextPadding,
} from '../components/types';

export function useThemeSizing({
  size = 'medium',
  height,
}: {
  size?: ParticleSize;
  height?: number;
}) {
  const defaultheight =
    height ?? size ? ParticleHeights[size] : ParticleHeights.medium;
  return css`
    font-size: ${ParticleFontSizes[size]}rem;
    height: ${defaultheight}rem;
    padding: ${ParticleTextPadding[size]}rem ${ParticleTextPadding[size] * 2}rem;
  `;
}
