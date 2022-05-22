import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchTickers } from '../../redux/actions/tickersAction';
import { fetchFavorites } from '../../redux/actions/favoritesAction';

import { routesConfig } from '../../routes/routesConfig';
import { socket } from '../../services/socket-api';

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
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
