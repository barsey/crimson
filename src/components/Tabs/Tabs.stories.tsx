import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';
import React, { PropsWithChildren, useState } from 'react';
import { Tab } from './Tab';
import { TabPanels } from './TabPanels';
import { TabPanel } from './TabPanel';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: PropsWithChildren) {
  return <div style={{ marginBottom: 20, width: '100%' }}>{children}</div>;
}

function Render(args) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container>
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
    </Container>
  );
}

function RenderSizes(args) {
  return (
    <>
      <h2>Small Tabs</h2>
      <Render {...args} size='small' />
      <h2>Medium/Default Tabs</h2>
      <Render {...args} size='medium' />
      <h2>Large Tabs</h2>
      <Render {...args} size='large' />
    </>
  );
}

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

export const Sizes: Story = {
  args: {
    color: 'success',
  },
  render: RenderSizes,
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: Render,
};
