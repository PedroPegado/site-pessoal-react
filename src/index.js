import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Divisor from './components/Divisor';
import Curiosities from './components/Curiosities';
import Portfolio from './components/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <Hero></Hero>
    <Divisor pathImg={'aboutMe'}></Divisor>
    <AboutMe></AboutMe>
    <Divisor pathImg={'curiosities'}></Divisor>
    <Curiosities></Curiosities>
    <Divisor pathImg={'portfolio'}></Divisor>
    <Portfolio></Portfolio>
    <Footer></Footer>
  </React.StrictMode>
);