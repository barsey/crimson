import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableBody, TableCell, TableHead, TableRow } from './index';
import { TextInput } from '../TextInput';
import { useState } from 'react';
import { MultiSelect } from '../MultiSelect';
import { Icon } from '../Icons';
import {
  faCheckCircle,
  faBan,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Table> = {
  title: 'Design System/Table',
  component: Table,
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
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

function createData(
  lastUpdated: string,
  name: string,
  orgType: string,
  shortCode: string,
  inNonProd: boolean,
  inProd?: boolean,
) {
  return { name, orgType, shortCode, inNonProd, inProd, lastUpdated };
}

const rows = [
  createData(
    '2/15/2023 - 03:49 PM',
    'Washington Regional Medical System',
    'Health System',
    'WRM',
    false,
    undefined,
  ),
  createData(
    '2/13/2023 - 02:59 PM',
    'Northern Light Mayo Hospital',
    'Vendor',
    'NLM',
    true,
    undefined,
  ),
  createData(
    '2/13/2023 - 02:57 PM',
    'Washington Light Health',
    'Vendor',
    'NLE',
    true,
    undefined,
  ),
  createData(
    '2/12/2023 - 01:14 PM',
    'Texas Health Resources',
    'Vendor',
    'NOR',
    true,
    undefined,
  ),
  createData(
    '2/12/2023 - 01:11 PM',
    'Norton',
    'Vendor',
    'THR',
    true,
    undefined,
  ),
];

function DefaultRender(args: Story['args']) {
  return (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableCell>Last updated</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Organization Type</TableCell>
          <TableCell>Short Code</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.lastUpdated}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.orgType}</TableCell>
            <TableCell>{row.shortCode}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function WithControlsRender(args: Story['args']) {
  const [values, setValues] = useState<{ search: string; orgType: string[] }>({
    search: '',
    orgType: [],
  });

  return (
    <div>
      <div style={{ display: 'flex', gap: 8 }}>
        <TextInput
          value={values.search}
          onChange={(event) => {
            setValues({ ...values, search: event.target.value });
          }}
          placeholder='Filter by search...'
          containerStyle={{ marginBottom: 0 }}
        />
        <MultiSelect
          placeholder='Organization Type'
          options={['Health System', 'Vendor']}
          value={values.orgType}
          onChange={(eventVal) => {
            setValues({ ...values, orgType: eventVal as string[] });
          }}
        />
      </div>

      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableCell>Last updated</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Organization Type</TableCell>
            <TableCell>Short Code</TableCell>
            <TableCell>In Non-Prod</TableCell>
            <TableCell>In Prod</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .filter(
              (item) =>
                item.name
                  .toLowerCase()
                  .indexOf(values.search.trim().toLocaleLowerCase()) !== -1,
            )
            .filter(
              (item) =>
                values.orgType.length === 0 ||
                values.orgType
                  .map((oItem: string) => oItem.toLowerCase())
                  .includes(item.orgType.toLowerCase()),
            )
            .map((row) => (
              <TableRow
                key={row.name}
                //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.lastUpdated}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.orgType}</TableCell>
                <TableCell>{row.shortCode}</TableCell>
                <TableCell>
                  <Icon
                    color={row.inNonProd ? 'success' : 'error'}
                    icon={row.inNonProd ? faCheckCircle : faBan}
                  />
                </TableCell>
                <TableCell>
                  <Icon
                    color={row.inProd ? 'success' : 'error'}
                    icon={row.inProd ? faCheckCircle : faTimesCircle}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};

export const WithControls: Story = {
  args: {
    style: { minWidth: 700 },
  },
  render: WithControlsRender,
};
