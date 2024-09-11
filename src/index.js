import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import Container80per from './components/Container80per'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <Container80per customClass='container'>
  
    </Container80per>
    <Footer></Footer>
  </React.StrictMode>
);