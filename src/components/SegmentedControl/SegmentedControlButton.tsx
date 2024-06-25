import styled from '@emotion/styled';
import { ReactNode, forwardRef } from 'react';
import { ParticleColor } from '../types';

import { useSegmentedControl } from './SegmentedControlContext';
import { Tooltip } from '../Tooltip';

export interface SegmentedControlButtonProps {
  index?: number;
  children: ReactNode;
  onClick?: () => void;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  disabled?: boolean;
  tooltipMessage?: string;
}

const Button = styled.button<{ color?: ParticleColor }>`
  flex: 1;
  display: flex;
  gap: 8px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.grey[900]};
  font-family: ${({ theme }) => theme.font.family.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size[100]};
  font-style: normal;
  text-wrap: nowrap;
  outline: none;

  position: relative;
  z-index: 1;
  border-radius: 4px;
  &[aria-selected='true'] {
    color: ${({ theme, color }) =>
      color ? theme.colors.neutral[0] : theme.colors.grey[900]};
  }

  &:hover {
    &:not(:disabled) {
      cursor: pointer;
      &[aria-selected='false'] {
        background: ${({ theme }) => theme.colors.grey[400]};
      }
    }
  }

  svg {
    width: 15px !important;
    height: 15px !important;
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
`;

const SegmentedControlButton = forwardRef<
  HTMLButtonElement,
  SegmentedControlButtonProps
>((props, ref) => {
  const {
    children,
    index,
    leadingIcon,
    trailingIcon,
    onClick,
    disabled = false,
    tooltipMessage,
    ...otherProps
  } = props;
  const { selectedIndex, setSelectedIndex, color } = useSegmentedControl();
  const isActive = index === selectedIndex;

  const handleClick = () => {
    if (index !== undefined) {
      setSelectedIndex(index);
    }

    onClick && onClick();
  };

  const buttonElement = (
    <Button
      ref={ref}
      onClick={handleClick}
      color={color}
      aria-selected={isActive}
      disabled={disabled}
      id={`segmented-control-button-${index}`}
      data-testid={`segmented-control-button-${index}`}
      {...otherProps}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </Button>
  );

  if (tooltipMessage) {
    return (
      <Tooltip
        id={`segmented-control-tooltip-${index}`}
        message={tooltipMessage}
      >
        {buttonElement}
      </Tooltip>
    );
  } else {
    return buttonElement;
  }
});

SegmentedControlButton.displayName = 'SegmentedControlButton';

export { SegmentedControlButton };
