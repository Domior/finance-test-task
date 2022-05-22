import { SET_TICKERS } from '../constants/actionsTypes';

export const fetchTickers = socket => dispatch => {
  socket.on('ticker', data => dispatch(setTickers(data)));
};

export const setTickers = items => ({
  type: SET_TICKERS,
  payload: items,
});
