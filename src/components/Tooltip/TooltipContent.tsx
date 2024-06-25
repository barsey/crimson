import { forwardRef } from 'react';
import { useTooltipContext } from './useTooltipContext';
import {
  FloatingPortal,
  useMergeRefs,
  FloatingArrow as FloatingUIArrow,
} from '@floating-ui/react';
import styled from '@emotion/styled';

const TooltipContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.info[900]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: 0.25rem;
  box-sizing: border-box;
  width: max-content;
  max-width: calc(100vw - 10px);
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .caption {
    color: ${({ theme }) => theme.colors.grey[600]};
    margin-botton: 0.25rem;
  }
`;

const FloatingArrow = styled(FloatingUIArrow)`
  fill: ${({ theme }) => theme.colors.info[900]};
`;

const TooltipContent = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function TooltipContent({ style, children, ...props }, propRef) {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!context.open) return null;

  return (
    <FloatingPortal>
      <TooltipContentContainer
        ref={ref}
        style={{
          ...context.floatingStyles,
          ...style,
        }}
        {...context.getFloatingProps(props)}
      >
        {children}

        <FloatingArrow
          ref={context.arrowRef}
          context={context as any /* eslint-disable-line */}
        />
      </TooltipContentContainer>
    </FloatingPortal>
  );
});

export { TooltipContent };
