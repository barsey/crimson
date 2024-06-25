import styled from '@emotion/styled';
import { Icon } from '../Icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 24px);
  border-bottom: ${({ theme }) => `0.5px solid ${theme.colors.grey[300]}`};
  padding: 8px 12px;

  h3 {
    padding: 0 1rem;
  }

  h3,
  h4 {
    margin: 0;
  }
`;

import React from 'react';
import { Typography } from '../Typography';
import { useModalContext } from '../Modals/useModalContext';
import { HeaderCloseButton } from '../Button/HeaderCloseButton';

type DrawerHeadingProps = {
  onClose?: () => void;
  id?: string;
};

export const DrawerHeading = React.forwardRef<
  HTMLHeadingElement,
  DrawerHeadingProps & React.HTMLProps<HTMLHeadingElement>
>(function ModalHeading({ children, id = 'drawer-heading', onClose }, ref) {
  const { setLabelId, setOpen } = useModalContext();

  // Only sets `aria-labelledby` on the Modal root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setLabelId(id);
    return () => setLabelId(undefined);
  }, [id, setLabelId]);

  const onCloseHandler = () => {
    setOpen(false);
    onClose && onClose();
  };

  return (
    <Container ref={ref} id={`${id}-container`} data-testid={`${id}-container`}>
      {children && (
        <Typography as='h4' id={`${id}-title`} data-testid={`${id}-title`}>
          {children}
        </Typography>
      )}
      {onClose && (
        <HeaderCloseButton
          type='button'
          onClick={onCloseHandler}
          id={`${id}-close-button`}
          data-testid={`${id}-close-button`}
        >
          <Icon icon={faTimes} />
        </HeaderCloseButton>
      )}
    </Container>
  );
});
