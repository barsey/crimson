import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const Container = styled.div`
  padding: 8px;
  flex-grow: 1;
  user-select: none;
  width: 100%;
`;

export function TabPanels(props: PropsWithChildren) {
  const { children } = props;
  return <Container>{children}</Container>;
}
