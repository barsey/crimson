import { render } from '@/utils/test-utils';
import { TableHead } from '../TableHead';

describe('TableHead', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <table>
        <TableHead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </TableHead>
      </table>,
    );

    expect(getByText('Column 1')).toBeInTheDocument();
    expect(getByText('Column 2')).toBeInTheDocument();
  });
});
