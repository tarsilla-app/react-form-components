/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../src/input/index.js';

const InputStory = ({ value, ...rest }: any) => {
  const [_value, _setValue] = useState(value);

  return (
    <Input.render
      onChange={(value) => {
        _setValue(value);
        console.log(value);
      }}
      {...rest}
      value={_value}
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
