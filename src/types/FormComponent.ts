import { JSX } from 'react';

type FormComponent<ComponentValue, ComponentProps extends object | undefined = undefined> = {
  id: string;
  render: (props: FormComponentProps<ComponentValue, ComponentProps>) => JSX.Element;
};

type FormComponentProps<ComponentValue, ComponentProps> = {
  id: string;
  onChange: (value?: ComponentValue) => void;
  value?: ComponentValue;
} & Omit<Omit<ComponentProps, 'onChange'>, 'value'>;

export { type FormComponent, type FormComponentProps };
