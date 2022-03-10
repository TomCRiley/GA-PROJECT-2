import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import HoroscopeCard from './components/HoroscopeCard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/horoscope/:name" element={<HoroscopeCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
