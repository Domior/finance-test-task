import { SET_FAVORITES } from '../constants/actionsTypes';

export const fetchFavorites = socket => dispatch => {
  socket.on('favorite', data => dispatch(setFavorites(data)));
};

export const setFavorites = items => ({
  type: SET_FAVORITES,
  payload: items,
});
