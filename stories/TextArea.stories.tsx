import type { Meta, StoryObj } from '@storybook/react-vite';

import { JSX, useState } from 'react';

import { TextArea, TextAreaProps } from '../src/textarea/index.js';

const TextAreaStory = ({ onChange, value: _value, ...rest }: TextAreaProps): JSX.Element => {
  const [value, setValue] = useState(_value);

  return (
    <TextArea.render
      onChange={(value) => {
        setValue(value);
        onChange(value);
      }}
      {...rest}
      value={value}
    />
  );
};

const meta: Meta<typeof TextAreaStory> = {
  args: {},
  argTypes: {},
  component: TextAreaStory,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'TextArea',
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
