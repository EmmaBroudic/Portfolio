import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route /*, Navigate, useParams*/ } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Contact from './pages/contact';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
