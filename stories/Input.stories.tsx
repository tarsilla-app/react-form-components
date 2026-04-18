import type { Meta, StoryObj } from '@storybook/react-vite';

import { JSX, useState } from 'react';

import { Input, InputProps } from '../src/input/index.js';

const InputStory = ({ onChange, value: _value, ...rest }: InputProps): JSX.Element => {
  const [value, setValue] = useState(_value);

  return (
    <Input.render
      onChange={(value) => {
        setValue(value);
        onChange(value);
      }}
      value={value}
      {...rest}
    />
  );
};

const meta: Meta<typeof InputStory> = {
  args: {},
  argTypes: {},
  component: InputStory,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Input',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Tarsilla',
  },
};

export const Debounce: Story = {
  args: {
    debounceWait: 2000,
    value: 'Tarsilla',
  },
};
