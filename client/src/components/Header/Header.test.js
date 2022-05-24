import { screen } from '@testing-library/react';

import { renderTestApp } from '../../helpers/test/renderTestApp';

import Header from './Header';

describe('Header component', () => {
  it('renders links', () => {
    renderTestApp(<Header />);

    const favoritesLink = screen.getByTestId('favorites-link');
    const homeLink = screen.getByTestId('home-link');

    expect(favoritesLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });
});
