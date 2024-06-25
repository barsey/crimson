import styled from '@emotion/styled';

import { useSnackbar } from './useSnackbar';
import { AnimatePresence, motion } from 'framer-motion';
import Snackbar from './Snackbar';
import { CloseIcon } from '../Icons/CloseIcon';
import { Alert } from '../Alert/Alert';
import { ParticleFeedbackColor } from '../types';
import { ZIndex } from '../constants';

const SnackbarContent = styled.div`
  padding: 0;
  margin: 0;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
  z-index: ${ZIndex.SnackBar};

  button {
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
    display: flex;

    align-items: center;
  }

  button.add {
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 28px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
  }
`;

const StyledAlert = styled(Alert)<{
  severity?: ParticleFeedbackColor;
}>`
  &.default {
    background-color: ${({ theme }) => theme.colors.info[900]};
    border: none;
    color: ${({ theme }) => theme.colors.neutral[0]};
  }
`;

const SnackbarItem = motion(StyledAlert);

const CloseIconButton = styled.button<{ severity?: ParticleFeedbackColor }>`
  align-items: center;
  position: absolute;
  top: 15px;
  right: 10px;
  background: inherit;
  border: none;
  padding: 0;
  svg {
    width: 1rem;
    height: 1rem;
    padding: 0rem 0.1875rem;
    fill: ${({ theme }) => theme.colors.grey[600]};
    &:hover {
      fill: ${({ theme, severity }) =>
        severity ? theme.colors.grey[700] : theme.colors.neutral[0]};
    }
  }
`;

const CloseButton = ({
  close,
  severity,
}: {
  close: () => void;
  severity?: ParticleFeedbackColor;
}) => (
  <CloseIconButton
    data-testid='snackbar-close-button'
    severity={severity}
    onClick={close}
  >
    <CloseIcon />
  </CloseIconButton>
);

export function SnackbarContainer() {
  const { snacks, closeSnackbar } = useSnackbar();
  return (
    <SnackbarContent>
      <AnimatePresence initial={false}>
        {snacks.map((item) => (
          <SnackbarItem
            layout
            key={item.id}
            initial={{ opacity: 0, x: 300, scale: 0.1 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: { duration: 0.2 },
              x: 300,
            }}
            severity={item.variant}
            hideIcon
            shadow
            className={item.variant ?? 'default'}
          >
            <Snackbar
              id={item.id}
              autoHideDuration={item.autoHideDuration}
              onClose={() => closeSnackbar(item.id)}
            >
              <div className='content'>
                <div className='message'>{item.message}</div>
                <CloseButton
                  severity={item.variant}
                  close={() => closeSnackbar(item.id)}
                />
              </div>
            </Snackbar>
          </SnackbarItem>
        ))}
      </AnimatePresence>
    </SnackbarContent>
  );
}

export { SnackbarContent };
