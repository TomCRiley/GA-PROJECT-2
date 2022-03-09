import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import DailyHoroscope from './components/DailyHoroscope';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DailyHoroscope' element={<DailyHoroscope />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
