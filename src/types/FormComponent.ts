import { JSX } from 'react';

import { UnknownObject } from './UnknownObject.js';

type FormComponentProps<ComponentValue, ComponentProps> = {
  id: string;
  value?: ComponentValue;
  onChange: (value?: ComponentValue) => void;
} & Omit<Omit<ComponentProps, 'onChange'>, 'value'>;

type FormComponent<ComponentValue, ComponentProps extends UnknownObject | undefined | null = undefined> = {
  id: string;
  render: (props: FormComponentProps<ComponentValue, ComponentProps>) => JSX.Element;
};

export { type FormComponent, type FormComponentProps };
