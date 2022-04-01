import App from './App';
import { prime } from './App'; 
import { render, screen } from '@testing-library/react';
// application load test
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Submit/i);
  expect(linkElement).toBeInTheDocument();
});
// functional test
test('should return prime number', () => {
  expect(prime(5)).toBe(3)
});

test('should not a string', () => {
  expect(prime('string')).toBeNaN();
})

test('should not a object', () => {
  expect(prime('object')).toBeNaN();
})