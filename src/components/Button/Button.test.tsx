import { fireEvent, render } from '@/utils/test-utils';
import { Button } from './Button';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>,
    );
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('disables the button when disabled prop is true', () => {
    const { getByText } = render(<Button disabled>Click me</Button>);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeDisabled();
  });

  // Add more test cases as needed...
});
