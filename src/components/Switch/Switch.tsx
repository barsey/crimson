import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { DefaultParticleProps, ParticleColor } from '../types';
import { ELEVATION_STYLE } from '../constants';

const DefaultSize = 20;
const SwitchSizeMap = {
  small: DefaultSize - 4,
  medium: DefaultSize,
  large: DefaultSize + 4,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SwitchContainer = styled.div<{
  switched: boolean;
  height: number;
  color?: ParticleColor;
  error?: boolean;
}>`
  background: ${({ switched, theme, color = 'primary' }) =>
    switched ? theme.colors[color].main : theme.colors.neutral[0]};
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${({ height }) => height * 2}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ height }) => height / 2}px;
  margin: 8px;
  border: ${({ theme, switched, error }) =>
    !switched
      ? `1px solid ${error ? theme.colors.error.main : theme.colors.grey[400]}`
      : 'none'};
  &:hover {
    border-color: ${({ theme }) => theme.colors.grey[700]};
  }
  &[aria-disabled='true'] {
    background: ${({ theme, switched, color = 'primary' }) =>
      switched ? theme.colors[color][200] : theme.colors.grey[100]};
    border-color: ${({ theme }) => theme.colors.grey[400]};
  }

  &[aria-readonly='true'] {
    background: ${({ theme, switched, color = 'primary' }) =>
      switched ? theme.colors[color][300] : theme.colors.grey[200]};
    border-color: ${({ theme }) => theme.colors.grey[400]};
  }
`;

const SwitchElement = styled.div<{ switched: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${({ switched }) => (switched ? 'flex-end' : 'flex-start')};
  padding: 2px;
  cursor: pointer;
  align-items: center;
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &[aria-readonly='true'] {
    cursor: default;
  }
`;

const HandleElement = styled.div<{
  height: number;
  switched: boolean;
  color?: ParticleColor;
}>`
  width: ${({ height }) => height - 6}px;
  height: ${({ height }) => height - 6}px;
  background-color: ${({ theme, switched }) =>
    switched ? theme.colors.neutral[0] : theme.colors.grey[900]};
  border-radius: 50%;
  &[aria-disabled='true'] {
    background: ${({ theme, switched }) =>
      switched ? theme.colors.grey[100] : theme.colors.grey[400]};
    border-color: ${({ theme }) => theme.colors.grey[400]};
  }
`;

const MotionSwitchContainer = motion(SwitchContainer);
const MotionHandleElement = motion(HandleElement);

const noOp = () => {
  return '';
};

export type SwitchProps = DefaultParticleProps & {
  label?: string;
  checked?: boolean;
  onToggle?: () => void;
  readOnly?: boolean;
  error?: boolean;
};

function Switch({
  label = '',
  size = 'medium',
  color = 'primary',
  checked = false,
  onToggle,
  disabled = false,
  id = 'switch',
  readOnly = false,
  error = false,
}: SwitchProps) {
  const height = size ? SwitchSizeMap[size] : DefaultSize;
  const hasErrors = !checked && !disabled && !readOnly && error;

  return (
    <Container data-testid={`${id}-container`} id={`${id}-container`}>
      <MotionSwitchContainer
        switched={checked}
        height={height}
        color={color}
        whileHover={!disabled ? ELEVATION_STYLE : {}}
        aria-disabled={disabled}
        data-testid={`motion-${id}-container`}
        id={`motion-${id}-container`}
        aria-readonly={readOnly ? 'true' : undefined}
        error={hasErrors}
      >
        <SwitchElement
          switched={checked}
          aria-disabled={disabled}
          aria-readonly={readOnly ? 'true' : undefined}
          onClick={!disabled && !readOnly ? onToggle : noOp}
          role='button'
          data-testid={`${id}-element`}
          id={`${id}-element`}
        >
          <MotionHandleElement
            switched={checked}
            height={height}
            layout
            transition={!disabled ? spring : {}}
            aria-disabled={disabled}
            data-testid={`${id}-handle-element`}
            id={`${id}-handle-element`}
          />
        </SwitchElement>
      </MotionSwitchContainer>
      {label && (
        <span data-testid={`${id}-label`} id={`${id}-label`}>
          {label}
        </span>
      )}
    </Container>
  );
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export { Switch };
