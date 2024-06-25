import { render } from '@/utils/test-utils';
import { List } from '../List';

describe('List', () => {
  it('renders children correctly', () => {
    const children = <li>Item 1</li>;
    const { getByText } = render(<List>{children}</List>);
    expect(getByText('Item 1')).toBeInTheDocument();
  });
});
