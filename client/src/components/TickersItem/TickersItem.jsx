import React from 'react';

import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  StarOutlined,
  StarFilled,
} from '@ant-design/icons';

import { setColorIndicator } from '../../utils/utils';

const TickersItem = ({ ticker, onAddToFavorites }) => {
  const handleOnAddToFavorites = () => {
    onAddToFavorites(ticker);
  };

  const setChange = price => {
    return price > 0 ? (
      <>
        {price} <ArrowUpOutlined />
      </>
    ) : (
      <>
        {price?.substring(1)}
        <ArrowDownOutlined />
      </>
    );
  };

  return (
    <tr data-testid="ticker-row">
      <td>{ticker.ticker}</td>
      <td>{ticker.exchange}</td>
      <td>${ticker.price}</td>
      <td className={setColorIndicator(ticker.change)}>{setChange(ticker.change)}</td>
      <td className={setColorIndicator(ticker.change)}>
        {setChange(ticker.change_percent)}
      </td>
      <td>{ticker.dividend}</td>
      <td>{ticker.yield}</td>
      <td>{ticker.last_trade_time}</td>
      <td>
        <div data-testid="button" onClick={handleOnAddToFavorites}>
          {ticker.is_favorite ? <StarFilled /> : <StarOutlined />}
        </div>
      </td>
    </tr>
  );
};

export default TickersItem;
