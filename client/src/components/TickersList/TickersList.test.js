import { screen, render } from '@testing-library/react';

import TickersList from './TickersList';

const emptyItems = [];

const items = [
  { ticker: 'AAPL', exchange: 'NASDAQ' },
  { ticker: 'FB', exchange: 'NASDAQ' },
  { ticker: 'TSLA', exchange: 'NASDAQ' },
];

describe('TickersList component', () => {
  it('renders TickersList with items', () => {
    render(
      <table>
        <tbody>
          <TickersList items={items} />
        </tbody>
      </table>,
    );

    const tickers = screen.getAllByTestId('ticker-row');
    expect(tickers.length).toBe(3);
  });

  it('renders TickersList without items', () => {
    render(
      <table>
        <tbody>
          <TickersList items={emptyItems} />
        </tbody>
      </table>,
    );

    const tickers = screen.queryAllByTestId('ticker-row');
    expect(tickers.length).toBe(0);
  });
});
