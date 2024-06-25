import { render } from '@/utils/test-utils';
import {
  useFontSizing,
  useThemeScales,
  useThemeSizing,
} from './useThemeSizing';
import { ParticleFontSizes, ParticleHeights } from '../components/constants';

describe('useFontSizing', () => {
  test('should return the correct CSS for medium size', () => {
    const { container } = render(
      <div css={useFontSizing({ size: 'medium' })} />,
    );
    expect(container.firstChild).toHaveStyle(`
    font-size: ${ParticleFontSizes.medium}px;
    `);
  });

  // add more test cases for different scenarios
});

describe('useThemeScales', () => {
  test('should return the correct scales for medium size', () => {
    const scales = useThemeScales({ size: 'medium' });
    expect(scales).toEqual({
      fontSize: 16,
      height: 32,
      padding: 8,
    });
  });

  // add more test cases for different scenarios
});

describe('useThemeSizing', () => {
  test('should return the correct CSS for medium size', () => {
    const { container } = render(
      <div css={useThemeSizing({ size: 'medium' })} />,
    );
    expect(container.firstChild).toHaveStyle(`
    font-size: ${ParticleFontSizes.medium}px;
    height: ${ParticleHeights.medium}px;
    `);
  });

  // add more test cases for different scenarios
});
