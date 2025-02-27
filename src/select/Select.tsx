import { Option, Select as ReactSelect, SelectProps as ReactSelectProps } from '@tarsilla/react-components/select';

import { FormComponent, FormComponentProps } from '@types';

type SelectProps = FormComponentProps<string, ReactSelectProps<Option>>;

const Select: FormComponent<string | string[], ReactSelectProps<Option>> = {
  id: 'select',
  render: (props) => <ReactSelect {...props} />,
};

export { Select, SelectProps };
