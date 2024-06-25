import { PropsWithChildren, forwardRef } from 'react';
import { ParticleColor } from '../types';
import styled from '@emotion/styled';

export type BadgeProps = PropsWithChildren<{
  color?: ParticleColor;
  id?: string;
}>;

const Container = styled.span<BadgeProps>`
  background-color: ${({ theme, color = 'primary' }) =>
    theme.colors[color].main};
  color: ${({ theme }) => theme.colors.neutral[0]};
  display: flex;
  height: 18px;
  min-width: 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size[100]};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 1px;
`;

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { children, color = 'primary', id = 'badge' } = props;
  return (
    <Container ref={ref} color={color} id={id} data-testid={id}>
      {children}
    </Container>
  );
});

Badge.displayName = 'Badge';

export { Badge };
