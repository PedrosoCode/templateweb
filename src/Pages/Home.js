import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Página Inicial</h2>
      {/* Conteúdo da página inicial */}
      <Link to="/Segunda">Core Rules</Link>
    </div>
  );
};

export default Home;
