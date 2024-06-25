import { forwardRef, useContext } from 'react';
import { ActionMenuContext } from './ActionMenuContext';
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react';
import { ActionItem } from './ActionItem';
import { ParticleColor, ParticleSize } from '../types';

export interface ActionMenuItemProps {
  label: string;
  disabled?: boolean;
  color?: ParticleColor;
  size?: ParticleSize;
  id?: string;
}

export const ActionMenuItem = forwardRef<
  HTMLButtonElement,
  ActionMenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ label, disabled, id = 'action-menu-item', ...props }, forwardedRef) => {
  const menu = useContext(ActionMenuContext);
  const item = useListItem({ label: disabled ? null : label });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  return (
    <ActionItem
      {...props}
      ref={useMergeRefs([item.ref, forwardedRef])}
      type='button'
      role='menuitem'
      className='MenuItem'
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      id={`${id}-${item.index}`}
      data-testid={`${id}-${item.index}`}
      {...menu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event);
          tree?.events.emit('click');
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event);
          menu.setHasFocusInside(true);
        },
      })}
    >
      {label}
    </ActionItem>
  );
});

ActionMenuItem.displayName = 'ActionMenuItem';
