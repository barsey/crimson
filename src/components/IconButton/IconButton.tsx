import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react';
import { DefaultParticleProps, ParticleColor, ParticleSize } from '../types';
import { ParticleHeights } from '../constants';

export const Container = styled.div<{
  rounded?: boolean;
  color?: ParticleColor;
  size?: ParticleSize;
}>`
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size[100]};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: normal;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral[1000]};
  border-radius: ${({ rounded }) => (rounded ? '50%' : '4px')};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border: ${({ theme, color }) =>
    `1px solid ${color ? theme.colors[color][400] : theme.colors.grey[400]}`};
  display: flex;
  height: ${({ size = 'medium' }) =>
    ParticleHeights[size] - 2}px; // 2px is the border width
  width: ${({ size = 'medium' }) =>
    ParticleHeights[size] - 2}px; // 2px is the border width
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.main};
  svg {
    fill: ${({ theme, color }) =>
      color ? theme.colors[color].main : theme.colors.neutral[1000]};
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.grey[50]};
    border-color: ${({ theme, color }) =>
      color ? theme.colors[color][700] : theme.colors.grey[700]};
    svg {
      fill: ${({ theme, color }) =>
        color ? theme.colors[color][700] : theme.colors.neutral[1000]};
    }
  }
  &[aria-disabled='true'] {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    border-color: ${({ theme }) => theme.colors.grey[400]};
    cursor: default;
  }
`;
export type IconButtonProps = DefaultParticleProps & {
  rounded?: boolean;
} & ComponentPropsWithoutRef<'div'>;

export const IconButton = forwardRef<
  HTMLDivElement,
  PropsWithChildren<IconButtonProps>
>(({ children, disabled, size = 'medium', ...props }, ref) => {
  return (
    <Container
      ref={ref}
      role='button'
      aria-label='icon-button'
      tabIndex={0}
      aria-disabled={disabled}
      size={size}
      {...props}
    >
      {children}
    </Container>
  );
});

IconButton.displayName = 'IconButton';
