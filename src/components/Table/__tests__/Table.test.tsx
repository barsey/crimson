import { render } from '@/utils/test-utils';
import { Table } from '../Table';

describe('Table', () => {
  it('renders table component correctly', () => {
    const { getByText } = render(
      <Table>
        <thead>
          <tr>
            <td>Hello, World!</td>
          </tr>
        </thead>
      </Table>,
    );
    const tableElement = getByText('Hello, World!');
    expect(tableElement).toBeInTheDocument();
  });
});
