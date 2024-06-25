import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { HTMLAttributes, PropsWithChildren } from 'react';

import { ParticleSize } from '../types';
import { ParticleFontSizes } from '../constants';

const ContainerStyles = css`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
`;
const Span = styled.span`
  ${ContainerStyles}
`;
const Div = styled.div`
  ${ContainerStyles}
`;

const H1 = styled.h1`
  ${ContainerStyles}
`;

const H2 = styled.h2`
  ${ContainerStyles}
`;

const H3 = styled.h3<{ size?: ParticleSize }>`
  ${ContainerStyles}
  font-size: ${({ size = 'medium' }) => `${ParticleFontSizes[size] * 1.25}px`};
`;

const H4 = styled.h3<{ size?: ParticleSize }>`
  ${ContainerStyles}
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: normal;
`;

const Label = styled.label<{ size?: ParticleSize; fontWeight?: number }>`
  ${ContainerStyles}
  color: ${({ theme }) => theme.colors.neutral[1000]};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? fontWeight : theme.font.weight.medium};
  font-size: ${({ size = 'medium' }) => `${ParticleFontSizes[size] * 0.875}px`};

  line-height: 150%;
  &[aria-disabled='true'] {
    color: ${({ theme }) => theme.colors.grey[500]};
  }
  &[aria-readonly='true'] {
    cursor: default;
    color: ${({ theme }) => theme.colors.grey[900]};
  }
`;
const components = {
  span: Span,
  div: Div,
  label: Label,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
};
export type TypographyProps = {
  as?: 'label' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4';
  size?: ParticleSize;
  htmlFor?: string;
  id?: string;
  fontWeight?: number;
  'aria-disabled'?: boolean;
  'aria-readonly'?: boolean;
};

export function Typography({
  children,
  as = 'span',
  ...otherProps
}: PropsWithChildren<TypographyProps & HTMLAttributes<HTMLElement>>) {
  const TypographyComponent = components[as];

  return <TypographyComponent {...otherProps}>{children}</TypographyComponent>;
}
