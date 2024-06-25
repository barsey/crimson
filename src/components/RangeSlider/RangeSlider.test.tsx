import { render, fireEvent } from '@/utils/test-utils';
import { RangeSlider } from './RangeSlider';

describe('RangeSlider', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <RangeSlider min={0} max={100} value={50} onChange={() => {}} />,
    );
    const rangeSlider = getByTestId('range-slider');

    expect(rangeSlider).toBeInTheDocument();
  });

  test('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    const { getByTestId } = render(
      <RangeSlider min={0} max={100} value={50} onChange={handleChange} />,
    );
    const rangeSlider = getByTestId('range-slider');

    fireEvent.change(rangeSlider, { target: { value: 75 } });

    expect(handleChange).toHaveBeenCalledWith(75);
  });

  test('renders with default color', () => {
    const { getByTestId } = render(
      <RangeSlider min={0} max={100} value={50} onChange={() => {}} />,
    );
    const rangeSlider = getByTestId('range-slider');

    expect(rangeSlider).toHaveStyle(
      'background: linear-gradient(90deg, #0000ff 50%, #ddd 50%)',
    );
  });

  test('renders with custom color', () => {
    const { getByTestId } = render(
      <RangeSlider
        min={0}
        max={100}
        value={50}
        onChange={() => {}}
        color='secondary'
      />,
    );
    const rangeSlider = getByTestId('range-slider');

    expect(rangeSlider).toHaveStyle(
      'background: linear-gradient(90deg, #ff0000 50%, #ddd 50%)',
    );
  });

  test('calls onChange with correct value', () => {
    const handleChange = vi.fn();
    const { getByTestId, getByText } = render(
      <RangeSlider
        min={0}
        max={100}
        value={50}
        onChange={handleChange}
        label='Hello'
      />,
    );
    const rangeSlider = getByTestId('range-slider');
    const labelElement = getByText('Hello');

    fireEvent.change(rangeSlider, { target: { value: 75 } });

    expect(handleChange).toHaveBeenCalledWith(75);
    expect(labelElement).toBeInTheDocument();
  });

  test('renders disabled slider', () => {
    const { getByTestId } = render(
      <RangeSlider
        min={0}
        max={100}
        value={50}
        onChange={() => {}}
        isDisabled
      />,
    );
    const rangeSlider = getByTestId('range-slider');

    expect(rangeSlider).toBeDisabled();
  });
});
