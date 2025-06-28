import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents />', () => {
  test('renders a number textbox', () => {
    render(<NumberOfEvents />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('has default value of 32', () => {
    render(<NumberOfEvents />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(32);
  });

  test('updates value when user types', async () => {
    render(<NumberOfEvents />);
    const input = screen.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, '10');
    expect(input).toHaveValue(10);
  });
});
