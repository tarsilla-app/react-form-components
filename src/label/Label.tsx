import { Label as ReactLabel, LabelProps as ReactLabelProps } from '@tarsilla/react-components/label';

import { ReadOnlyFormComponent, ReadOnlyFormComponentProps } from '@types';

type LabelProps = ReadOnlyFormComponentProps<string, ReactLabelProps>;

const Label: ReadOnlyFormComponent<string, ReactLabelProps> = {
  id: 'label',
  render: (props) => {
    return <ReactLabel {...props} />;
  },
};

export { Label, type LabelProps };
