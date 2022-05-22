import React from 'react';

import TickersItem from '../TickersItem';

const TickersList = ({ items }) => {
  return (
    <>
      {items?.map(el => (
        <TickersItem key={el.ticker} ticker={el} />
      ))}
    </>
  );
};

export default TickersList;
