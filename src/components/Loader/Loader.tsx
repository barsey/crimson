import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { keyframes } from '@emotion/react';
import { ParticleHeights } from '../constants';

import {
  LoaderComponent,
  LoaderComponentProps,
  LoadersRecord,
  LoaderSize,
} from './types';
import { DefaultParticleProps, ParticleColor } from '../types';
const loaderSizeExtraSmall = ParticleHeights['small'] - 6;
const loaderSizeSmall = ParticleHeights['small'] - 4;
const loaderSizeMedium = ParticleHeights['medium'] - 4;
const loaderSizeLarge = ParticleHeights['large'] - 4;

const LoaderSizeMap = {
  small: `${loaderSizeSmall}px`,
  medium: `${loaderSizeMedium}px`,
  large: `${loaderSizeLarge}px`,
  extraSmall: `${loaderSizeExtraSmall}px`,
};

// Dots loader animation
const loaderDotsAnimation = keyframes`
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(0.6);
    opacity: 0.5;
  }
`;

// Oval loader animation
const ovalLoaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Dot = styled.span<{
  size?: LoaderSize;
  color?: ParticleColor;
  disabled?: boolean;
}>`
  width: ${({ size = 'medium' }) =>
    `calc(${LoaderSizeMap[size]} / 3 - ${LoaderSizeMap[size]} / 15)`};
  height: ${({ size = 'medium' }) =>
    `calc(${LoaderSizeMap[size]} / 3 - ${LoaderSizeMap[size]} / 15)`};
  border-radius: 50%;
  background: ${({ theme, color = 'primary', disabled }) =>
    disabled ? theme.colors.grey[600] : theme.colors[color].main};
  animation: ${loaderDotsAnimation} 0.8s infinite linear;

  &:nth-of-type(2) {
    animation-delay: 0.4s;
  }
`;

const DotsContainer = styled.span<{ size?: LoaderSize }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ size = 'medium' }) => `calc(${LoaderSizeMap[size]} / 10)`};
  position: relative;
  width: ${({ size = 'medium' }) => LoaderSizeMap[size]};
  height: ${({ size = 'medium' }) => LoaderSizeMap[size]};
`;

const SpinnerContainer = styled.span<{
  size?: LoaderSize;
  color?: ParticleColor;
  disabled?: boolean;
}>`
  display: inline-block;
  width: ${({ size = 'medium' }) => LoaderSizeMap[size]};
  height: ${({ size = 'medium' }) => LoaderSizeMap[size]};

  &::after {
    content: '';
    display: block;
    width: ${({ size = 'medium' }) => `calc(${LoaderSizeMap[size]} - 4px)`};
    height: ${({ size = 'medium' }) => `calc(${LoaderSizeMap[size]} - 4px)`};
    border-radius: 10000px;
    border-width: ${({ size = 'medium' }) =>
      `calc(${LoaderSizeMap[size]} / 8)`};
    border-style: solid;
    border-color: ${({ theme, color = 'primary', disabled }) =>
      disabled
        ? `${theme.colors.grey[600]} ${theme.colors.grey[600]} ${theme.colors.grey[600]} transparent`
        : `${theme.colors[color].main} ${theme.colors[color].main} ${theme.colors[color].main} transparent`};
    animation: ${ovalLoaderAnimation} 1.2s linear infinite;
  }
`;

const Spinner: LoaderComponent = forwardRef<
  HTMLSpanElement,
  LoaderComponentProps
>(function Spinner(props, ref) {
  return <SpinnerContainer ref={ref} {...props} />;
});

const Dots: LoaderComponent = forwardRef<HTMLSpanElement, LoaderComponentProps>(
  function Dots({ id, 'data-testid': testId, ...props }, ref) {
    return (
      <DotsContainer ref={ref} id={id} data-testid={testId} {...props}>
        <Dot {...props} />
        <Dot {...props} />
        <Dot {...props} />
      </DotsContainer>
    );
  },
);

const defaultLoaders: LoadersRecord = {
  spinner: Spinner,
  dots: Dots,
};

export type LoaderProps = Omit<DefaultParticleProps, 'size'> & {
  type?: 'spinner' | 'dots';
  size?: LoaderSize;
};

export const Loader = forwardRef<HTMLSpanElement, LoaderProps>(
  (
    {
      type = 'spinner',
      size = 'medium',
      id = 'loader',
      ...otherProps
    }: LoaderProps,
    ref,
  ) => {
    const Component = defaultLoaders[type];
    if (!Component) return null;
    return (
      <Component
        ref={ref}
        size={size}
        id={`${type}-${id}`}
        data-testid={`${type}-${id}`}
        {...otherProps}
      />
    );
  },
);

Loader.displayName = 'Loader';
