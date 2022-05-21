import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
