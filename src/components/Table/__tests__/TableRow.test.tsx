import { render } from '@/utils/test-utils';
import { TableRow } from '../TableRow';

describe('TableRow', () => {
  it('renders without error', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <TableRow>
            <td>Hello, World!</td>
          </TableRow>
        </tbody>
      </table>,
    );

    const tableElement = getByText('Hello, World!');
    expect(tableElement).toBeInTheDocument();
  });

  it('renders children', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <TableRow>
            <td>Cell 1</td>
            <td>Cell 2</td>
          </TableRow>
        </tbody>
      </table>,
    );

    expect(getByText('Cell 1')).toBeInTheDocument();
    expect(getByText('Cell 2')).toBeInTheDocument();
  });
});
