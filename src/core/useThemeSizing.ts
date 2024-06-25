import { css } from '@emotion/react';
import { ParticleSize } from '../components/types';
import {
  ParticleFontSizes,
  ParticleHeights,
  ParticleTextPadding,
} from '../components/constants';

export function useFontSizing({ size = 'medium' }: { size?: ParticleSize }) {
  return css`
    font-size: ${ParticleFontSizes[size]}px;
  `;
}

export function useThemeScales({
  size = 'medium',
  height,
}: {
  size?: ParticleSize;
  height?: number;
}) {
  const defaultheight =
    height ?? size ? ParticleHeights[size] : ParticleHeights.medium;
  return {
    fontSize: ParticleFontSizes[size],
    height: defaultheight,
    padding: ParticleTextPadding[size],
  };
}

export function useThemeSizing({
  size = 'medium',
  height: elementHeight,
}: {
  size?: ParticleSize;
  height?: number;
}) {
  const { fontSize, height } = useThemeScales({ size, height: elementHeight });

  return css`
    font-size: ${fontSize}px;
    height: ${height}px;
  `;
}
