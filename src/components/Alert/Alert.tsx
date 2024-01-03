import styled from '@emotion/styled';
import { PropsWithChildren, forwardRef } from 'react';
import { ParticleColor } from '../types';

const Container = styled.div<{
  severity?: ParticleColor;
  fallbackColor?: string;
}>`
  padding: 0;
  margin: 0;
  width: 300px;
  margin: 10px;
  position: relative;
  background-color: ${({ severity, theme }) =>
    severity ? theme.colors[severity] : '#313131'};
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: ${({ theme, severity, fallbackColor }) =>
    severity
      ? theme.getContrastText(theme.colors[severity])
      : fallbackColor ?? '#fff'};
  align-items: center;
  padding: 6px 16px;
  border-radius: 4px;
  box-shadow:
    0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);

  .content {
    display: flex;
    justify-content: space-between;

    .message {
      display: flex;
      align-items: center;
      padding: 8px 0;
    }
  }
`;

type AlertProps = {
  severity?: ParticleColor;
  fallbackColor?: string;
};

const Alert = forwardRef<HTMLDivElement, PropsWithChildren<AlertProps>>(
  (props: PropsWithChildren<AlertProps>, ref) => {
    const { children, severity, fallbackColor = 'black' } = props;

    return (
      <Container ref={ref} severity={severity} fallbackColor={fallbackColor}>
        {children}
      </Container>
    );
  },
);

export { Alert };
