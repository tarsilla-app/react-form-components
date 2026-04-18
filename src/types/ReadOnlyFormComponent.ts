import { JSX } from 'react';

type ReadOnlyFormComponent<ComponentValue, ComponentProps extends object | undefined = undefined> = {
  id: string;
  render: (props: ReadOnlyFormComponentProps<ComponentValue, ComponentProps>) => JSX.Element;
};

type ReadOnlyFormComponentProps<ComponentValue, ComponentProps> = {
  id: string;
  value?: ComponentValue;
} & Omit<ComponentProps, 'value'>;

export { type ReadOnlyFormComponent, type ReadOnlyFormComponentProps };
