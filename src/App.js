import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import SVTHPage from './pages/SVTHPage.js';
import ContactPage from './pages/ContactPage.js';
import AboutPage from './pages/AboutPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/svth" element={<SVTHPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/more" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
