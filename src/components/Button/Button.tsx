import {
  MouseEventHandler,
  PropsWithChildren,
  forwardRef,
  useContext,
} from 'react';
import styled from '@emotion/styled';

import { DefaultParticleProps } from '../types';

import { ParticleHeights } from '../constants';
import { ButtonGroupContext } from '../ButtonGroup/ButtonGroupContext';
import { ButtonVariants } from './types';
import { Loader } from '../Loader';

export interface ButtonProps extends DefaultParticleProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariants;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  role?: React.AriaRole;
  className?: string;
  leadingSection?: React.ReactNode;
  trailingSection?: React.ReactNode;
  loading?: boolean;
}

const VariantOutlineMap = {
  filled: 4,
  outlined: 5,
  text: 4,
};

const StyledButton = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size[100]};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  gap: 8px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral[0]};
  background-color: ${({ theme, color = 'primary' }) =>
    theme.colors[color].main};

  padding: ${({ theme, size = 'medium' }) =>
    `${theme.verticalTextSpacing(size)}px ${
      theme.verticalTextSpacing(size) * 2
    }px`};
  height: ${({ size = 'medium' }) => ParticleHeights[size]}px;
  box-shadow: ${({ theme }) => theme.shadow.main};
  position: relative;

  svg {
    fill: ${({ theme }) => theme.colors.neutral[0]};
  }

  outline: none;
  box-sizing: border-box;

  &:focus {
    &::after {
      content: '';
      position: absolute;
      top: ${({ variant = 'filled' }) => VariantOutlineMap[variant] * -1}px;
      left: ${({ variant = 'filled' }) => VariantOutlineMap[variant] * -1}px;
      right: ${({ variant = 'filled' }) => VariantOutlineMap[variant] * -1}px;
      bottom: ${({ variant = 'filled' }) => VariantOutlineMap[variant] * -1}px;
      border: ${({ theme, color = 'primary' }) =>
        `1px solid ${theme.colors[color][300]}`};
      border-radius: 6px;
      z-index: 1;
      pointer-events: none; /* Ensure clicks pass through to the button */
    }
  }

  &:hover {
    background-color: ${({ theme, color = 'primary' }) =>
      theme.colors[color][600]};
  }

  &:active {
    background-color: ${({ theme, color = 'primary' }) =>
      theme.colors[color][700]};
  }

  &:disabled {
    background-color: ${({ theme, color = 'primary' }) =>
      theme.colors[color][300]};
    color: ${({ theme, color = 'primary' }) => theme.colors[color][200]};
  }

  &.outlined,
  &.text {
    color: ${({ theme }) => theme.colors.grey[900]};
    svg {
      fill: ${({ theme }) => theme.colors.grey[900]};
    }
    background-color: ${({ theme }) => theme.colors.neutral[0]};
    border: ${({ theme, color }) =>
      `1px solid ${color ? theme.colors[color][400] : theme.colors.grey[400]}`};
    box-shadow: none;
    &:hover {
      background-color: ${({ theme, color }) =>
        color ? theme.colors[color][50] : theme.colors.grey[50]};
      border-color: ${({ theme, color }) =>
        color ? theme.colors[color][700] : theme.colors.grey[700]};
    }

    &:active {
      background-color: ${({ theme, color }) =>
        color ? theme.colors[color][400] : theme.colors.grey[400]};
    }

    &:disabled {
      background-color: ${({ theme, color }) =>
        color ? theme.colors[color][100] : theme.colors.grey[100]};
      border-color: ${({ theme, color }) =>
        color ? theme.colors[color][400] : theme.colors.grey[400]};
      color: ${({ theme }) => theme.colors.grey[500]};
      svg {
        fill: ${({ theme }) => theme.colors.grey[600]};
      }
    }

    &[data-variant='group'] {
      &:not(:disabled) {
        &:active {
          border-color: ${({ theme, color }) =>
            color ? theme.colors[color][700] : theme.colors.grey[700]};
        }
        &:focus {
          border-color: ${({ theme, color }) =>
            color ? theme.colors[color][600] : theme.colors.grey[600]};
        }
      }
    }

    &.text {
      background-color: transparent;
      border: none;

      &:not(:disabled) {
        &:hover,
        &:focus {
          background-color: ${({ theme, color }) =>
            color ? theme.colors[color][100] : theme.colors.grey[100]};
        }

        &:active {
          background-color: ${({ theme, color }) =>
            color ? theme.colors[color][200] : theme.colors.grey[200]};
        }
      }
    }
  }
`;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      size: btnSize,
      disabled: btnDisabled = false,
      children,
      onClick,
      color: btnColor,
      type = 'button',
      variant: btnVariant = 'filled',
      className = '',
      leadingSection,
      trailingSection,
      role = 'button',
      id = 'button',
      loading = false,
      ...props
    },
    ref,
  ) => {
    const {
      variant: grpVariant,
      disabled: grpDisabled,
      size: grpSize,
      color: grpColor,
    } = useContext(ButtonGroupContext);
    const variant = grpVariant || btnVariant;
    const disabled = grpDisabled || btnDisabled || loading;
    const size = grpSize || btnSize;
    const color = grpColor || btnColor;

    const isButtonGroupChild = grpVariant ? true : false;

    return (
      <StyledButton
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        size={size}
        color={color}
        variant={variant}
        className={`${variant} ${className}`}
        id={id}
        data-testid={id}
        data-variant={isButtonGroupChild ? 'group' : 'button'}
        role={role}
        {...props}
      >
        {loading && <Loader size='extraSmall' disabled={disabled} />}
        {leadingSection}
        {children}
        {trailingSection}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export { Button };
