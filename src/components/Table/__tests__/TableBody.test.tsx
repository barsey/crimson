import { render } from '@/utils/test-utils';
import { TableBody } from '../TableBody';

describe('TableBody', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <table>
        <TableBody>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
          </tr>
        </TableBody>
      </table>,
    );

    expect(getByText('Cell 1')).toBeInTheDocument();
    expect(getByText('Cell 2')).toBeInTheDocument();
  });
});
