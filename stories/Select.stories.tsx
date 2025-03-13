import { JSX, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Select, SelectProps } from '../src/select/index.js';

const SelectStory = ({ onChange, value, ...rest }: SelectProps): JSX.Element => {
  const [_value, _setValue] = useState(value);

  return (
    <Select.render
      onChange={(value) => {
        _setValue(value);
        onChange(value);
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
  },
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '1',
  },
};

export const Debounce: Story = {
  args: {
    value: '1',
    debounceWait: 2000,
  },
};
