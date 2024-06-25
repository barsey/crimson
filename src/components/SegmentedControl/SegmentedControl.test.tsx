import { fireEvent, render, screen } from '@/utils/test-utils';
import { SegmentedControl } from './SegmentedControl';
import { SegmentedControlButton } from './SegmentedControlButton';
import { useSegmentedControl } from './SegmentedControlContext';
import { forwardRef } from 'react';
import { DEFAULT_THEME } from '@/theming/theme';
import { ParticleHeights } from '../constants';
import { ThemeSize } from '../types';

describe('SegmentedControl', () => {
  it('renders without crashing', () => {
    render(
      <SegmentedControl>
        <SegmentedControlButton>Test</SegmentedControlButton>
      </SegmentedControl>,
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('initially selects the correct index', () => {
    render(
      <SegmentedControl initialSelectedIndex={1}>
        <SegmentedControlButton>Button 1</SegmentedControlButton>
        <SegmentedControlButton>Button 2</SegmentedControlButton>
      </SegmentedControl>,
    );

    expect(screen.getByText('Button 2')).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('moves the indicator when a different button is selected', () => {
    const { getByText } = render(
      <SegmentedControl initialSelectedIndex={0}>
        <SegmentedControlButton>Button 1</SegmentedControlButton>
        <SegmentedControlButton>Button 2</SegmentedControlButton>
      </SegmentedControl>,
    );

    expect(screen.getByText('Button 1')).toHaveAttribute(
      'aria-selected',
      'true',
    );

    expect(screen.getByText('Button 2')).toHaveAttribute(
      'aria-selected',
      'false',
    );

    fireEvent.click(getByText('Button 2'));

    expect(screen.getByText('Button 1')).toHaveAttribute(
      'aria-selected',
      'false',
    );

    expect(screen.getByText('Button 2')).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('applies styles based on size small', () => {
    render(
      <SegmentedControl color='primary' size='small'>
        <SegmentedControlButton>Button</SegmentedControlButton>
      </SegmentedControl>,
    );

    const indicator = screen.getByTestId('segmented-control-indicator'); // Assume the first div is the indicator
    const rootContainer = screen.getByTestId('segmented-control-root');

    expect(indicator).toHaveStyle(`height: 100%`);
    expect(indicator).toHaveStyle(
      `border: 1px solid ${DEFAULT_THEME.colors.primary.main}`,
    );
    expect(rootContainer).toHaveStyle(
      `height: ${ParticleHeights[ThemeSize.small] - 2}px`,
    );
  });

  it('applies no borders when initialSelectedIndex is -1', () => {
    render(
      <SegmentedControl color='primary' size='small' initialSelectedIndex={-1}>
        <SegmentedControlButton>Button</SegmentedControlButton>
      </SegmentedControl>,
    );

    const indicator = screen.getByTestId('segmented-control-indicator'); // Assume the first div is the indicator
    const rootContainer = screen.getByTestId('segmented-control-root');

    expect(indicator).toHaveStyle(`height: 100%`);
    expect(indicator).toHaveStyle(`border: none`);
    expect(rootContainer).toHaveStyle(
      `height: ${ParticleHeights[ThemeSize.small] - 2}px`,
    );
  });

  it('applies styles based on size medium', () => {
    render(
      <SegmentedControl color='primary' size='medium'>
        <SegmentedControlButton>Button</SegmentedControlButton>
      </SegmentedControl>,
    );

    const rootContainer = screen.getByTestId('segmented-control-root');

    expect(rootContainer).toHaveStyle(
      `height: ${ParticleHeights[ThemeSize.medium] - 2}px`,
    );
  });

  it('applies styles based on size large', () => {
    render(
      <SegmentedControl color='primary' size='large'>
        <SegmentedControlButton tooltipMessage='Hellow there!!!'>
          Button
        </SegmentedControlButton>
      </SegmentedControl>,
    );

    const rootContainer = screen.getByTestId('segmented-control-root');

    expect(rootContainer).toHaveStyle(
      `height: ${ParticleHeights[ThemeSize.large] - 2}px`,
    );
  });

  it('provides correct context values to children', () => {
    const ChildComponent = forwardRef<HTMLButtonElement, Record<string, never>>(
      (props, ref) => {
        const context = useSegmentedControl();
        return (
          <SegmentedControlButton {...props} ref={ref}>
            {context.size}
          </SegmentedControlButton>
        );
      },
    );

    ChildComponent.displayName = 'ChildComponent';

    render(
      <SegmentedControl size='large'>
        <ChildComponent />
      </SegmentedControl>,
    );

    expect(screen.getByText('large')).toBeInTheDocument();
  });
});
