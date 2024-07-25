import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage/Homepage';
import CarsPage from './pages/InventoryPage/CarsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import { ScrollProvider } from './context/ScrollContext';

function App() {
  return (
    <Router>
      <ScrollProvider>
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cars" element={<CarsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </ScrollProvider>
    </Router>
  );
}

export default App;
