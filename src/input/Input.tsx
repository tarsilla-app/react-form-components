import { Input as ReactInput, InputProps as ReactInputProps } from '@tarsilla/react-components/input';

import { FormComponent, FormComponentProps } from '@types';

type InputProps = FormComponentProps<string, ReactInputProps>;

const Input: FormComponent<string, ReactInputProps> = {
  id: 'input',
  render: ({ onChange, ...rest }) => {
    return <ReactInput onChange={({ target: { value } }) => onChange(value)} {...rest} />;
  },
};

export { Input, type InputProps };
