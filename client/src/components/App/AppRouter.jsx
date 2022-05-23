import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { routesConfig } from '../../routes/routesConfig';

const AppRouter = () => {
  return (
    <Routes>
      {routesConfig.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
