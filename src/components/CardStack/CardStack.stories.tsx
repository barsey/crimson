import type { Meta, StoryObj } from '@storybook/react';

import { CardStack } from './CardStack';
import { Accordion, AccordionItem } from '../Accordion';
import { Box } from '../Box';
import { Chip } from '../Chip';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CardStack> = {
  title: 'Design System/CardStack',
  component: CardStack,
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
} satisfies Meta<typeof CardStack>;

export default meta;

type Story = StoryObj<typeof meta>;

function AccordionChild({
  activeIndex = 0,
  indexes,
  onClick,
}: {
  activeIndex?: number;
  indexes: number[];
  onClick?: (index: number) => void;
}) {
  return (
    <Accordion>
      <AccordionItem
        title='E11.51'
        subTitle='Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene'
        active={indexes[0] === activeIndex}
        onToggle={() => onClick && onClick(indexes[0])}
        defaultExpanded={indexes[0] === activeIndex}
        titleFooter='Reconfirmation'
        leadingExpandSection={
          <Chip variant='success' size='small'>
            Accepted
          </Chip>
        }
      >
        <Box display='flex' alignItems='center' flexWrap='wrap' gap={4}>
          <Chip size='small'>Accept</Chip>
          <Chip size='small'>Accept & Document in Progress Note</Chip>
          <Chip size='small'>Reject</Chip>
        </Box>
      </AccordionItem>
      <AccordionItem
        title='E11.65'
        subTitle='Type 2 diabetes mellitus with hyperglycemia'
        titleFooter='Reconfirmation'
        active={indexes[1] === activeIndex}
        onToggle={() => onClick && onClick(indexes[1])}
        defaultExpanded={indexes[1] === activeIndex}
      >
        <Box padding={12}>This is the content of the second section</Box>
      </AccordionItem>
      <AccordionItem
        title='E11.59'
        subTitle='Type 2 diabetes mellitus with other circulatory complications'
        titleFooter='Clinical Inference'
        active={indexes[2] === activeIndex}
        onToggle={() => onClick && onClick(indexes[2])}
        defaultExpanded={indexes[2] === activeIndex}
      >
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

function MultipleRender(args: Story['args']) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box display='flex' flexDirection='column' gap={8} minWidth={600}>
      <CardStack
        totalItems={3}
        {...args}
        title='Diabetes'
        onToggle={(collapsed) =>
          !collapsed && ![0, 1, 2].includes(activeIndex) && setActiveIndex(0)
        }
        initialCollapsed={false}
        active={[0, 1, 2].includes(activeIndex)}
      >
        <AccordionChild
          indexes={[0, 1, 2]}
          activeIndex={activeIndex}
          onClick={(index) => setActiveIndex(index)}
        />
      </CardStack>
      <CardStack
        totalItems={3}
        {...args}
        title='Major Depressive Disorder'
        onToggle={(collapsed) =>
          !collapsed && ![3, 4, 5].includes(activeIndex) && setActiveIndex(3)
        }
        active={[3, 4, 5].includes(activeIndex)}
      >
        <AccordionChild
          indexes={[3, 4, 5]}
          activeIndex={activeIndex}
          onClick={(index) => setActiveIndex(index)}
        />
      </CardStack>
      <Accordion>
        <AccordionItem
          title='I42.0'
          subTitle='Dilated cardiomyopathy'
          active={6 === activeIndex}
          onToggle={() => setActiveIndex(6)}
          titleFooter='Clinical Inference'
        >
          <Box display='flex' alignItems='center' flexWrap='wrap' gap={4}>
            <Chip size='small'>Accept</Chip>
            <Chip size='small'>Accept & Document in Progress Note</Chip>
            <Chip size='small'>Reject</Chip>
          </Box>
        </AccordionItem>
        <AccordionItem
          title='I10'
          subTitle='Essential (primary) hypertension'
          titleFooter='Clinical Inference'
          active={7 === activeIndex}
          onToggle={() => setActiveIndex(7)}
        >
          <Box padding={12}>This is the content of the second section</Box>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export const Default: Story = {
  args: {
    title: 'Diabetes',
    totalItems: 3,
    children: <AccordionChild indexes={[0, 1, 2]} />,
  },
};

export const MultipleItems: Story = {
  args: {
    title: 'Diabetes',
    totalItems: 3,
  },
  render: MultipleRender,
};
