import React from 'react';

import { useDispatch } from 'react-redux';

import { socket } from '../services/socket-api';
import { fetchTickers } from '../redux/actions/tickersAction';

import { TickersDashboard } from '../components';

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    socket.emit('start');
    dispatch(fetchTickers(socket));
    return socket.disconnect;
  }, [dispatch]);

  return (
    <>
      <TickersDashboard />
    </>
  );
};

export default Home;
