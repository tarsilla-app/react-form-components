import { JSX } from 'react';

type FormComponentProps<ComponentValue, ComponentProps> = {
  id: string;
  value?: ComponentValue;
  onChange: (value?: ComponentValue) => void;
} & Omit<Omit<ComponentProps, 'onChange'>, 'value'>;

type FormComponent<ComponentValue, ComponentProps extends object | undefined = undefined> = {
  id: string;
  render: (props: FormComponentProps<ComponentValue, ComponentProps>) => JSX.Element;
};

export { type FormComponent, type FormComponentProps };
