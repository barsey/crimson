import type { Meta, StoryObj } from '@storybook/react';

import { SegmentedControl } from './SegmentedControl';
import { Icon } from '../Icons';
import {
  faBackward,
  faCheck,
  faForward,
  faPause,
  faPencil,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { SegmentedControlButton } from './SegmentedControlButton';
import { Box } from '../Box';
import { IconButton } from '../IconButton';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SegmentedControl> = {
  title: 'Design System/SegmentedControl',
  component: SegmentedControl,
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
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  const handleSegmentChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <SegmentedControl {...args}>
      <SegmentedControlButton onClick={() => handleSegmentChange('React')}>
        React
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Angular')}>
        Angular
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Vue')}>
        Vue
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Preact')}>
        Preact
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Svelte')}>
        Svelte
      </SegmentedControlButton>
    </SegmentedControl>
  );
}

function TextAndIconRender(args: Story['args']) {
  const handleSegmentChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <SegmentedControl {...args}>
      <SegmentedControlButton
        leadingIcon={<Icon icon={faCheck} />}
        onClick={() => handleSegmentChange('React')}
      >
        React
      </SegmentedControlButton>
      <SegmentedControlButton
        leadingIcon={<Icon icon={faTimes} />}
        onClick={() => handleSegmentChange('Angular')}
        disabled
      >
        Angular
      </SegmentedControlButton>
      <SegmentedControlButton
        leadingIcon={<Icon icon={faForward} />}
        onClick={() => handleSegmentChange('Vue')}
      >
        Vue
      </SegmentedControlButton>

      <SegmentedControlButton
        leadingIcon={<Icon icon={faBackward} />}
        onClick={() => handleSegmentChange('Preact')}
      >
        Vue
      </SegmentedControlButton>
    </SegmentedControl>
  );
}

function OnlyIconRender(args: Story['args']) {
  const handleSegmentChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <SegmentedControl {...args}>
      <SegmentedControlButton onClick={() => handleSegmentChange('React')}>
        <Icon icon={faCheck} />
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Angular')}>
        <Icon icon={faTimes} />
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Vue')}>
        <Icon icon={faForward} />
      </SegmentedControlButton>
    </SegmentedControl>
  );
}

function IconWithTooltipRender(args: Story['args']) {
  return (
    <SegmentedControl {...args}>
      <SegmentedControlButton tooltipMessage='Backward'>
        <Icon icon={faBackward} />
      </SegmentedControlButton>
      <SegmentedControlButton tooltipMessage='Pause'>
        <Icon icon={faPause} />
      </SegmentedControlButton>
      <SegmentedControlButton tooltipMessage='Forward'>
        <Icon icon={faForward} />
      </SegmentedControlButton>
    </SegmentedControl>
  );
}

function WithOtherControlsRender(args: Story['args']) {
  return (
    <Box display='flex' gap={8}>
      <IconButton>
        <Icon icon={faPencil} />
      </IconButton>
      <IconWithTooltipRender {...args} />
    </Box>
  );
}

function ChangingColorWithSelectionRender(args: Story['args']) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const changedColor =
    selectedIndex === 0
      ? 'primary'
      : selectedIndex === 1
        ? 'success'
        : undefined;

  return (
    <Box display='flex' gap={8}>
      <IconButton>
        <Icon icon={faPencil} />
      </IconButton>
      <SegmentedControl {...args} color={changedColor}>
        <SegmentedControlButton
          tooltipMessage='Backward'
          onClick={() => setSelectedIndex(0)}
        >
          <Icon icon={faBackward} />
        </SegmentedControlButton>
        <SegmentedControlButton
          tooltipMessage='Pause'
          onClick={() => setSelectedIndex(1)}
        >
          <Icon icon={faPause} />
        </SegmentedControlButton>
        <SegmentedControlButton
          tooltipMessage='Forward'
          onClick={() => setSelectedIndex(2)}
        >
          <Icon icon={faForward} />
        </SegmentedControlButton>
      </SegmentedControl>
    </Box>
  );
}

export const Default: Story = {
  args: {
    initialSelectedIndex: 1,
  },
  render: DefaultRender,
};

export const TextAndIcon: Story = {
  args: {},
  render: TextAndIconRender,
};

export const OnlyIcon: Story = {
  args: {},
  render: OnlyIconRender,
};

export const IconWithTooltip: Story = {
  args: {},
  render: IconWithTooltipRender,
};

export const NoneSelected: Story = {
  args: {
    initialSelectedIndex: -1,
  },
  render: DefaultRender,
};

export const WithOtherControls: Story = {
  args: {
    initialSelectedIndex: -1,
  },
  render: WithOtherControlsRender,
};

export const ChangingColorWithSelection: Story = {
  args: {
    initialSelectedIndex: -1,
  },
  render: ChangingColorWithSelectionRender,
};
