import React from 'react'
import { render, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing"), function() {
  render(<NewTodoForm />)
}

it("Can change data"), function() {
  const {asFragment, queryByTestId} = render(<NewTodoForm />);
  const todoText = asFragment.queryByTestId('todoText')

  
};
