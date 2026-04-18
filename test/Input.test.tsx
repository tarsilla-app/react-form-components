import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { Input } from '../src/input/Input.js';

vi.mock('@tarsilla/react-components/input', () => ({
  Input: ({ id, onChange, value }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input data-testid='input' id={id} onChange={onChange} readOnly={!onChange} value={value ?? ''} />
  ),
}));

describe('Input', () => {
  test('has id "input"', () => {
    expect(Input.id).toBe('input');
  });

  test('renders without crashing', () => {
    render(<Input.render id='input' onChange={vi.fn()} />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  test('renders with a given value', () => {
    render(<Input.render id='input' onChange={vi.fn()} value='hello' />);
    expect(screen.getByTestId('input')).toHaveValue('hello');
  });

  test('calls onChange with the string value extracted from the change event', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Input.render id='input' onChange={onChange} value='' />);
    await user.type(screen.getByTestId('input'), 'a');
    expect(onChange).toHaveBeenCalledWith('a');
  });
});
