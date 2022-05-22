import React from 'react';
import { socket } from '../../services/socket-api';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  StarOutlined,
  StarFilled,
} from '@ant-design/icons';

import { setColorIndicator } from '../../utils/utils';

const TickersItem = ({ ticker }) => {
  const onAddToFavorites = item => () => {
    socket.emit(item.is_favorite ? 'remove-favorite' : 'add-favorite', item.ticker);
  };

  const setChange = price => {
    return price > 0 ? (
      <>
        {price} <ArrowUpOutlined />
      </>
    ) : (
      <>
        {price.substring(1)}
        <ArrowDownOutlined />
      </>
    );
  };

  return (
    <tr>
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
        <div onClick={onAddToFavorites(ticker)}>
          {ticker.is_favorite ? <StarFilled /> : <StarOutlined />}
        </div>
      </td>
    </tr>
  );
};

export default TickersItem;
