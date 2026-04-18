import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { Label } from '../src/label/Label.js';

vi.mock('@tarsilla/react-components/label', () => ({
  Label: ({ id, value }: { id: string; value?: string }) => (
    <span data-testid='label' id={id}>
      {value}
    </span>
  ),
}));

describe('Label', () => {
  test('has id "label"', () => {
    expect(Label.id).toBe('label');
  });

  test('renders without crashing', () => {
    render(<Label.render id='label' />);
    expect(screen.getByTestId('label')).toBeInTheDocument();
  });

  test('renders the given value', () => {
    render(<Label.render id='label' value='Hello World' />);
    expect(screen.getByTestId('label')).toHaveTextContent('Hello World');
  });

  test('renders with the given id', () => {
    render(<Label.render id='label' />);
    expect(screen.getByTestId('label')).toHaveAttribute('id', 'label');
  });
});
