import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link data-testid="home-link" to="/">
          Dashboard
        </Link>
        <Link data-testid="favorites-link" to="/favorites">
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
