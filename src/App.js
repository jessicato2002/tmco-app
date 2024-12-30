import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';
import HomePage from './pages/HomePage.js';
import SVTHPage from './pages/SVTHPage.js';
import ContactPage from './pages/ContactPage.js';
import AboutPage from './pages/AboutPage.js';

function App() {
  const basename = process.env.NODE_ENV === 'development' ? '/' : '/';
  return (
    <Router basename={basename}>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/svth" element={<SVTHPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/more" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
