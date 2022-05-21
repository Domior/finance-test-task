import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Dashboard </Link>
      </nav>
      <Link to="/">Log In</Link>
    </header>
  );
};
