import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const advent = screen.getByText(/advent of code/i);
  expect(advent).toBeInTheDocument();
});
