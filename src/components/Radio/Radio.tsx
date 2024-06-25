import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { DefaultParticleProps, OptionType, ParticleSize } from '../types';
import { RadioSizes } from './types';

import { useRadioVariants } from './useRadioVariants';
import { Box } from '../Box';

export const RadioOption = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutral[1000]};
  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.grey[500]};
  }
  &[aria-readonly='true'] {
    cursor: default;
    color: ${({ theme }) => theme.colors.grey[900]};
  }
`;

const StyledRadioOptionCircle = styled.div<{
  size?: ParticleSize;
  selected?: boolean;
}>`
  width: ${({ size = 'medium' }) => `${RadioSizes[size]}px`};
  height: ${({ size = 'medium' }) => `${RadioSizes[size]}px`};
  min-width: ${({ size = 'medium' }) => `${RadioSizes[size]}px`};
  min-height: ${({ size = 'medium' }) => `${RadioSizes[size]}px`};
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadow.main};
  &[aria-disabled='true'] {
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.grey.main : theme.colors.grey[200]};
  }

  &[aria-readonly='true'] {
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.grey[900] : theme.colors.grey[200]};
  }
`;

export const RadioOptionCircle = motion(StyledRadioOptionCircle);

const determineVariant = (
  isSelected: boolean,
  disabled: boolean,
  readOnly: boolean,
  hasErrors: boolean,
): string => {
  if (isSelected) {
    if (disabled) {
      return readOnly ? 'readOnlySelected' : 'disabledSelected';
    }
    return readOnly ? 'readOnlySelected' : 'selected';
  } else {
    if (disabled) {
      return readOnly ? 'readOnly' : 'disabled';
    }
    return readOnly ? 'readOnly' : hasErrors ? 'error' : 'initial';
  }
};

export type RadioProps = DefaultParticleProps & {
  option: OptionType;
  selectedValue?: string;
  onClick?: (selectedOption: OptionType) => void;
  stopPropagation?: boolean;
  error?: boolean;
  readOnly?: boolean;
};

export function Radio({
  option,
  selectedValue,
  onClick,
  size,
  color,
  stopPropagation,
  disabled = false,
  error = false,
  readOnly = false,
}: RadioProps) {
  const isSelected = option.value === selectedValue;
  const { variants } = useRadioVariants(color, size);
  const onClickHandler = (event: React.MouseEvent) => {
    stopPropagation && event.stopPropagation();
    onClick && onClick(option);
  };

  const hasErrors = !isSelected && !disabled && !readOnly && error;
  const variant = determineVariant(isSelected, disabled, readOnly, hasErrors);

  return (
    <RadioOption
      id={option.value}
      role='radio'
      aria-checked={isSelected}
      onClick={(event) => !disabled && !readOnly && onClickHandler(event)}
      aria-disabled={disabled}
      aria-readonly={readOnly ? 'true' : undefined}
    >
      <RadioOptionCircle
        variants={variants}
        initial='initial'
        animate={variant}
        whileHover={variant}
        size={size}
        id={`${option.value}-circle`}
        data-testid={`${option.value}-circle`}
        aria-disabled={disabled}
        aria-readonly={readOnly ? 'true' : undefined}
        selected={isSelected}
      />
      <Box as='span' fontSize={14} fontWeight={400}>
        {option.label}
      </Box>
    </RadioOption>
  );
}
