import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Footer></Footer>
  </React.StrictMode>
);