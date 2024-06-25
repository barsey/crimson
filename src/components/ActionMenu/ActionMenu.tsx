import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react';
import { forwardRef, useContext } from 'react';
import { ActionMenuComponent } from './ActionMenuComponent';
import { ActionMenuProps } from './types';
import { ButtonGroupContext } from '../ButtonGroup/ButtonGroupContext';

export const ActionMenu = forwardRef<
  HTMLButtonElement,
  ActionMenuProps & React.HTMLProps<HTMLButtonElement>
>(
  (
    {
      placement = 'bottom-start',
      itemSize = 'medium',
      id = 'action-menu',
      ...props
    },
    ref,
  ) => {
    const parentId = useFloatingParentNodeId();
    const {
      disabled: grpDisabled,
      size: grpSize,
      color: grpColor,
    } = useContext(ButtonGroupContext);

    if (parentId === null) {
      return (
        <FloatingTree>
          <ActionMenuComponent
            placement={placement}
            itemSize={grpSize || itemSize}
            color={grpColor}
            disabled={grpDisabled}
            id={id}
            data-testid={id}
            {...props}
            ref={ref}
          />
        </FloatingTree>
      );
    }

    return (
      <ActionMenuComponent
        id={`${id}-${parentId}`}
        data-testid={`${id}-${parentId}`}
        {...props}
        ref={ref}
      />
    );
  },
);

ActionMenu.displayName = 'ActionMenu';
