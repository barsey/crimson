import styled from '@emotion/styled';
import { PropsWithChildren, forwardRef } from 'react';
import { ParticleFeedbackColor } from '../types';
import { Icon } from '../Icons';
import {
  faInfoCircle,
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

const IconMap: Record<ParticleFeedbackColor, IconDefinition> = {
  success: faCheckCircle,
  info: faInfoCircle,
  warning: faExclamationTriangle,
  error: faExclamationCircle,
};
export type AlertProps = {
  severity?: ParticleFeedbackColor;
  hideIcon?: boolean;
  shadow?: boolean;
  className?: string;
  id?: string;
};

const Container = styled.div<AlertProps>`
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.225rem;
  min-width: 300px;
  margin: 10px;
  position: relative;
  background-color: ${({ theme, severity = 'info' }) =>
    theme.colors[severity][50]};
  border: ${({ theme, severity = 'info' }) =>
    `1px solid ${theme.colors[severity][100]}`};
  color: ${({ theme, severity = 'info' }) => theme.colors[severity][700]};
  letter-spacing: 0.01071em;

  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.3125rem;
  gap: 0.25rem;
  display: flex;
  box-shadow: ${({ shadow, theme }) => (shadow ? theme.shadow[200] : 'none')};

  .content {
    display: flex;
    justify-content: space-between;

    .message {
      display: flex;
      align-items: center;
    }
  }
`;

const Alert = forwardRef<HTMLDivElement, PropsWithChildren<AlertProps>>(
  (props: PropsWithChildren<AlertProps>, ref) => {
    const {
      children,
      severity = 'info',
      hideIcon = false,
      shadow = false,
      className = '',
      id = 'alert',
    } = props;

    return (
      <Container
        id={`${id}-container-${severity}`}
        data-testid={`${id}-container-${severity}`}
        ref={ref}
        severity={severity}
        shadow={shadow}
        className={className}
      >
        {!hideIcon && (
          <Icon
            id={`${id}-container-${severity}-icon`}
            data-testid={`${id}-container-${severity}-icon`}
            icon={IconMap[severity]}
            color={severity}
          />
        )}
        {children}
      </Container>
    );
  },
);

Alert.displayName = 'Alert';

export { Alert };
