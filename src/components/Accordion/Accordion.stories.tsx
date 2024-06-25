import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import { Icon } from '../Icons';
import {
  faPaperPlane,
  faBuilding,
  faThumbsDown,
  faAngry,
} from '@fortawesome/free-regular-svg-icons';
import { faMagnet, faCar } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../Box';
import { Radio } from '../Radio';
import { useState } from 'react';
import { Checkbox } from '../Checkbox';
import { Chip } from '../Chip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Accordion> = {
  title: 'Design System/Accordion',
  component: Accordion,
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
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  return (
    <Accordion {...args}>
      <AccordionItem title='Section 1'>
        This is the content of Section 1.
      </AccordionItem>
      <AccordionItem title='Section 2'>
        This is the content of Section 2.
      </AccordionItem>
      <AccordionItem title='Section 3'>
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

function CustomExpandIcon(args: Story['args']) {
  return (
    <Accordion {...args}>
      <AccordionItem
        title='Section 1'
        expandSection={<Icon icon={faThumbsDown} />}
      >
        This is the content of Section 1 with a custom icon.
      </AccordionItem>
      <AccordionItem title='Section 2'>
        This is the content of Section 2.
      </AccordionItem>
      <AccordionItem title='Section 3' expandSection={<Icon icon={faAngry} />}>
        This is the content of section 3 with a custom icon.
      </AccordionItem>
    </Accordion>
  );
}

function CustomTitleIcon(args: Story['args']) {
  return (
    <Box display='flex' flexDirection='column' gap={12}>
      <Box as='p'>This acoordion has spacing between the accordion items</Box>
      <Accordion spacing={4} {...args}>
        <AccordionItem
          titleComponent={<Icon icon={faPaperPlane} />}
          title='Apple Section'
          expandSection={<Icon icon={faThumbsDown} />}
        >
          This is the content of Apple Section with a title icon and custom
          expand icon.
        </AccordionItem>
        <AccordionItem
          titleComponent={<Icon icon={faMagnet} />}
          title='Magnet Section'
        >
          This is the content of Magnet Section.
        </AccordionItem>
        <AccordionItem
          title='Car Section'
          titleComponent={<Icon icon={faCar} />}
        >
          This is the content of Car Section.
        </AccordionItem>

        <AccordionItem
          reverse
          title='Building Section'
          titleComponent={<Icon icon={faBuilding} />}
        >
          This is the content of Building Section with reverse position of title
          text and icons.
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

function CustomTitlesRadioDisplay(args: Story['args']) {
  const [selectedValue, setSelectedValue] = useState('reject-cardio');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <Box display='flex' flexDirection='column' gap={12}>
      <Box as='p'>
        This acoordion has spacing between the accordion items and the title is
        a radio component
      </Box>
      <Accordion spacing={4} {...args}>
        <AccordionItem
          titleComponent={
            <Radio
              option={{
                label: 'Reject Cardiomyopathy',
                value: 'reject-cardio',
              }}
              selectedValue={selectedValue}
              onClick={(event) => handleRadioChange(event.value)}
              stopPropagation
            />
          }
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          deleniti sequi, quis numquam, corrupti debitis laboriosam quasi magnam
          mollitia, sint commodi cupiditate ipsa corporis? Omnis eligendi
          accusamus obcaecati voluptate vitae.
        </AccordionItem>
        <AccordionItem
          titleComponent={
            <Radio
              option={{
                label: 'I42.0 — Dialated cardiomyopathy',
                value: 'dialated',
              }}
              selectedValue={selectedValue}
              onClick={(event) => handleRadioChange(event.value)}
              stopPropagation
            />
          }
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          mollitia soluta quidem dignissimos rem doloribus animi alias eius.
          Numquam dignissimos inventore fuga, distinctio voluptates ex aliquam
          modi? Dicta, dolorum incidunt!
        </AccordionItem>
        <AccordionItem
          titleComponent={
            <Radio
              option={{
                label: 'I42.1 — Obstructive hypertrophic cadiomyopathy',
                value: 'obstructive',
              }}
              selectedValue={selectedValue}
              onClick={(event) => handleRadioChange(event.value)}
              stopPropagation
            />
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          porro, necessitatibus alias asperiores, recusandae debitis ut fugiat
          similique rerum a id optio cumque, quos illum? Earum odio voluptas
          reiciendis explicabo.
        </AccordionItem>

        <AccordionItem
          titleComponent={
            <Radio
              option={{
                label: 'I42.9 — Cardiomyopathy, unspecified',
                value: 'unspecified',
              }}
              selectedValue={selectedValue}
              onClick={(event) => handleRadioChange(event.value)}
              stopPropagation
            />
          }
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
          molestiae corporis suscipit placeat repudiandae recusandae pariatur
          minima, unde voluptate dignissimos tenetur est soluta fugit? Veritatis
          vitae quos accusamus libero enim.
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

function CustomTitlesCheckboxDisplay(args: Story['args']) {
  const [selectedValue, setSelectedValue] = useState<{
    [key: string]: boolean;
  }>({});

  const handleChange = (name: string, value: boolean) => {
    setSelectedValue({ ...selectedValue, [name]: value });
  };
  return (
    <Box display='flex' flexDirection='column' gap={12}>
      <Box as='p'>
        This acoordion has spacing between the accordion items and the title is
        a checkbox component
      </Box>
      <Accordion spacing={4} {...args}>
        <AccordionItem
          titleComponent={
            <Checkbox
              label='I97.3	— Postprocedural hypertension'
              name='hypertension'
              onChange={(value) => handleChange('hypertension', value)}
              checked={selectedValue['hypertension']}
            />
          }
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          deleniti sequi, quis numquam, corrupti debitis laboriosam quasi magnam
          mollitia, sint commodi cupiditate ipsa corporis? Omnis eligendi
          accusamus obcaecati voluptate vitae.
        </AccordionItem>
        <AccordionItem
          titleComponent={
            <Checkbox
              label='None, reject all codes'
              name='rejactall'
              onChange={(value) => handleChange('rejactall', value)}
              checked={selectedValue['rejactall']}
            />
          }
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          mollitia soluta quidem dignissimos rem doloribus animi alias eius.
          Numquam dignissimos inventore fuga, distinctio voluptates ex aliquam
          modi? Dicta, dolorum incidunt!
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

function LeadingExpandSection(args: Story['args']) {
  return (
    <Accordion {...args}>
      <AccordionItem
        title='Section 1'
        leadingExpandSection={
          <Chip variant='success' size='small'>
            Accepted
          </Chip>
        }
      >
        This is the content of Section 1.
      </AccordionItem>
      <AccordionItem title='Section 2'>
        This is the content of Section 2.
      </AccordionItem>
      <AccordionItem title='Section 3'>
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

function WithDisabledToggleRender(args: Story['args']) {
  return (
    <Accordion {...args}>
      <AccordionItem title='Section 1' disableToggle>
        This is the content of Section 1.
      </AccordionItem>
      <AccordionItem title='Section 2'>
        This is the content of Section 2.
      </AccordionItem>
      <AccordionItem title='Section 3'>
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

function WithErrorAccordion(args: Story['args']) {
  return (
    <Accordion {...args}>
      <AccordionItem
        title='E11.51'
        subTitle='Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene'
        titleFooter='Reconfirmation'
        leadingExpandSection={
          <Chip variant='warning' size='small'>
            Incomplete
          </Chip>
        }
        errorText='Last update failed. Please try again.'
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
        leadingExpandSection={
          <Chip variant='error' size='small'>
            Rejected
          </Chip>
        }
      >
        <Box padding={12}>This is the content of the second section</Box>
      </AccordionItem>
      <AccordionItem
        title='E11.59'
        subTitle='Type 2 diabetes mellitus with other circulatory complications'
        titleFooter='Clinical Inference'
        leadingExpandSection={
          <Chip variant='error' size='small'>
            Rejected
          </Chip>
        }
      >
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};

export const IconWithTitle: Story = {
  args: {},
  render: CustomTitleIcon,
};

export const ExpandIcon: Story = {
  args: {},
  render: CustomExpandIcon,
};

export const RadioTitles: Story = {
  args: {},
  render: CustomTitlesRadioDisplay,
};

export const CheckboxTitles: Story = {
  args: {},
  render: CustomTitlesCheckboxDisplay,
};

export const WithLeadingExpandSection: Story = {
  args: {},
  render: LeadingExpandSection,
};

export const WithDisabledToggle: Story = {
  args: {},
  render: WithDisabledToggleRender,
};

export const WithError: Story = {
  args: {},
  render: WithErrorAccordion,
};
