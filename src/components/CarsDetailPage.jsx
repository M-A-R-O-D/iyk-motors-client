// src/pages/CarDetailPage.jsx
import React, { useState } from 'react';
import Popup from '../components/Popup';

const CarDetailPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const car = {
    name: 'NISSAN NAVARA',
    year: '2023',
    price: 'GHC 435,000',
    image: '/path/to/car/image.jpg',
    make: 'Nissan',
    bodyType: 'SUV',
    color: 'White',
    mileage: '5000 km',
    engineCapacity: '2.5L',
    model: 'Navara',
    fuel: 'Diesel',
    transmission: 'Automatic',
    cylinders: '4',
    features: ['Radio', 'Air Conditioning', 'Bluetooth', 'Backup Camera', 'Navigation System']
  };

  return (
    <div>
      <button onClick={() => setIsPopupOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Show Car Details</button>
      {isPopupOpen && <Popup car={car} onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default CarDetailPage;
