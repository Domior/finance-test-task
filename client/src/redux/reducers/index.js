import { combineReducers } from 'redux';

import { tickersReducer } from './tickersReducer';
import { favoritesReducer } from './favoritesReducer';

export const rootReducer = combineReducers({
  tickers: tickersReducer,
  favorites: favoritesReducer,
});
