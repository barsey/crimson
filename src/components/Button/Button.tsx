import { MouseEventHandler, PropsWithChildren, forwardRef } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ButtonVariants, DefaultParticleProps } from '../types';
import { useButtonSizing } from '../../core/useThemeSizing';
import { ELEVATION_STYLE } from '../constants';

interface ButtonProps extends DefaultParticleProps {
  disabled?: boolean;
  disableElevation?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariants;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  role?: React.AriaRole;
  className?: string;
}

const StyledButton = styled(motion.button)<ButtonProps>`
  border: ${({ theme, color, variant }) =>
    theme.getButtonBorder(theme, color, variant)};
  line-height: 1;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border-radius: 3px;
  display: inline-block;

  color: ${({ theme, color, variant }) =>
    theme.getButtonColor(theme, color, variant)};
  background: ${({ theme, color, variant }) =>
    theme.getButtonBackground(theme, color, variant)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  margin: 8px 8px;

  &:active {
    border: solid 2px #1b116e;
  }
`;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      size,
      disabled,
      children,
      onClick,
      color,
      disableElevation,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const buttonStyleClass = useButtonSizing({ size });
    return (
      <StyledButton
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        size={size}
        color={color}
        css={buttonStyleClass}
        whileHover={!disabled && !disableElevation ? ELEVATION_STYLE : {}}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        {...props}
      >
        {children}
      </StyledButton>
    );
  },
);

export { Button };
