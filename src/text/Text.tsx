import { Text as ReactText, TextProps as ReactTextProps } from '@tarsilla/react-components/text';

import { FormComponent, FormComponentProps } from '@types';

type TextProps = FormComponentProps<string, ReactTextProps>;

const Text: FormComponent<string, ReactTextProps> = {
  id: 'text',
  render: ({ onChange, ...rest }) => <ReactText onChange={({ target: { value } }) => onChange(value)} {...rest} />,
};

export { Text, TextProps };
