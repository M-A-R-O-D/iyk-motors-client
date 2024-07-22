import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage/Homepage';
import CarsPage from './pages/InventoryPage/CarsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cars" element={<CarsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
