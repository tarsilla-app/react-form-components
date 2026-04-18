import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { TextArea } from '../src/textarea/TextArea.js';

vi.mock('@tarsilla/react-components/textarea', () => ({
  TextArea: ({ id, onChange, value }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea data-testid='textarea' id={id} onChange={onChange} readOnly={!onChange} value={value ?? ''} />
  ),
}));

describe('TextArea', () => {
  test('has id "textarea"', () => {
    expect(TextArea.id).toBe('textarea');
  });

  test('renders without crashing', () => {
    render(<TextArea.render id='textarea' onChange={vi.fn()} />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
  });

  test('renders with a given value', () => {
    render(<TextArea.render id='textarea' onChange={vi.fn()} value='initial text' />);
    expect(screen.getByTestId('textarea')).toHaveValue('initial text');
  });

  test('calls onChange with the string value extracted from the change event', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<TextArea.render id='textarea' onChange={onChange} value='' />);
    await user.type(screen.getByTestId('textarea'), 'b');
    expect(onChange).toHaveBeenCalledWith('b');
  });
});
