import { rollupReactConfig } from '@tarsilla/rollup-config/react';

export default [
  ...rollupReactConfig({
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: [
      '@tarsilla/react-components/input',
      '@tarsilla/react-components/label',
      '@tarsilla/react-components/select',
      '@tarsilla/react-components/textarea',
    ],
  }),
  ...rollupReactConfig({
    folder: 'input',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: ['@tarsilla/react-components/input'],
  }),
  ...rollupReactConfig({
    folder: 'label',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: ['@tarsilla/react-components/label'],
  }),
  ...rollupReactConfig({
    folder: 'select',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: ['@tarsilla/react-components/select'],
  }),
  ...rollupReactConfig({
    folder: 'textarea',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: ['@tarsilla/react-components/textarea'],
  }),
];
