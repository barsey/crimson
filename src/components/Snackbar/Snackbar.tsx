import * as React from 'react';
import { SharedProps, SnackbarKey } from './types';

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React.useCallback((...args: Args) => (0, ref.current)(...args), []);
}

interface SnackbarProps extends Required<Pick<SharedProps, 'onClose'>> {
  id: SnackbarKey;

  children: JSX.Element;
  autoHideDuration: number | null | undefined;
}

const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (props, ref) => {
    const {
      children,

      autoHideDuration,
      // disableWindowBlurListener = false,
      onClose,
      id,
    } = props;

    const timerAutoHide = React.useRef<ReturnType<typeof setTimeout>>();

    const handleClose = useEventCallback((...args: [SnackbarKey]) => {
      if (onClose) {
        onClose(...args);
      }
    });

    const setAutoHideTimer = useEventCallback(
      (autoHideDurationParam?: number | null) => {
        if (!onClose || autoHideDurationParam == null) {
          return;
        }

        if (timerAutoHide.current) {
          clearTimeout(timerAutoHide.current);
        }
        timerAutoHide.current = setTimeout(() => {
          handleClose(id);
        }, autoHideDurationParam);
      },
    );

    React.useEffect(() => {
      setAutoHideTimer(autoHideDuration);

      return () => {
        if (timerAutoHide.current) {
          clearTimeout(timerAutoHide.current);
        }
      };
    }, [autoHideDuration, setAutoHideTimer]);

    return <div ref={ref}>{children}</div>;
  },
);

Snackbar.displayName = 'Snackbar';

export default Snackbar;
