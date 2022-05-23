import { screen, render } from '@testing-library/react';

import Dashboard from './Dashboard';

describe('Dashboard component', () => {
  it('renders Dashboard', () => {
    render(<Dashboard />);

    expect(screen.getByText(/ticker/i)).toBeInTheDocument();
    expect(screen.getByText(/exchange/i)).toBeInTheDocument();
    expect(screen.getByText(/price/i)).toBeInTheDocument();
  });
});
