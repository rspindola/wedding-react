import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Pages
import Home from './pages/Home';
import Padrinhos from './pages/Padrinhos';
import ConfirmPresence from './pages/ConfirmPresence';
import Gifts from './pages/Gifts';

// Components
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/scss/globals.scss';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='padrinhos' element={<Padrinhos />} />
      <Route path='confirme-presenca' element={<ConfirmPresence />} />
      <Route path='lista-de-presentes' element={<Gifts />} />
      <Route
        path='*'
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
