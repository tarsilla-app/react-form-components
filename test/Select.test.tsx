import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { Select } from '../src/select/Select.js';

const defaultSelectOptions: { label: string; value: string }[] = [];

vi.mock('@tarsilla/react-components/select', () => ({
  Select: ({
    id,
    onChange,
    options = defaultSelectOptions,
    value,
  }: {
    id?: string;
    onChange?: (value: string | undefined) => void;
    options?: { label: string; value: string }[];
    value?: string;
  }) => (
    <select data-testid='select' id={id} onChange={(e) => onChange?.(e.target.value || undefined)} value={value ?? ''}>
      <option value=''>-- select --</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  ),
}));

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

describe('Select', () => {
  test('has id "select"', () => {
    expect(Select.id).toBe('select');
  });

  test('renders without crashing', () => {
    render(<Select.render id='select' onChange={vi.fn()} options={[]} />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  test('renders options', () => {
    render(<Select.render id='select' onChange={vi.fn()} options={options} />);
    expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option 2' })).toBeInTheDocument();
  });

  test('renders with a given value', () => {
    render(<Select.render id='select' onChange={vi.fn()} options={options} value='1' />);
    expect(screen.getByTestId('select')).toHaveValue('1');
  });

  test('calls onChange when the user selects an option', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Select.render id='select' onChange={onChange} options={options} value='' />);
    await user.selectOptions(screen.getByTestId('select'), '2');
    expect(onChange).toHaveBeenCalledWith('2');
  });
});
