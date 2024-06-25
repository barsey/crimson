import { render } from '@/utils/test-utils';
import { Badge } from './Badge';
import { DEFAULT_THEME } from '@/theming/theme';

describe('Badge Component', () => {
  it('renders with default color', () => {
    const { container } = render(<Badge />);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveStyle(
      `background-color: ${DEFAULT_THEME.colors.primary.main}`,
    );
  });

  it('renders with specified color', () => {
    const { container } = render(<Badge color='success' />);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveStyle(
      `background-color: ${DEFAULT_THEME.colors.success.main}`,
    );
  });

  it('renders children', () => {
    const { getByText } = render(<Badge>Hello</Badge>);
    const badge = getByText('Hello');
    expect(badge).toBeInTheDocument();
  });
});
