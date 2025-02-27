import { UnknownObject } from './UnknownObject.js';

type FormComponentProps<ComponentValue, ComponentProps> = {
  id: string;
  onChange: (value?: ComponentValue) => void;
  value?: ComponentValue;
} & Omit<Omit<ComponentProps, 'onChange'>, 'value'>;

type FormComponent<ComponentValue, ComponentProps extends UnknownObject | undefined | null = undefined> = {
  id: string;
  render: (props: FormComponentProps<ComponentValue, ComponentProps>) => JSX.Element;
};

export { FormComponent, FormComponentProps };
