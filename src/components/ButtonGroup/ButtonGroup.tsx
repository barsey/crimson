import { PropsWithChildren, forwardRef, ForwardedRef } from 'react';
import styled from '@emotion/styled';
import { ButtonGroupContextProps } from './types';
import { ButtonGroupContext } from './ButtonGroupContext';

export type ButtonGroupProps = ButtonGroupContextProps & {
  orientation?: 'horizontal' | 'vertical';
};

const ButtonGroupContainer = styled.div<ButtonGroupProps>`
  display: flex;

  &[data-orientation='horizontal'] {
    button {
      border-radius: 0;
      &:first-of-type {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-of-type {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
    button {
      border-radius: 0;
      margin: 0;
      &:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
`;

const ButtonGroup = forwardRef(function ButtonGroup(
  {
    children,
    variant = 'outlined',
    disabled,
    orientation = 'horizontal',
    color,
    size = 'medium',
    id = 'button-group',
  }: PropsWithChildren<ButtonGroupProps>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const value = { variant, disabled, color, size };

  return (
    <ButtonGroupContainer
      data-orientation={orientation}
      variant={variant}
      ref={ref}
      role='group'
      id={id}
      data-testid={id}
    >
      <ButtonGroupContext.Provider value={value}>
        {children}
      </ButtonGroupContext.Provider>
    </ButtonGroupContainer>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
