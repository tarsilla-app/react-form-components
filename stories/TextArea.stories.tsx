import { JSX, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TextArea, TextAreaProps } from '../src/textarea/index.js';

const TextAreaStory = ({ onChange, value, ...rest }: TextAreaProps): JSX.Element => {
  const [_value, _setValue] = useState(value);

  return (
    <TextArea.render
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
