import { PropsWithChildren } from 'react';
import { BaseModal } from '../Modals/BaseModal';
import { DrawerContent } from './DrawerContent';
import { DrawerPosition, DrawerSize } from './types';
import { DrawerHeading } from './DrawerHeading';
import styled from '@emotion/styled';

export type DrawerProps = {
  title?: string;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: DrawerSize;
  position?: DrawerPosition;
  onClose?: () => void;
  id?: string;
};

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export function Drawer(props: PropsWithChildren<DrawerProps>) {
  const {
    open,
    onOpenChange,
    children,
    title,
    size = 'small',
    position = 'left',
    onClose,
    id = 'drawer',
  } = props;
  return (
    <BaseModal open={open} onOpenChange={onOpenChange} data-testid={id}>
      <DrawerContent id={`${id}-content`} size={size} position={position}>
        {title && (
          <DrawerHeading
            id={`${id}-heading`}
            data-testid={`${id}-heading`}
            onClose={onClose}
          >
            {title}
          </DrawerHeading>
        )}
        <ContentBody
          id={`${id}-content-body`}
          data-testid={`${id}-content-body`}
        >
          {children}
        </ContentBody>
      </DrawerContent>
    </BaseModal>
  );
}
