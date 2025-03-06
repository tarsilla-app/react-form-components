/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../src/label/index.js';

const LabelStory = ({ value, ...rest }: any) => {
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
