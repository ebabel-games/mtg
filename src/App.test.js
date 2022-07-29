import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Magic the Gathering Database app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Magic the Gathering Database/i);
  expect(linkElement).toBeInTheDocument();
});
