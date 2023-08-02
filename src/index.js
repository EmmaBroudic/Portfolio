import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Contact from './pages/contact';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import reportWebVitals from './reportWebVitals';

/* ce bloc de code contient la racine de l'application et le routage */

const container = document.getElementById('root');
const root = createRoot(container);

function App() {

  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
              <Route path="Portfolio/" element={<Home />} />
              <Route path="Portfolio/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

root.render(<App />);
reportWebVitals();
