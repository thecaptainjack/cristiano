// src/App.js

import React, { useEffect } from 'react';   
import AOS from 'aos';  

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Brands from './components/Brands';
import Musiem from './components/Musiem';
import Partners from './components/Partners';
import Carrier from './components/Carrier';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration in ms
      once: false,      // animate every time you scroll
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/muesiem" element={<Musiem />} />
        <Route path="/carrier" element={<Carrier />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </Router>
  );
}

export default App;
