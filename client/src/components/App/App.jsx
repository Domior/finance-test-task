import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchTickers } from '../../redux/actions/tickersAction';
import { fetchFavorites } from '../../redux/actions/favoritesAction';

import { socket } from '../../services/socket-api';

import AppRouter from './AppRouter';
import Header from '../../components/Header';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTickers(socket));
    dispatch(fetchFavorites(socket));
  }, [dispatch]);

  React.useEffect(() => {
    socket.emit('start');

    return socket.disconnect;
  }, []);

  return (
    <div className="content">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
