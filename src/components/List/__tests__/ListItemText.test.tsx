import { render } from '@/utils/test-utils';
import { ListItemText } from '../ListItemText';

describe('ListItemText', () => {
  it('renders primary text', () => {
    const primaryText = 'Primary Text';
    const { getByText } = render(<ListItemText primary={primaryText} />);
    const primaryElement = getByText(primaryText);
    expect(primaryElement).toBeInTheDocument();
  });

  it('renders secondary text', () => {
    const secondaryText = 'Secondary Text';
    const { getByText } = render(
      <ListItemText primary='Primary Text' secondary={secondaryText} />,
    );
    const secondaryElement = getByText(secondaryText);
    expect(secondaryElement).toBeInTheDocument();
  });

  it('applies inset style when inset prop is true', () => {
    const { container } = render(<ListItemText primary='Primary Text' inset />);
    const listItemTextElement = container.firstChild;
    expect(listItemTextElement).toHaveStyle('padding-left: 32px;');
  });
});
