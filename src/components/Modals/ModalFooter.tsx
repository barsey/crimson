import styled from '@emotion/styled';
import { forwardRef, HTMLAttributes } from 'react';
import { Button } from '../Button';
import { ParticleSize } from '../types';

const ModalFooterDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding: 16px;
`;

type ModalFooterProps = {
  onAction?: () => void;
  onCancel?: () => void;
  cancelLabel?: string;
  actionLabel?: string;
  size?: ParticleSize;
  loading?: boolean;
};

export const ModalFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & ModalFooterProps
>(function ModalClose(props, ref) {
  const {
    onAction,
    onCancel,
    cancelLabel,
    actionLabel,
    id = 'modal-footer',
    size = 'medium',
    loading,
    ...otherProps
  } = props;

  return (
    <ModalFooterDiv id={id} data-testid={id} {...otherProps} ref={ref}>
      <Button
        variant='outlined'
        onClick={onCancel}
        id={`${id}-cancel-button`}
        data-testid={`${id}-cancel-button`}
        size={size}
        disabled={loading}
      >
        {cancelLabel ? cancelLabel : 'Cancel'}
      </Button>
      {onAction && (
        <Button
          onClick={onAction}
          id={`${id}-action-button`}
          data-testid={`${id}-action-button`}
          size={size}
          variant={loading ? 'outlined' : 'filled'}
          loading={loading}
        >
          {actionLabel ? actionLabel : 'Submit'}
        </Button>
      )}
    </ModalFooterDiv>
  );
});
