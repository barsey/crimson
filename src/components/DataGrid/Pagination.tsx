import styled from '@emotion/styled';
import { Select } from '../Select';
import { Button } from '../Button';

import { Icon } from '../Icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-family: ${({ theme }) => theme.font.family.base};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  gap: 24px;
  .button-group,
  .jump-to,
  .left-content {
    display: flex;
    align-items: center;
  }

  .left-content {
    gap: 12px;
  }
  .button-group,
  .jump-to {
    display: flex;
    align-items: center;
  }
  .button-group {
    gap: 4px;
  }
  .jump-to {
    gap: 12px;
  }
`;
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  changePage: (page: number) => void;
  id?: string;
};
export function Pagination(props: PaginationProps) {
  const {
    currentPage,
    changePage,
    pageSize,
    totalPages,
    totalItems,
    id = 'pagination',
  } = props;
  const startIndex = (currentPage - 1) * pageSize + 1; // Start index of the current page
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems); // End index of the current page

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).map(
    (item) => item.toString(),
  );

  return (
    <Container data-testid={`${id}-container`} id={`${id}-container`}>
      <div
        className='left-content'
        data-testid={`${id}-left-content`}
        id={`${id}-left-content`}
      >
        <span>{`${startIndex} - ${endIndex} of ${totalItems}`}</span>
        <div className='button-group'>
          <Button
            size='small'
            variant='outlined'
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <Icon icon={faArrowLeft} />
          </Button>

          <Button
            size='small'
            variant='outlined'
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <Icon icon={faArrowRight} />
          </Button>
        </div>
      </div>

      <div
        className='jump-to'
        data-testid={`${id}-right-content`}
        id={`${id}-right-content`}
      >
        <span
          data-testid={`${id}-right-content-text`}
          id={`${id}-right-content-text`}
        >
          Jump to
        </span>
        <Select
          value={currentPage.toString()}
          options={pageNumbers}
          onChange={(item) => changePage(Number(item))}
          fullWidth={false}
          clearable={false}
          size='small'
        />
      </div>
    </Container>
  );
}
