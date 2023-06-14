import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TV from './TV';
import './css/footer.css';
import './css/playerRadio.css';
import './css/style.css';
import './css/reset.css';
import Promocoes from './Promocoes';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tv" element={<TV />} />
        <Route path="promocoes" element={<Promocoes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
