import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { DefaultParticleProps } from '../types';
import { useThemeSizing } from '../../core/useThemeSizing';

type TabsProps = DefaultParticleProps & {
  fullWidth?: boolean;
};

const Container = styled.div`
  width: 100%;
`;

const Nav = styled.div<TabsProps>`
  //   background: #fdfdfd;
  padding: 5px 5px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0.5px solid #eeeeee;
  height: 44px;
  display: flex;
  width: 100%;
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0 !important;
  }

  ul {
    display: flex;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  }

  li {
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    padding: 8px 16px;
    position: relative;
    background: white;
    cursor: pointer;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    flex: ${({ fullWidth }) => (fullWidth ? 1 : 'auto')};
    min-width: 0;
    position: relative;
    user-select: none;
  }

  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
  }

  li.selected {
    background: #eee;
    border-bottom: ${({ theme, color }) =>
      `3px solid ${color ? theme.colors[color] : theme.colors.primary}`};
  }

  li button {
    width: 20px;
    height: 20px;
    border: 0;
    background: #fff;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    stroke: #000;
    margin-left: 10px;
    cursor: pointer;
    flex-shrink: 0;
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
`;

export function Tabs(props: PropsWithChildren<TabsProps>) {
  const { children, fullWidth, color, size } = props;
  const ulStyleClass = useThemeSizing({ size });
  return (
    <Container>
      <Nav color={color} fullWidth={fullWidth}>
        <ul css={ulStyleClass}>{children}</ul>
      </Nav>
    </Container>
  );
}
