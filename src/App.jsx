import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage/Homepage';
import CarsPage from './pages/InventoryPage/CarsPage';
// import AboutPage from './pages/AboutPage/AboutPage';
// import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cars" element={<CarsPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
