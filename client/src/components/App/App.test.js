import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderTestApp } from '../../helpers/renderTestApp';

import App from './App';

describe('App component', () => {
  it('renders App component', () => {
    renderTestApp(<App />);
    screen.debug();
  });

  it('routes links', () => {
    renderTestApp(<App />);

    const favoritesLink = screen.getByTestId('favorites-link');
    const homeLink = screen.getByTestId('home-link');

    userEvent.click(favoritesLink);
    expect(screen.getByTestId('favorites-page')).toBeInTheDocument();

    userEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
