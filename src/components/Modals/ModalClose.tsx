import React from 'react';
import { useModalContext } from './useModalContext';

import { Icon } from '../Icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HeaderCloseButton } from '../Button/HeaderCloseButton';

export const ModalClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function ModalClose(props, ref) {
  const { setOpen } = useModalContext();
  return (
    <HeaderCloseButton
      type='button'
      {...props}
      ref={ref}
      onClick={() => setOpen(false)}
    >
      <Icon icon={faTimes} />
    </HeaderCloseButton>
  );
});
