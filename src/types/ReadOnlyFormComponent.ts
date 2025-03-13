import { JSX } from 'react';

type ReadOnlyFormComponentProps<ComponentValue, ComponentProps> = {
  id: string;
  value?: ComponentValue;
} & Omit<ComponentProps, 'value'>;

type ReadOnlyFormComponent<ComponentValue, ComponentProps extends object | undefined = undefined> = {
  id: string;
  render: (props: ReadOnlyFormComponentProps<ComponentValue, ComponentProps>) => JSX.Element;
};

export { type ReadOnlyFormComponent, type ReadOnlyFormComponentProps };
