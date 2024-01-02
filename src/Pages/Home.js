import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavbar from '../Components/MainNavbar';
import MainFooter from '../Components/MainFooter';
import MainCarousel from '../Components/MainCarousel';

const Home = () => {
    return (
        <div>
            <MainNavbar />

            {/* Conteúdo da página inicial */}
            <div class="spacer teste">
                <h1>Teste SCSS</h1>
                <p>Este é um teste básico para verificar se o SCSS está funcionando corretamente.</p>
            </div>
            <Link to="/Segunda">Core Rules</Link>
            <MainCarousel />
            <MainFooter />
        </div>
    );
};

export default Home;
