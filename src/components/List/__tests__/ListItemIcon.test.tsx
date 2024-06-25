import { render } from '@/utils/test-utils';
import { ListItemIcon } from '../ListItemIcon';

describe('ListItemIcon', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ListItemIcon>
        <span>Icon</span>
      </ListItemIcon>,
    );

    expect(getByText('Icon')).toBeInTheDocument();
  });
});
