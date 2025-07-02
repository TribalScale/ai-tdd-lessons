import { App } from '../../App'
import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a greeting message', () => {
  render(<App name="World" />);
  const greeting = screen.getByText(/Hello, World!/i);
  expect(greeting).toBeInTheDocument();
});