import { render } from '@/utils/test-utils';
import { Grid } from './Grid';

describe('Grid component', () => {
  it('renders without errors', () => {
    render(<Grid />);
    expect(true).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <Grid spacing={1} gutterWidth={2}>
        <Grid.Row>
          <Grid.Col xs={12}>Child 1</Grid.Col>
          <Grid.Col xs={12}>Child 2</Grid.Col>
        </Grid.Row>
      </Grid>,
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });
});
