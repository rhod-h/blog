import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './app';

test('Test app does not blow up', () => {
  render(<App />);

  expect(screen.getByText('Rhodri Hewitson')).toBeInTheDocument();
});
