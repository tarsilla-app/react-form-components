import type { Meta, StoryObj } from '@storybook/react-vite';

import { JSX } from 'react';

import { Label, LabelProps } from '../src/label/index.js';

const LabelStory = ({ value, ...rest }: LabelProps): JSX.Element => {
  return <Label.render {...rest} value={value} />;
};

const meta: Meta<typeof LabelStory> = {
  args: {},
  argTypes: {},
  component: LabelStory,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Label',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Tarsilla',
  },
};
