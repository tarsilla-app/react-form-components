import { TextArea as ReactAreaText, TextAreaProps as ReactTextAreaProps } from '@tarsilla/react-components/textarea';

import { FormComponent, FormComponentProps } from '@types';

type TextAreaProps = FormComponentProps<string, ReactTextAreaProps>;

const TextArea: FormComponent<string, ReactTextAreaProps> = {
  id: 'textarea',
  render: ({ onChange, ...rest }) => <ReactAreaText onChange={({ target: { value } }) => onChange(value)} {...rest} />,
};

export { TextArea, type TextAreaProps };
