import {
  CSSProperties,
  PropsWithChildren,
  useMemo,
  forwardRef,
  ForwardedRef,
} from 'react';

export type BoxProps = {
  as?: React.ElementType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  className?: string;
  id?: string;
  'data-testid'?: string;
  'aria-labelledby'?: string; // to fix tooltip passing these props
  'aria-describedby'?: string; // to fix tooltip passing these props
  'data-state'?: string; // to fix tooltip passing these props
  htmlProps?: Omit<
    React.HTMLProps<HTMLElement>,
    'className' | 'style' | 'data-testid' | 'id'
  >;
} & CSSProperties;

const Box = forwardRef(
  (
    {
      children,
      className,
      as: Component = 'div',
      'data-testid': testId = 'box-component',
      'aria-labelledby': labelledBy,
      'aria-describedby': describedBy,
      'data-state': dataState,
      id = 'box-component',
      htmlProps,
      ...props
    }: PropsWithChildren<BoxProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const componentStyle = useMemo(() => ({ ...props }), [props]);

    return (
      <Component
        ref={ref}
        className={className}
        data-testid={id || testId}
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        data-state={dataState}
        id={id}
        css={{ ...componentStyle }}
        {...htmlProps}
      >
        {children}
      </Component>
    );
  },
);

Box.displayName = 'Box';

export { Box };
