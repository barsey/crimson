import { render, fireEvent } from '@/utils/test-utils';
import { TextInput } from './TextInput';

describe('TextInput Component', () => {
  it('renders without crashing', () => {
    const onChange = vi.fn();
    const { getByLabelText } = render(
      <TextInput label='Username' value='' onChange={onChange} />,
    );
    expect(getByLabelText('Username')).toBeInTheDocument();
  });

  it('handles onChange event', () => {
    const onChange = vi.fn();
    const { getByTestId } = render(
      <TextInput label='Username' value='' onChange={onChange} />,
    );

    fireEvent.change(getByTestId('text-input'), {
      target: { value: 'test' },
    });
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('renders with a placeholder', () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
      <TextInput
        label='Username'
        value=''
        onChange={onChange}
        placeholder='Enter your username'
      />,
    );

    expect(getByPlaceholderText('Enter your username')).toBeInTheDocument();
  });

  it('renders with an error message', () => {
    const onChange = vi.fn();
    const { getByText } = render(
      <TextInput
        label='Username'
        value=''
        onChange={onChange}
        errorText='Required field'
      />,
    );

    expect(getByText('Required field')).toBeInTheDocument();
  });

  it('applies the "error" class when there is an error', () => {
    const onChange = vi.fn();
    const { getByRole } = render(
      <TextInput
        label='Username'
        value=''
        onChange={onChange}
        errorText='Required field'
      />,
    );
    const inputElement = getByRole('textbox');

    expect(inputElement).toHaveClass('error');
  });

  it('disables the input when disabled prop is true', () => {
    const onChange = vi.fn();
    const { getByLabelText } = render(
      <TextInput label='Username' value='' onChange={onChange} disabled />,
    );

    expect(getByLabelText('Username')).toBeDisabled();
  });
});
