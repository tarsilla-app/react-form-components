import { rollupReactConfig } from '@tarsilla/rollup-config/react';

export default [
  ...rollupReactConfig({
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: [
      '@tarsilla/react-components/select',
      '@tarsilla/react-components/text',
      '@tarsilla/react-components/textarea',
    ],
  }),
  ...rollupReactConfig({
    folder: 'select',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: [
      '@tarsilla/react-components/select',
      '@tarsilla/react-components/text',
      '@tarsilla/react-components/textarea',
    ],
  }),
  ...rollupReactConfig({
    folder: 'text',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: [
      '@tarsilla/react-components/select',
      '@tarsilla/react-components/text',
      '@tarsilla/react-components/textarea',
    ],
  }),
  ...rollupReactConfig({
    folder: 'textarea',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: [
      '@tarsilla/react-components/select',
      '@tarsilla/react-components/text',
      '@tarsilla/react-components/textarea',
    ],
  }),
];
