import React from 'react';

import styled from '@emotion/styled';
import { MenuContext } from './MenuContext';
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react';

const StyledButton = styled.button`
  &.RootMenu {
    padding: 6px 14px;
    border: none;
    font-size: 16px;
    background: none;
    border-radius: 6px;
    border: 1px solid #d7dce5;
  }

  &.RootMenu[data-open],
  &.RootMenu:hover {
    background: #d7dce5;
  }

  &.MenuItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    text-align: left;
    line-height: 1.8;
    min-width: 110px;
    margin: 0;
    outline: 0;
  }

  &.MenuItem:focus {
    background: royalblue;
    color: white;
  }

  .&MenuItem[data-nested][data-open]:not([data-focus-inside]) {
    background: royalblue;
    color: white;
  }

  &.MenuItem[data-focus-inside][data-open] {
    background: #d7dce5;
  }
`;

interface MenuItemProps {
  label: string;
  disabled?: boolean;
}

export const MenuItem = React.forwardRef<
  HTMLButtonElement,
  MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ label, disabled, ...props }, forwardedRef) => {
  const menu = React.useContext(MenuContext);
  const item = useListItem({ label: disabled ? null : label });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  return (
    <StyledButton
      {...props}
      ref={useMergeRefs([item.ref, forwardedRef])}
      type='button'
      role='menuitem'
      className='MenuItem'
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
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
    </StyledButton>
  );
});
