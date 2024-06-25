import { render, screen, waitFor } from '@/utils/test-utils';
import { DataGrid, ColumnDef } from './DataGrid';

describe('DataGrid', () => {
  type SampleDataType = {
    id: number;
    name: string;
    age: number;
  };
  const rows: SampleDataType[] = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
  ];

  const columns: ColumnDef<SampleDataType>[] = [
    { field: 'personName', sortable: true },
    { field: 'age', headerName: 'Age' },
  ];

  it('renders the table with correct rows and columns', () => {
    render(<DataGrid rowData={rows} columnDefs={columns} />);

    waitFor(() => {
      // Assert that the table rows and columns are rendered correctly
      const nameColumn = screen.getByText('Person Name');
      const ageColumn = screen.getByText('Age');
      const johnDoeRow = screen.getByText('John Doe');
      const janeSmithRow = screen.getByText('Jane Smith');

      expect(nameColumn).toBeInTheDocument();
      expect(ageColumn).toBeInTheDocument();
      expect(johnDoeRow).toBeInTheDocument();
      expect(janeSmithRow).toBeInTheDocument();
    });
  });

  it('renders the pagination component when showPagination is true', () => {
    render(
      <DataGrid rowData={rows} columnDefs={columns} showPagination={true} />,
    );

    // Assert that the pagination component is rendered
    const paginationComponent = screen.getByTestId('pagination-container');

    expect(paginationComponent).toBeInTheDocument();
  });

  it('does not render the pagination component when showPagination is false', () => {
    render(
      <DataGrid rowData={rows} columnDefs={columns} showPagination={false} />,
    );

    // Assert that the pagination component is not rendered
    const paginationComponent = screen.queryByTestId('pagination-container');

    expect(paginationComponent).toBeNull();
  });
});
