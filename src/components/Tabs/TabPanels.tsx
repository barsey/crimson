import styled from '@emotion/styled';
import { PropsWithChildren, useId } from 'react';

const Container = styled.div`
  padding: 8px;
  flex-grow: 1;
  user-select: none;
  width: 100%;
`;

export type TabPanelsProps = {
  style?: React.CSSProperties;
  className?: string;
  id?: string;
};

export function TabPanels(props: PropsWithChildren<TabPanelsProps>) {
  const { children, id, ...otherProps } = props;
  const uniqueId = useId();
  const tabPanelsId = id || uniqueId;
  return (
    <Container id={tabPanelsId} data-testid={tabPanelsId} {...otherProps}>
      {children}
    </Container>
  );
}
