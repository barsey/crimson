import React from 'react';
import styled from '@emotion/styled';
import { AccordionContext } from './AccordionContext';

const Container = styled.div<{ spacing?: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ spacing = 0 }) => spacing}px;
`;

export type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  spacing?: number;
  id?: string;
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion(
    { children, spacing = 4, id = 'accordion', ...otherProps },
    ref,
  ) {
    return (
      <Container
        id={id}
        data-testid={id}
        {...otherProps}
        spacing={spacing}
        ref={ref}
      >
        <AccordionContext.Provider value={{ spacing }}>
          {children}
        </AccordionContext.Provider>
      </Container>
    );
  },
);

Accordion.displayName = 'Accordion';

export { Accordion };
