import styled from '@emotion/styled';

import { useSnackbar } from './useSnackbar';
import { AnimatePresence, motion } from 'framer-motion';
import Snackbar from './Snackbar';
import { CloseIcon } from '../Icons/CloseIcon';
import { Alert } from '../Alert/Alert';

const SnackbarContent = styled.div`
  padding: 0;
  margin: 0;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
  z-index: 1400;

  button {
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
    display: flex;
    padding: 8px 0;
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
  }

  button.close {
    position: absolute;
    top: 15px;
    right: 10px;
    background: inherit;
    border: none;
    padding: 0;
    svg {
      width: 1rem;
      height: 1rem;
      fill: #ccc;
      &:hover {
        fill: #fff;
      }
    }
  }
`;

const SnackbarItem = motion(Alert);

const CloseButton = ({ close }: { close: () => void }) => (
  <button onClick={close} className='close'>
    <CloseIcon />
  </button>
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
            fallbackColor='#fff'
          >
            <Snackbar
              id={item.id}
              autoHideDuration={item.autoHideDuration}
              onClose={() => closeSnackbar(item.id)}
            >
              <div className='content'>
                <div className='message'>{item.message}</div>
                <CloseButton close={() => closeSnackbar(item.id)} />
              </div>
            </Snackbar>
          </SnackbarItem>
        ))}
      </AnimatePresence>
    </SnackbarContent>
  );
}

export { SnackbarContent };
