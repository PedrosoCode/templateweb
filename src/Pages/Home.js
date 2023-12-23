import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavbar from '../Components/MainNavbar';

const Home = () => {
  return (
    <div>
        <MainNavbar />
      <h2>Página Inicial</h2>
      {/* Conteúdo da página inicial */}
      <Link to="/Segunda">Core Rules</Link>
    </div>
  );
};

export default Home;
