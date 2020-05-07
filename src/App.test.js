import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn more link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Learn More About Indicio.tech');
  expect(linkElement).toBeInTheDocument();
});
