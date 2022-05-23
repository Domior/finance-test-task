import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TickerItem from './TickersItem';

const ticker = {
  ticker: 'AAPL',
  exchange: 'NASDAQ',
  price: 232.79,
  change: 34.58,
  change_percent: 0.91,
  dividend: 0.63,
  yield: 1.68,
  last_trade_time: '22.05.2022, 23:00:05',
};

const favs = new Set();

describe('TickerItem component', () => {
  it('renders TickerItem', () => {
    render(
      <table>
        <tbody>
          <TickerItem ticker={ticker} />
        </tbody>
      </table>,
    );

    expect(screen.getByText(/aapl/i)).toBeInTheDocument();
    expect(screen.getByText(/nasdaq/i)).toBeInTheDocument();
    expect(screen.getByText(/22.05.2022/i)).toBeInTheDocument();
  });

  it('favorite click', async () => {
    const handleClick = ticker => {
      favs.has(ticker) ? favs.delete(ticker) : favs.add(ticker);
    };
    render(
      <table>
        <tbody>
          <TickerItem ticker={ticker} onAddToFavorites={handleClick} />
        </tbody>
      </table>,
    );

    const button = screen.getByTestId('button');
    expect(button).not.toBeDisabled();

    userEvent.click(button);
    await expect(favs.size).toBe(1);

    userEvent.click(button);
    await expect(favs.size).toBe(0);
  });
});
