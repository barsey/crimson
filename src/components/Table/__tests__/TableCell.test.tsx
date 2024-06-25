import { render } from '@/utils/test-utils';
import { TableCell } from '../TableCell';
import { Table } from '../Table';
import { TableBody } from '../TableBody';
import { TableRow } from '../TableRow';

describe('TableCell', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies correct styles', () => {
    const { getByText } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableCell = getByText('Test Content');

    expect(tableCell).toHaveStyle('padding: 8px 12px');
    expect(tableCell).toHaveStyle('text-align: left');
  });
});
