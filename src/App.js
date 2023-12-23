import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Segunda from './Pages/Segunda';

const App = () => {
  return (
    <Router>
      teste
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pages" element={<Segunda />} />
      </Routes>
    </Router>
  );
};

export default App;