import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

test('renders homepage content', () => {
  render(
      <App />
  );
  const headingElement = screen.getByText(/Innovative/i);
  expect(headingElement).toBeInTheDocument();
});