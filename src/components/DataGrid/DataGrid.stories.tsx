import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../Icons';
import {
  faCheckCircle,
  faBan,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faker } from '@faker-js/faker';
import { ColumnDef, DataGrid } from './DataGrid';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DataGrid> = {
  title: 'Design System/DataGrid',
  component: DataGrid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof DataGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

type MockedDataType = {
  lastUpdated: string;
  name: string;
  orgType: string;
  shortCode: string;
  inNonProd: boolean;
  inProd?: boolean;
  id: number;
};

const columnDefs: ColumnDef<MockedDataType>[] = [
  { field: 'lastUpdated', sortable: true },
  { field: 'name', sortable: true },
  {
    field: 'orgType',
    headerName: 'Organization Type',
    sortable: true,
  },
  {
    field: 'shortCode',
    headerName: 'Code',
    sortable: true,
    width: 60,
  },
  {
    field: '_myCustomField',
    headerName: 'Custom Field',
    sortable: true,
    valueGetter: ({ row }) => row.name + ' - ' + row.orgType,
  },
  {
    field: 'inNonProd',
    headerName: 'In Non-Prod',
    sortable: true,
    cellRenderer: (value: string) => {
      return (
        <Icon
          color={value ? 'success' : 'error'}
          icon={value ? faCheckCircle : faBan}
        />
      );
    },
  },
  {
    field: 'inProd',
    sortable: true,
    cellRenderer: (value: string) => {
      return (
        <Icon
          color={value ? 'success' : 'error'}
          icon={value ? faCheckCircle : faTimesCircle}
        />
      );
    },
  },
  // Add more columns as needed
];

const getRowData = () => {
  const data: MockedDataType[] = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    lastUpdated: faker.date.recent().toLocaleDateString(),
    name: faker.company.name(),
    orgType: faker.helpers.arrayElement(['Vendor', 'Health System', 'Payer']),
    shortCode: faker.helpers.arrayElement(['NLM', 'WRM', 'NOR']),
    inNonProd: faker.datatype.boolean(),
    inProd: faker.datatype.boolean(),
  }));

  return data;
};

function DataGridStory(args: Story['args']) {
  return (
    <DataGrid
      {...args}
      rowData={getRowData()}
      columnDefs={columnDefs}
      initialPageSize={5}
    />
  );
}

export const Default: Story = {
  args: {},
  render: DataGridStory,
};
