import styled from '@emotion/styled';
import { PropsWithChildren, forwardRef } from 'react';
import { DefaultParticleProps, ParticleFeedbackColor } from '../types';
import { ParticleHeights } from '../constants';
import { Loader } from '../Loader';

const noOp = () => {
  return '';
};

export type ChipProps = Omit<DefaultParticleProps, 'color'> & {
  variant?: ParticleFeedbackColor | 'interactive' | 'default';
  selected?: boolean;
  onClick?: () => void;
  loading?: boolean;
  readOnly?: boolean;
};
const ChipContainer = styled.button<Omit<ChipProps, 'onClick'>>`
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size[100]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-style: normal;
  line-height: normal;
  color: ${({ theme }) => theme.colors.grey[900]};
  height: ${({ size = 'medium' }) => ParticleHeights[size]}px;
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  outline: none;
  gap: 8px;

  border-radius: 100px;
  border: ${({ theme }) => `1px solid ${theme.colors.grey[400]}`};
  border-color: ${({ theme, variant = 'default', selected = false }) =>
    variant === 'interactive'
      ? selected
        ? theme.colors.primary[300]
        : theme.colors.grey[400]
      : 'transparent'};
  background-color: ${({ theme, variant = 'default', selected = false }) =>
    variant === 'interactive'
      ? selected
        ? theme.colors.primary[50]
        : theme.colors.grey[50]
      : variant === 'default'
        ? theme.colors.grey[300]
        : theme.colors[variant][200]};

  &[data-variant='interactive'] {
    padding: 8px 12px;
    &:hover {
      &:not(:disabled) {
        cursor: ${({ readOnly }) => (readOnly ? 'default' : 'pointer')};
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
    &:focus {
      &:not(:disabled) {
        outline-offset: ${({ readOnly }) => (readOnly ? '0' : '2px')};
        outline: ${({ theme, readOnly }) =>
          readOnly ? 'none' : `1px solid ${theme.colors.primary[300]}`};
      }
    }
  }

  &:disabled {
    background-color: ${({ theme, variant = 'default' }) =>
      variant === 'default' || variant === 'interactive'
        ? theme.colors.grey[200]
        : theme.colors[variant][200]};
    border: none;
    color: ${({ theme }) => theme.colors.grey[600]};
  }
  &[aria-readonly='true'] {
    background-color: ${({ theme }) => theme.colors.grey[200]};
    color: ${({ theme }) => theme.colors.grey[900]};
    cursor: not-allowed;
    border-color: transparent;
  }
`;
const Chip = forwardRef<HTMLButtonElement, PropsWithChildren<ChipProps>>(
  (
    {
      variant = 'default',
      children,
      disabled = false,
      size = 'medium',
      selected = false,
      id = 'chip',
      loading,
      readOnly = false,
      onClick,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <ChipContainer
        ref={ref}
        variant={variant}
        size={size}
        disabled={disabled}
        selected={selected}
        data-variant={variant}
        id={id}
        data-testid={id}
        aria-readonly={readOnly ? 'true' : undefined}
        readOnly={readOnly}
        onClick={!readOnly ? onClick : noOp}
        {...otherProps}
      >
        {loading && <Loader size='extraSmall' disabled={loading} />}
        {children}
      </ChipContainer>
    );
  },
);
Chip.displayName = 'Chip';
export { Chip };
