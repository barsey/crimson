import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { ListItemIcon } from './ListItemIcon';
import { ListItemText } from './ListItemText';
import { Icon } from '../Icons';
import {
  faMailForward,
  faPowerOff,
  faSnowman,
} from '@fortawesome/free-solid-svg-icons';
import { ListItem } from './ListItem';
import { useState } from 'react';
import { Box } from '../Box';
import { Switch } from '../Switch';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof List> = {
  title: 'Design System/List',
  component: List,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

function SimpleUsage(args: Story['args']) {
  return (
    <Box minWidth={400}>
      <List {...args}>
        <ListItem>
          <ListItemText primary='Inbox' secondary='All your emails' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Drafts' secondary='Unfinished emails' />
        </ListItem>
      </List>
    </Box>
  );
}

function DefaultRenderWithOptions(args: Story['args']) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box minWidth={400}>
      <List {...args}>
        <ListItem
          secondaryAction={<Icon icon={faPowerOff} />}
          onClick={() => handleListItemClick(1)}
          selected={selectedIndex === 1}
        >
          <ListItemIcon>
            <Icon icon={faMailForward} />
          </ListItemIcon>
          <ListItemText primary='Inbox' secondary='All your emails' />
        </ListItem>
        <ListItem
          secondaryAction={<Icon icon={faSnowman} />}
          onClick={() => handleListItemClick(2)}
          selected={selectedIndex === 2}
        >
          <ListItemText inset primary='Drafts' secondary='Unfinished emails' />
        </ListItem>
      </List>
    </Box>
  );
}

function SecondaryActionsRender(args: Story['args']) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [switcher, setSwitcher] = useState({ inbox: false, drafts: true });
  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box minWidth={400}>
      <List {...args}>
        <ListItem
          secondaryAction={
            <Switch
              checked={switcher.inbox}
              onToggle={() =>
                setSwitcher({ ...switcher, inbox: !switcher.inbox })
              }
            />
          }
          onClick={() => handleListItemClick(1)}
          selected={selectedIndex === 1}
        >
          <ListItemIcon>
            <Icon icon={faMailForward} />
          </ListItemIcon>
          <ListItemText primary='Inbox' secondary='All your emails' />
        </ListItem>
        <ListItem
          secondaryAction={
            <Switch
              checked={switcher.drafts}
              onToggle={() =>
                setSwitcher({ ...switcher, drafts: !switcher.drafts })
              }
            />
          }
          onClick={() => handleListItemClick(2)}
          selected={selectedIndex === 2}
        >
          <ListItemText inset primary='Drafts' secondary='Unfinished emails' />
        </ListItem>
      </List>
    </Box>
  );
}

export const Default: Story = {
  args: {},
  render: SimpleUsage,
};

export const Selected: Story = {
  args: {},
  render: DefaultRenderWithOptions,
};

export const SecondaryActions: Story = {
  args: {},
  render: SecondaryActionsRender,
};
