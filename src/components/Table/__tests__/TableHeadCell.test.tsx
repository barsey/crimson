import { render, screen } from '@/utils/test-utils';
import { TableHeadCell } from '../TableHeadCell';
import { Table } from '../Table';
import { TableHead } from '../TableHead';
import { TableRow } from '../TableRow';

describe('TableHeadCell', () => {
  it('renders children correctly', () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Header Cell</TableHeadCell>
          </TableRow>
        </TableHead>
      </Table>,
    );
    expect(screen.getByText('Header Cell')).toBeInTheDocument();
  });

  it('applies the correct styles', () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Header Cell</TableHeadCell>
          </TableRow>
        </TableHead>
      </Table>,
    );
    const tableHeadCell = screen.getByText('Header Cell');
    expect(tableHeadCell).toHaveStyle('padding: 8px 12px');
    expect(tableHeadCell).toHaveStyle('text-align: left');
    expect(tableHeadCell).toHaveStyle('cursor: pointer');
    expect(tableHeadCell).toHaveStyle('user-select: none');
  });
});
