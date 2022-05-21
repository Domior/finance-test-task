import { combineReducers } from 'redux';

import { tickersReducer } from './tickersReducer';

export const rootReducer = combineReducers({
  tickers: tickersReducer,
});
