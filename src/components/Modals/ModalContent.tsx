import { PropsWithChildren, forwardRef } from 'react';
import { useModalContext } from './useModalContext';
import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import styled from '@emotion/styled';
import { ZIndex } from '../constants';
import { ModalSize } from './types';

const StyledOverlay = styled(FloatingOverlay)`
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  place-items: center;
  z-index: ${ZIndex.Modal};
  overflow-y: hidden;
`;

const ModalSizeVariants = {
  extraSmall: '320px',
  small: '500px',
  medium: '640px',
  large: '720px',
  extraLarge: '1024px',
};

const Container = styled.div<{ size?: ModalSize }>`
  margin: 1rem;
  border-radius: 0.3125rem;
  background: ${({ theme }) => theme.colors.neutral[0]};
  box-shadow: ${({ theme }) => theme.shadow.main};
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: ${({ size }) => (size ? ModalSizeVariants[size] : 'auto')};
  min-height: 220px;
  max-width: calc(100vw - 24px);
  max-height: calc(100vh - 24px);
  overflow-y: hidden;
  outline: none;
`;

export const ModalContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ size?: ModalSize; id?: string }>
>(function ModalContent(props, propRef) {
  const { context: floatingContext, ...context } = useModalContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  const { size, children, id = 'modal-content', ...otherProps } = props;

  return (
    <FloatingPortal>
      <StyledOverlay
        lockScroll
        id={`${id}-overlay`}
        data-testid={`${id}-overlay`}
      >
        <FloatingFocusManager context={floatingContext}>
          <Container
            ref={ref}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            size={size}
            id={id}
            data-testid={id}
            {...context.getFloatingProps(otherProps)}
          >
            {children}
          </Container>
        </FloatingFocusManager>
      </StyledOverlay>
    </FloatingPortal>
  );
});
