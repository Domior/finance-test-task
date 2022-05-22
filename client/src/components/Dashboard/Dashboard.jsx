import React from 'react';

import TickersList from '../../components/TickersList';

import styles from './Dashboard.module.scss';

const fields = [
  'Ticker',
  'Exchange',
  'Price, $',
  'Change, $',
  'Change, %',
  'Dividend, %',
  'Yield, %',
  'Last trade time',
];

const Dashboard = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {fields.map((title, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TickersList items={items} />
      </tbody>
    </table>
  );
};

export default Dashboard;
