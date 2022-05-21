import React from 'react';
import { useSelector } from 'react-redux';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import { calcPercentage, setColorIndicator } from '../../utils/utils';

import styles from './TickersDashboard.module.scss';

export const TickersDashboard = () => {
  const tickers = useSelector(({ tickers }) => tickers.items);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Exchange</th>
          <th>Price, $</th>
          <th>Change, $</th>
          <th>Change, %</th>
          <th>Dividend, %</th>
          <th>Yield, %</th>
          <th>Last trade time</th>
        </tr>
      </thead>
      <tbody>
        {tickers &&
          tickers.map(el => (
            <tr key={el.ticker}>
              <td>{el.ticker}</td>
              <td>{el.exchange}</td>
              <td>${el.price}</td>
              <td className={setColorIndicator(el.change)}>
                {el.change > 0 ? (
                  <>
                    {el.change} <ArrowUpOutlined />
                  </>
                ) : (
                  <>
                    {el.change.substring(1)}
                    <ArrowDownOutlined />
                  </>
                )}
              </td>
              <td className={setColorIndicator(el.change)}>
                {calcPercentage(el.price, el.change)}
                {el.change > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              </td>
              <td>{el.dividend}</td>
              <td>{el.yield}</td>
              <td>{el.last_trade_time}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
