import styled from '@emotion/styled';
import {
  faCheck,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icons';
import { Chip } from '../Chip';

type StatusProps = {
  id: string;
  totalItems: number;
  completedItems?: number;
  loading?: boolean;
  loadingText?: string;
  errorText?: string;
};

const Count = styled.span`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 100px;
  background: ${({ theme }) => theme.colors.grey[300]};

  color: ${({ theme }) => theme.colors.grey[900]};
  font-size: ${({ theme }) => theme.font.size[100]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export function Status({
  id,
  totalItems,
  completedItems,
  loading,
  loadingText,
  errorText,
}: StatusProps) {
  if (loading) {
    return (
      <Chip
        id={`${id}-header-loading`}
        data-testid={`${id}-header-loading`}
        loading
        size='small'
      >
        {loadingText || 'Updating...'}
      </Chip>
    );
  }

  if (errorText) {
    return (
      <Chip
        id={`${id}-header-error`}
        data-testid={`${id}-header-error`}
        variant='error'
        size='small'
      >
        <Icon icon={faExclamationTriangle} color='error' />
        {errorText}
      </Chip>
    );
  }
  return (
    <Count id={`${id}-header-count`} data-testid={`${id}-header-count`}>
      <Icon
        icon={faCheck}
        id={`${id}-header-count-check-icon`}
        data-testid={`${id}-header-count-check-icon`}
      />
      <span
        id={`${id}-header-count-text`}
        data-testid={`${id}-header-count-text`}
      >
        {completedItems}/{totalItems}
      </span>
    </Count>
  );
}
