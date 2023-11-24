import type { Meta, StoryObj } from '@storybook/react';
// import { useArgs } from '@storybook/preview-api';

import { Tabs } from './Tabs';
import React, { useState } from 'react';
import { Tab } from './Tab';
import { TabPanels } from './TabPanels';
import { TabPanel } from './TabPanel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tabs> = {
  title: 'Design System/Tabs',
  component: Tabs,
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
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

function Render(args) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Tabs {...args}>
        <Tab
          label='Apple'
          selectedTabIndex={selectedTab}
          index={0}
          onClick={setSelectedTab}
        />
        <Tab
          label='Banana'
          selectedTabIndex={selectedTab}
          index={1}
          onClick={setSelectedTab}
        />
        <Tab
          label='Orange'
          selectedTabIndex={selectedTab}
          index={2}
          onClick={setSelectedTab}
        />
      </Tabs>
      <TabPanels>
        <TabPanel label='Tab3' selected={selectedTab === 2}>
          Content for Tab3
        </TabPanel>
        <TabPanel label='Tab1' selected={selectedTab === 0}>
          Content for Tab1
        </TabPanel>
        <TabPanel label='Tab2' selected={selectedTab === 1}>
          Content for Tab2
        </TabPanel>
      </TabPanels>
    </>
  );
  // return <Switch {...args} onToggle={onChange} checked={checked} />;
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    fullWidth: false,
  },
  render: Render,
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
  render: Render,
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
  render: Render,
};

export const Success: Story = {
  args: {
    color: 'success',
  },
  render: Render,
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: Render,
};

// export const Warning: Story = {
//   args: {
//     label: 'Switch',
//     color: 'warning',
//     checked: true,
//   },
//   render: Render,
// };
// export const Info: Story = {
//   args: {
//     label: 'Switch',
//     color: 'info',
//     checked: true,
//   },
//   render: Render,
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Switch',
//     checked: true,
//   },
//   render: Render,
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Switch',
//     checked: true,
//   },
//   render: Render,
// };
