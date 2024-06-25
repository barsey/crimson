import styled from '@emotion/styled';
import { PropsWithChildren, forwardRef } from 'react';
import { ParticleColor, ParticleSize } from '../types';
import { ParticleHeights } from '../constants';

const Container = styled.div<{
  color?: ParticleColor;
  inputsize?: ParticleSize;
}>`
  gap: 8px;
  flex-shrink: 0;
  border-radius: 5px;
  border: ${({ theme }) => `1px solid ${theme.colors.grey[400]}`};
  background: ${({ theme }) => theme.colors.neutral[0]};
  box-shadow: ${({ theme }) => theme.shadow.main};

  outline: 0px !important;
  font-size: 0.875rem;
  min-height: ${({ inputsize = 'medium' }) =>
    `${ParticleHeights[inputsize] - 2}px`}; // 2px is the border width
  &:hover {
    border-color: ${({ theme }) => theme.colors.grey[700]};
  }
  &:focus,
  &.menu-visible {
    border-color: ${({ theme, color = 'primary' }) => theme.colors[color].main};
  }
`;

type InputContainerProps = {
  color?: ParticleColor;
  size?: ParticleSize;
  role?: string;
  className?: string;
  id?: string;
};

const InputContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<InputContainerProps>
>(({ size, color, children, ...props }, ref) => {
  return (
    <Container ref={ref} color={color} inputsize={size} {...props}>
      {children}
    </Container>
  );
});

InputContainer.displayName = 'InputContainer';

export default InputContainer;
