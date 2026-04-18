import type { Meta, StoryObj } from '@storybook/react-vite';

import { JSX, useState } from 'react';

import { Select, SelectProps } from '../src/select/index.js';

const SelectStory = ({ onChange, value: _value, ...rest }: SelectProps): JSX.Element => {
  const [value, setValue] = useState(_value);

  return (
    <Select.render
      onChange={(value) => {
        setValue(value);
        onChange(value);
      }}
      {...rest}
      value={value}
    />
  );
};

const meta: Meta<typeof SelectStory> = {
  args: {
    options: [
      {
        label: 'option 1',
        value: '1',
      },
      {
        isDisabled: true,
        label: 'option 2',
        value: '2',
      },
      {
        label: 'Group',
        options: [
          {
            label: 'option 3',
            value: '3',
          },
          {
            isDisabled: true,
            label: 'option 4',
            value: '4',
          },
        ],
      },
    ],
  },
  argTypes: {},
  component: SelectStory,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Select',
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
    debounceWait: 2000,
    value: '1',
  },
};
