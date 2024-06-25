import React, { useLayoutEffect } from 'react';
import { useModalContext } from './useModalContext';
import styled from '@emotion/styled';
import { ModalClose } from './ModalClose';
import { Box } from '../Box';

const Container = styled.div`
  display: flex;
  padding: 12px;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey[200]}`};
`;

type ModalHeadingProps = {
  footer?: React.ReactNode;
};

export const ModalHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement> & ModalHeadingProps
>(function ModalHeading(
  { children, id = 'modal-heading', disabled, footer },
  ref /* eslint-disable-line @typescript-eslint/no-unused-vars */,
) {
  const { setLabelId } = useModalContext();

  // Only sets `aria-labelledby` on the Modal root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setLabelId(id);
    return () => setLabelId(undefined);
  }, [id, setLabelId]);

  return (
    <Container id={`${id}-container`}>
      <Box display='flex' flexDirection='column' justifyContent='flex-start'>
        <Box fontWeight={700} fontSize={20} id={`${id}-title`}>
          {children}
        </Box>
        {footer}
      </Box>

      <ModalClose
        disabled={disabled}
        id={`${id}-close-action`}
        aria-label='Close modal'
      />
    </Container>
  );
});
