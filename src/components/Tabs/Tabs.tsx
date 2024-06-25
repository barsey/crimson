import styled from '@emotion/styled';
import { PropsWithChildren, useId } from 'react';
import { ParticleColor } from '../types';

export type TabsProps = {
  fullWidth?: boolean;
  color?: ParticleColor;
  id?: string;
};

const Container = styled.div`
  width: 100%;
`;

const Nav = styled.div<TabsProps>`
  padding: 5px 5px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0.5px solid #eeeeee;
  height: 44px;
  display: flex;
  width: 100%;
  ul {
    list-style: none;
    padding: 0;
    margin: 0 !important;
  }

  ul {
    display: flex;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  }

  li {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : 'auto')};
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
  }

  .add-item {
    width: 30px;
    height: 30px;
    background: #eee;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    align-self: center;
  }

  .add-item:disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
  }

  .underline {
    background: ${({ theme, color = 'primary' }) =>
      theme.colors[color].main};]};
    
  }
`;

export function Tabs(props: PropsWithChildren<TabsProps>) {
  const { children, fullWidth, color, id } = props;

  const uniqueId = useId();
  const controlId = id || uniqueId;

  return (
    <Container
      data-testid={`${controlId}-container`}
      id={`${controlId}-container`}
    >
      <Nav
        color={color}
        fullWidth={fullWidth}
        data-testid={`${controlId}-tab-nav`}
        id={`${controlId}-tab-nav`}
      >
        <ul data-testid={`${controlId}-ul`} id={`${controlId}-ul`}>
          {children}
        </ul>
      </Nav>
    </Container>
  );
}
