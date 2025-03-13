import { JSX, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from '../src/input/index.js';

const InputStory = ({ onChange, value, ...rest }: InputProps): JSX.Element => {
  const [_value, _setValue] = useState(value);

  return (
    <Input.render
      onChange={(value) => {
        _setValue(value);
        onChange(value);
        console.log(value);
      }}
      value={_value}
      {...rest}
    />
  );
};

const meta: Meta<typeof InputStory> = {
  title: 'Input',
  component: InputStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [],
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
    value: 'Tarsilla',
    debounceWait: 2000,
  },
};
