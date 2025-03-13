import { JSX, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Label, LabelProps } from '../src/label/index.js';

const LabelStory = ({ value, ...rest }: LabelProps): JSX.Element => {
  const [_value, _setValue] = useState(value);

  return <Label.render {...rest} value={_value} />;
};

const meta: Meta<typeof LabelStory> = {
  title: 'Label',
  component: LabelStory,
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
