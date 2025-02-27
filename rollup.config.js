import { rollupReactConfig } from '@tarsilla/rollup-config/react';

export default [
  ...rollupReactConfig(),
  ...rollupReactConfig({ folder: 'select' }),
  ...rollupReactConfig({ folder: 'tab' }),
  ...rollupReactConfig({ folder: 'text' }),
  ...rollupReactConfig({ folder: 'textarea' }),
];
