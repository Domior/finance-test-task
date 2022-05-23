import React from 'react';
import { socket } from '../../services/socket-api';

import TickersItem from '../TickersItem';

const TickersList = ({ items }) => {
  const onAddToFavorites = item => {
    socket.emit(item.is_favorite ? 'remove-favorite' : 'add-favorite', item.ticker);
  };
  return (
    <>
      {items?.map(el => (
        <TickersItem key={el.ticker} ticker={el} onAddToFavorites={onAddToFavorites} />
      ))}
    </>
  );
};

export default TickersList;
