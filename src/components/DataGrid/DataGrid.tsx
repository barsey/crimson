import { useMemo, useState, KeyboardEvent } from 'react';
import styled from '@emotion/styled';
import { Pagination } from './Pagination';
import { Box } from '../Box';

// Type definitions
export interface ColumnDef<
  T,
  V = any, // eslint-disable-line @typescript-eslint/no-explicit-any
> {
  field: keyof T | string; // Allow custom fields by using string type
  headerName?: string;
  sortable?: boolean;
  cellRenderer?: (value: V, row: T) => JSX.Element | string;
  valueGetter?: (params: { row: T }) => V;
  width?: number;
}

export interface DataGridProps<T> {
  columnDefs: ColumnDef<T>[];
  rowData: T[];
  initialPageSize?: number; // Optional initial page size
  showPagination?: boolean; // Optional flag to show/hide pagination
  id?: string;
}

// Styled components
const GridContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.grey[200]}`};
  color: ${({ theme }) => theme.colors.grey[900]};
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: 13px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  overflow-x: auto;
  border-radius: 4px;
`;

const GridInnerContainer = styled.div<{ columns: string }>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  min-width: 100%;
`;

const GridHeader = styled.div`
  padding: 8px;
  background-color: #f2f2f2;
  font-weight: 700;
  text-align: left;
`;

const GridCell = styled.div`
  padding: 8px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey[200]}`};
  text-align: left;
  &.alternate {
    background-color: ${({ theme }) => theme.colors.grey[50]};
  }
`;

const GridRow = styled.div`
  display: contents;
`;

// Helper functions
const generateHeaderName = (field: string) => {
  return field
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
};

// DataGrid Component
const DataGrid = <T,>({
  columnDefs,
  rowData,
  initialPageSize = 10,
  showPagination = true,
  id = 'data-grid',
}: DataGridProps<T>) => {
  const renderCellContent = (col: ColumnDef<T>, row: T) => {
    const value = col.valueGetter
      ? col.valueGetter({ row })
      : row[col.field as keyof T];

    return col.cellRenderer ? col.cellRenderer(value, row) : (value as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(initialPageSize);
  const [sortConfig, setSortConfig] = useState<{
    field: keyof T | string;
    direction: 'ascending' | 'descending';
  } | null>(null);

  const sortedData = useMemo(() => {
    if (!sortConfig) {
      return rowData; // Return original data if no sort is applied
    }
    return [...rowData].sort((a, b) => {
      const colDef = columnDefs.find((col) => col.field === sortConfig.field);
      const aValue = colDef?.valueGetter
        ? colDef.valueGetter({ row: a })
        : a[sortConfig.field as keyof T];
      const bValue = colDef?.valueGetter
        ? colDef.valueGetter({ row: b })
        : b[sortConfig.field as keyof T];
      if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }, [rowData, sortConfig, columnDefs]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const onSort = (field: keyof T | string) => {
    // If already sorted descending, remove sorting.
    if (
      sortConfig &&
      sortConfig.field === field &&
      sortConfig.direction === 'descending'
    ) {
      setSortConfig(null); // No sort applied
    } else if (
      sortConfig &&
      sortConfig.field === field &&
      sortConfig.direction === 'ascending'
    ) {
      // If already sorted ascending, switch to descending.
      setSortConfig({ field, direction: 'descending' });
    } else {
      // Not sorted or sorted by another column, sort ascending.
      setSortConfig({ field, direction: 'ascending' });
    }
  };

  // Function to handle keyboard events for accessibility
  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    field: keyof T | string,
  ) => {
    if (event.key === 'Enter') {
      onSort(field);
    }
  };

  const totalPages = Math.ceil(rowData.length / pageSize);
  const totalItems = rowData.length;

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const columnTemplate = useMemo(() => {
    return columnDefs
      .map((col) => (col.width ? `${col.width}px` : 'auto'))
      .join(' ');
  }, [columnDefs]);

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={8}
      width={'100%'}
      id={`${id}-root-container`}
      data-testid={`${id}-root-container`}
    >
      {showPagination && (
        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          changePage={changePage}
          totalPages={totalPages}
          totalItems={totalItems}
        />
      )}
      <GridContainer id={`${id}-container`} data-testid={`${id}-container`}>
        <GridInnerContainer
          columns={columnTemplate}
          role='table'
          id={`${id}-inner-container`}
          data-testid={`${id}-inner-container`}
        >
          {columnDefs.map((col) => (
            <GridHeader
              key={String(col.field)}
              role='columnheader'
              tabIndex={0}
              aria-sort={
                sortConfig?.field === col.field
                  ? sortConfig.direction === 'ascending'
                    ? 'ascending'
                    : 'descending'
                  : 'none'
              }
              onClick={() => col.sortable && onSort(col.field)}
              onKeyDown={(event) =>
                col.sortable && handleKeyDown(event, col.field)
              }
              style={{ cursor: col.sortable ? 'pointer' : 'auto' }}
              id={`${id}-header-col-${String(col.field)}-container`}
              data-testid={`${id}-header-col-${String(col.field)}-container`}
            >
              <span
                id={`${id}-header-col-${String(col.field)}`}
                data-testid={`${id}-header-col-${String(col.field)}`}
              >
                {col.headerName || generateHeaderName(String(col.field))}
              </span>
              <Box
                as='span'
                display='inline-flex'
                width={20}
                justifyContent='center'
                alignItems='center'
                id={`${id}-header-col-${String(col.field)}-sort-icon`}
                data-testid={`${id}-header-col-${String(col.field)}-sort-icon`}
              >
                {col.sortable && sortConfig?.field === col.field
                  ? sortConfig.direction === 'ascending'
                    ? '↑'
                    : '↓'
                  : null}
              </Box>
            </GridHeader>
          ))}
          {paginatedData.map((row, rowIndex) => (
            <GridRow
              id={`${id}-row-${rowIndex}`}
              data-testid={`${id}-row-${rowIndex}`}
              key={rowIndex}
            >
              {columnDefs.map((col) => (
                <GridCell
                  className={rowIndex % 2 !== 0 ? 'alternate' : ''}
                  key={String(col.field)}
                  id={`${id}-row-${rowIndex}-cell-${String(col.field)}`}
                  data-testid={`${id}-row-${rowIndex}-cell-${String(col.field)}`}
                >
                  {renderCellContent(col, row)}
                </GridCell>
              ))}
            </GridRow>
          ))}
        </GridInnerContainer>
      </GridContainer>
    </Box>
  );
};

export { DataGrid };
