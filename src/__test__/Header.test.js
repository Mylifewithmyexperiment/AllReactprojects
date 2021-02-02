import React from 'react';
import Header from '../components/Header/Header';
import { render } from 'react-testing-library'


it('renders header text correctly', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('header-display').textContent).toBe('Shopping Cart');
});