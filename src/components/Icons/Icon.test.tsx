import { render, waitFor } from '@/utils/test-utils';
import { Icon, IconProps } from './Icon';
import { faCab } from '@fortawesome/free-solid-svg-icons';
import { DEFAULT_THEME } from '@/theming/theme';

describe('Icon', () => {
  const renderIcon = (props: IconProps) => {
    return render(<Icon {...props} />);
  };

  it('should render the icon component', () => {
    const { getByTestId } = renderIcon({ icon: faCab });
    const iconElement = getByTestId('particle-icon');

    waitFor(() => {
      expect(iconElement).toBeInTheDocument();
    });
  });

  it('should apply the theme color', () => {
    const { getByTestId } = renderIcon({ icon: faCab, color: 'primary' });
    const iconElement = getByTestId('particle-icon');
    expect(iconElement).toHaveStyle(
      `color: ${DEFAULT_THEME.colors.primary.main}`,
    );
  });
});
