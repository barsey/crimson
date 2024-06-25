import { PropsWithChildren, forwardRef } from 'react';
import styled from '@emotion/styled';
import { ParticleColor } from '../types';

export type PaperVariant = 'elevation' | 'outlined';
export type PaperProps = {
  elevation?: number;
  square?: boolean;
  variant?: PaperVariant;
  style?: React.CSSProperties;
  className?: string;
  color?: ParticleColor;
  onClick?: () => void;
  id?: string;
};

type StyledBoxProps = {
  elevation?: number;
  variant?: string;
  square?: boolean;
  color?: ParticleColor;
};

const StyledBox = styled.div<StyledBoxProps>`
  border-radius: ${({ theme, square }) =>
    square ? '0' : theme.border.radius.main};
  padding: 0.75rem;
  box-shadow: ${({ elevation, variant, theme }) =>
    variant === 'elevation' && elevation !== undefined
      ? `0px ${elevation * 1}px ${elevation * 2}px ${theme.colors.grey[400]}`
      : 'none'};
  ${({ variant, theme, color }) =>
    variant === 'outlined' &&
    `
        border: ${theme.border.width.main} solid ${color ? theme.colors[color][300] : theme.colors.grey[400]};
        background-color: ${color ? theme.colors[color][50] : theme.colors.neutral[0]};
    `}
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;

export const Paper = forwardRef<HTMLDivElement, PropsWithChildren<PaperProps>>(
  function Paper(props, ref) {
    const {
      children,
      style = {},
      elevation = 1,
      variant = 'elevation',
      square = false,
      color,
      ...rest
    } = props;
    return (
      <StyledBox
        ref={ref}
        elevation={elevation}
        variant={variant}
        square={square}
        color={color}
        style={style}
        {...rest}
      >
        {children}
      </StyledBox>
    );
  },
);

Paper.displayName = 'Paper';
