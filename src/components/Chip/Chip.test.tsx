import { render, fireEvent } from '@/utils/test-utils';
import { Chip, ChipProps } from './Chip';
import { DEFAULT_THEME } from '@/theming/theme';
import { ParticleHeights } from '../constants';

describe('Chip', () => {
  const defaultProps: ChipProps = {
    onClick: vi.fn(),
  };

  const content = 'Test Chip';

  it('renders the chip with default props', () => {
    const { getByText } = render(<Chip {...defaultProps}>{content}</Chip>);
    const chipElement = getByText('Test Chip');
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveStyle(`height: ${ParticleHeights['medium']}px`);
  });

  it('calls onClick when chip is clicked', () => {
    const { getByText } = render(<Chip {...defaultProps}>{content}</Chip>);
    const chipElement = getByText('Test Chip');
    fireEvent.click(chipElement);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('renders the chip with selected style when selected prop is true', () => {
    const { getByText } = render(
      <Chip {...defaultProps} selected variant='interactive'>
        {content}
      </Chip>,
    );
    const chipElement = getByText('Test Chip');
    expect(chipElement).toHaveStyle(
      `background-color: ${DEFAULT_THEME.colors.primary[50]}`,
    );
  });

  it('renders the chip with correct height for size small', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} size='small'>
        {content}
      </Chip>,
    );
    const chipElement = getByTestId('chip');
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveStyle(`height: ${ParticleHeights['small']}px`);
  });

  it('renders the chip with correct height for size large', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} size='large'>
        {content}
      </Chip>,
    );
    const chipElement = getByTestId('chip');
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveStyle(`height: ${ParticleHeights['large']}px`);
  });

  it('renders the chip with correct style when disabled', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} disabled>
        {content}
      </Chip>,
    );
    const chipElement = getByTestId('chip');
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveStyle(
      `background-color: ${DEFAULT_THEME.colors.grey[200]}`,
    );
    expect(chipElement).toHaveStyle(`border: none`);
    expect(chipElement).toHaveStyle(`color: ${DEFAULT_THEME.colors.grey[600]}`);
  });

  it('renders the chip with correct style when variant is non-interactive', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} variant='info'>
        {content}
      </Chip>,
    );
    const chipElement = getByTestId('chip');
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveStyle(
      `background-color: ${DEFAULT_THEME.colors.info[200]}`,
    );
    expect(chipElement).toHaveStyle(`border-color: transparent`);
    expect(chipElement).toHaveStyle(`color: ${DEFAULT_THEME.colors.grey[900]}`);
  });

  it('renders the chip with correct style when variant is default', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} variant='default'>
        {content}
      </Chip>,
    );
    const chipElement = getByTestId('chip');
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveStyle(
      `background-color: ${DEFAULT_THEME.colors.grey[300]}`,
    );
    expect(chipElement).toHaveStyle(`border-color: transparent`);
    expect(chipElement).toHaveStyle(`color: ${DEFAULT_THEME.colors.grey[900]}`);
  });

  it('renders the loading component', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} variant='default' loading>
        {content}
      </Chip>,
    );
    const loadingElement = getByTestId('spinner-loader');
    expect(loadingElement).toBeInTheDocument();
  });

  it('doest not render the loading component when loading is false', () => {
    const { queryByTestId } = render(
      <Chip {...defaultProps} variant='default'>
        {content}
      </Chip>,
    );
    const loadingElement = queryByTestId('spinner-loader');
    expect(loadingElement).not.toBeInTheDocument();
  });
});
