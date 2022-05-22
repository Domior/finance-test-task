import React from 'react';
import { useSelector } from 'react-redux';

import Dashboard from '../components/Dashboard';

export const Home = () => {
  const tickers = useSelector(({ tickers }) => tickers.items);

  return (
    <div data-testid="home-page">
      <Dashboard items={tickers} />
    </div>
  );
};
