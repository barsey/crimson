import { render, fireEvent, waitFor } from '@/utils/test-utils';
import { ListItem } from '../ListItem';
import { DEFAULT_THEME } from '@/theming/theme';

describe('ListItem', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ListItem>
        <span>Child Component</span>
      </ListItem>,
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <ListItem onClick={handleClick}>
        <span>Clickable Item</span>
      </ListItem>,
    );

    fireEvent.click(getByText('Clickable Item'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies selected styles when selected prop is true', () => {
    const { getByTestId } = render(
      <ListItem selected>
        <span>Selected Item</span>
      </ListItem>,
    );

    const element = getByTestId('list-item');

    waitFor(() => {
      expect(element).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.info[50]};`,
      );
    });
  });

  it('renders secondaryAction correctly', () => {
    const { getByText } = render(
      <ListItem secondaryAction={<button>Secondary Action</button>}>
        <span>Item with Secondary Action</span>
      </ListItem>,
    );

    expect(getByText('Secondary Action')).toBeInTheDocument();
  });
});
