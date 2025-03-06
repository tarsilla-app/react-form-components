/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '../src/textarea/index.js';

const TextAreaStory = ({ value, ...rest }: any) => {
  const [_value, _setValue] = useState(value);

  return (
    <TextArea.render
      onChange={(value) => {
        _setValue(value);
        console.log(value);
      }}
      {...rest}
      value={_value}
    />
  );
};

const meta: Meta<typeof TextAreaStory> = {
  title: 'TextArea',
  component: TextAreaStory,
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
