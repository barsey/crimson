import { css } from '@emotion/react';
import {
  ParticleFontSizes,
  ParticleHeights,
  ParticleSize,
  ParticleTextPadding,
} from '../components/types';

export function useButtonSizing({
  size = 'medium',
  height,
}: {
  size?: ParticleSize;
  height?: number;
}) {
  const themeSizing = useThemeSizing({ size, height });

  return css`
    ${themeSizing};
    padding: ${ParticleTextPadding[size]}rem ${ParticleTextPadding[size] * 2}rem;
  `;
}

export function useFontSizing({ size = 'medium' }: { size?: ParticleSize }) {
  return css`
    font-size: ${ParticleFontSizes[size]}rem;
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
    font-size: ${fontSize}rem;
    height: ${height}rem;
  `;
}
