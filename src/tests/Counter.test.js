// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const message = screen.getByText(/Counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterVal = screen.getByText(/0/i);
  expect(counterVal).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const increment = screen.getByText('+');
  fireEvent.click(increment);
  const counterVal = screen.getByText(/1/i);
  expect(counterVal).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByText('-');
  fireEvent.click(decrement);
  const counterVal = screen.getByText(/-1/i);
  expect(counterVal).toBeInTheDocument();
});
