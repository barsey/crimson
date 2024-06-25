import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  DefaultParticleProps,
  ParticleColor,
  ParticleSize,
  ThemeSize,
} from '../types';
import { ELEVATION_STYLE } from '../constants';

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const CheckboxSizes = {
  [ThemeSize.small]: 1,
  [ThemeSize.medium]: 1.25,
  [ThemeSize.large]: 1.5,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  text-transform: none;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
  border: none;
`;

type CheckboxInputProps = {
  color?: ParticleColor;
  inputsize?: ParticleSize;
  error?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

const StyledCheckboxInput = styled.input<CheckboxInputProps>`
  border-width: 1px;
  border-radius: 3px;
  width: ${({ inputsize = 'medium' }) => `${CheckboxSizes[inputsize]}rem`};
  height: ${({ inputsize = 'medium' }) => `${CheckboxSizes[inputsize]}rem`};
  position: relative;
  appearance: none;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  box-shadow: ${({ theme }) => theme.shadow.main};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  &.checked {
    background-color: ${({ theme, color = 'primary' }) =>
      theme.colors[color].main};
    border-color: ${({ theme, color = 'primary' }) => theme.colors[color].main};
  }

  &.unchecked {
    border-style: solid;
    border-color: ${({ theme, error }) =>
      error ? theme.colors.error.main : theme.colors.grey[400]};
    &:hover {
      border-style: solid;
      border-color: ${({ theme, disabled, readOnly }) =>
        !readOnly && !disabled
          ? theme.colors.grey[800]
          : theme.colors.grey[400]};
    }
  }

  &[aria-readonly='true'],
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.grey[200]};
  }
`;

const CheckboxInput = motion(StyledCheckboxInput);

const SvgContainer = styled.div<{ checked?: boolean }>`
  position: absolute;
  pointer-events: none;
  color: rgb(255 255 255);
  transform: translate(-50%, -50%) rotate(0) skewX(0) skewY(0) scaleX(1)
    scaleY(1);
  top: 50%;
  left: 50%;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    display: block;
    vertical-align: middle;
  }

  &[aria-readonly='true'],
  &[aria-disabled='true'] {
    svg {
      color: ${({ theme, checked }) =>
        checked ? theme.colors.grey[900] : theme.colors.grey[200]};
    }
  }
`;

type CheckboxIndicatorProps = DefaultParticleProps & {
  name: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  readOnly?: boolean;
  error?: boolean;
};
export function CheckboxIndicator({
  name,
  id = 'checkbox-indicator',
  checked = false,
  onChange,
  color,
  size,
  disabled = false,
  readOnly = false,
  error = false,
}: CheckboxIndicatorProps) {
  return (
    <Container
      id={`${id}-container`}
      data-testid={`${id}-container`}
      aria-disabled={disabled}
      aria-readonly={readOnly ? 'true' : undefined}
    >
      <CheckboxInput
        type='checkbox'
        onChange={() => !readOnly && onChange && onChange(!checked)}
        id={id}
        data-testid={id}
        name={name}
        className={checked ? 'checked' : 'unchecked'}
        color={color}
        inputsize={size}
        whileHover={!disabled && !readOnly ? ELEVATION_STYLE : {}}
        disabled={disabled}
        aria-disabled={disabled}
        checked={checked}
        readOnly={readOnly}
        aria-readonly={readOnly ? 'true' : undefined}
        data-readonly={readOnly}
        error={error}
      />
      <SvgContainer
        checked={checked}
        aria-readonly={readOnly ? 'true' : undefined}
        aria-disabled={disabled}
      >
        <motion.svg
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='3.5'
          stroke='currentColor'
        >
          <motion.path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12.75l6 6 9-13.5'
            variants={tickVariants}
          />
        </motion.svg>
      </SvgContainer>
    </Container>
  );
}
