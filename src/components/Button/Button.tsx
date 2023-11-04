import React, { MouseEventHandler, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { DefaultParticleProps } from '../types';
interface ButtonProps extends DefaultParticleProps {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled(motion.button)<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
      ? '9px 30px 11px'
      : '14px 30px 16px'};
  color: ${({ theme, color }) =>
    color ? theme.getContrastText(theme.colors[color]) : '#ffffff'};
  background: ${({ theme, color }) =>
    color
      ? theme.colors[color]
      : `linear-gradient(250deg, ${theme.colors.primary}, ${theme.colors.secondary})`};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === 'small'
        ? '5px 23px 6px'
        : props.size === 'medium'
        ? '7px 28px 9px'
        : '12px 28px 14px'};
  }
`;

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  size,
  disabled,
  children,
  onClick,
  color,
  ...props
}) => {
  return (
    <StyledButton
      type='button'
      onClick={onClick}
      disabled={disabled}
      size={size}
      color={color}
      whileHover={
        !disabled
          ? {
              scale: 1.1,
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }
          : {}
      }
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
