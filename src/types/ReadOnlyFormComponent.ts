import { JSX } from 'react';

import { UnknownObject } from './UnknownObject.js';

type ReadOnlyFormComponentProps<ComponentValue, ComponentProps> = {
  id: string;
  value?: ComponentValue;
} & Omit<ComponentProps, 'value'>;

type ReadOnlyFormComponent<ComponentValue, ComponentProps extends UnknownObject | undefined | null = undefined> = {
  id: string;
  render: (props: ReadOnlyFormComponentProps<ComponentValue, ComponentProps>) => JSX.Element;
};

export { type ReadOnlyFormComponent, type ReadOnlyFormComponentProps };
