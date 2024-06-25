import { render } from '@/utils/test-utils';
import { Box } from './Box';

describe('Box component', () => {
  it('renders without errors', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with data-testid without errors', () => {
    const { getByTestId } = render(<Box id='mybox' />);
    const boxElement = getByTestId('mybox');
    expect(boxElement).toBeInTheDocument();
  });

  it('renders other elements without errors', () => {
    const { container } = render(<Box as='area' />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Box>Hello, World!</Box>);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Box className='custom-class' />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies css props', () => {
    const { container } = render(
      <Box color='#000' border='none' textTransform='capitalize' />,
    );
    expect(container.firstChild).toHaveStyle('color: #000');
    expect(container.firstChild).toHaveStyle('border: none');
    expect(container.firstChild).toHaveStyle('text-transform: capitalize');
  });
});
