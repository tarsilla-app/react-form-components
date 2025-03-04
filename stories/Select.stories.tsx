/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '../src/select/index.js';

const SelectStory = ({ value, ...rest }: any) => {
  const [_value, _setValue] = useState(value);

  return (
    <Select.render
      onChange={(value) => {
        _setValue(value);
        console.log(value);
      }}
      {...rest}
      value={_value}
    />
  );
};

const meta: Meta<typeof SelectStory> = {
  title: 'Select',
  component: SelectStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (Story: any, { args }: any): JSX.Element => {
      return <Story args={args} />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        label: 'option 1',
        value: '1',
      },
      {
        label: 'option 2',
        value: '2',
        isDisabled: true,
      },
      {
        label: 'Group',
        options: [
          {
            label: 'option 3',
            value: '3',
          },
          {
            label: 'option 4',
            value: '4',
            isDisabled: true,
          },
        ],
      },
    ],
    value: '1',
    debounceWait: undefined,
  },
};

export const Debounce: Story = {
  args: {
    options: [
      {
        label: 'option 1',
        value: '1',
      },
      {
        label: 'option 2',
        value: '2',
        isDisabled: true,
      },
      {
        label: 'Group',
        options: [
          {
            label: 'option 3',
            value: '3',
          },
          {
            label: 'option 4',
            value: '4',
            isDisabled: true,
          },
        ],
      },
    ],
    value: '1',
    debounceWait: 2000,
  },
};
