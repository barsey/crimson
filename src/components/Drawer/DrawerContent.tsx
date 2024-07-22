import { PropsWithChildren, forwardRef } from 'react';

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useModalContext } from '../Modals/useModalContext';
import { DrawerPosition, DrawerSize } from './types';
import { ZIndex } from '../constants';

const StyledOverlay = styled(FloatingOverlay)`
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  z-index: ${ZIndex.Drawer};
`;

export const DrawerSizeMap = {
  extraSmall: '320px',
  small: '380px',
  medium: '440px',
  large: '620px',
  fullWidth: '96%',
};
type DrawerContentProps = {
  size?: DrawerSize;
  position?: DrawerPosition;
  id?: string;
};

const Container = styled.div<DrawerContentProps>`
  background: ${({ theme }) => theme.colors.neutral[0]};
  box-shadow: ${({ theme }) => theme.shadow.main};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  max-height: 100%;
  overflow-y: hidden;
  position: fixed;
  margin: 0;
  border-radius: 0;
  justify-content: space-between;

  &.left,
  &.right {
    width: ${({ size }) => (size ? DrawerSizeMap[size] : 'auto')};
    height: 100%;
    top: 0;
  }

  &.left {
    left: 0;
    border-right: 1px solid ${({ theme }) => theme.colors.grey[500]};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &.right {
    right: 0;
    border-left: 1px solid ${({ theme }) => theme.colors.grey[500]};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &.top,
  &.bottom {
    height: ${({ size }) => (size ? DrawerSizeMap[size] : 'auto')};
    width: 100%;
    left: 0;
  }

  &.top {
    top: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[500]};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &.bottom {
    bottom: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.grey[500]};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;
const drawerLeftVariants = {
  open: { x: 0 },
  closed: { x: '-100%' },
};

const drawerRightVariants = {
  open: { x: 0 },
  closed: { x: '100%' },
};

const drawerTopVariants = {
  open: { y: 0 },
  closed: { y: '-100%' },
};

const drawerBottomVariants = {
  open: { y: 0 },
  closed: { y: '100%' },
};

const drawerPositionVariants = {
  left: drawerLeftVariants,
  right: drawerRightVariants,
  top: drawerTopVariants,
  bottom: drawerBottomVariants,
};

const MotionContainer = motion(Container);

export const DrawerContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<DrawerContentProps>
>(function DrawerContent(props, propRef) {
  const { context: floatingContext, ...context } = useModalContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  const {
    size,
    children,
    position = 'left',
    id = 'drawer-content',
    ...otherProps
  } = props;
  const drawerVariants = drawerPositionVariants[position];

  return (
    <FloatingPortal>
      <StyledOverlay lockScroll>
        <FloatingFocusManager context={floatingContext}>
          <MotionContainer
            id={id}
            data-testid={id}
            className={position}
            variants={drawerVariants}
            initial='closed'
            animate={floatingContext.open ? 'open' : 'closed'}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            ref={ref}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            size={size}
            {...context.getFloatingProps(otherProps)}
          >
            {children}
          </MotionContainer>
        </FloatingFocusManager>
      </StyledOverlay>
    </FloatingPortal>
  );
});
