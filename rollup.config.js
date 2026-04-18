import { rollupReactConfig } from '@tarsilla/rollup-config/react';

export default [
  ...rollupReactConfig({
    external: [
      '@tarsilla/react-components/input',
      '@tarsilla/react-components/label',
      '@tarsilla/react-components/select',
      '@tarsilla/react-components/textarea',
    ],
    paths: {
      '@types': ['./src/types/index.ts'],
    },
  }),
  ...rollupReactConfig({
    external: ['@tarsilla/react-components/input'],
    folder: 'input',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
  }),
  ...rollupReactConfig({
    external: ['@tarsilla/react-components/label'],
    folder: 'label',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
  }),
  ...rollupReactConfig({
    external: ['@tarsilla/react-components/select'],
    folder: 'select',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
  }),
  ...rollupReactConfig({
    external: ['@tarsilla/react-components/textarea'],
    folder: 'textarea',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
  }),
];
