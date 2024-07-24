// src/components/Popup.jsx
import React from 'react';

const Popup = ({ car, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[800px]">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-bold">{car.name} - {car.year}</h2>
          <span className="text-xl font-bold text-blue-500">{car.price}</span>
        </div>
        <div className="flex">
          <img src={car.image} alt={car.name} className="w-1/2 h-auto" />
          <div className="w-1/2 p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 w-full">REQUEST A TEST DRIVE</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">PURCHASE</button>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2 p-2 border-r">
            <h3 className="text-center bg-blue-500 text-white py-2">DESCRIPTION</h3>
            <p>Make: {car.make}</p>
            <p>Body type: {car.bodyType}</p>
            <p>Color: {car.color}</p>
            <p>Mileage: {car.mileage}</p>
            <p>Engine Capacity: {car.engineCapacity}</p>
            <p>Model: {car.model}</p>
            <p>Fuel: {car.fuel}</p>
            <p>Transmission: {car.transmission}</p>
            <p>Cylinders: {car.cylinders}</p>
          </div>
          <div className="w-1/2 p-2">
            <h3 className="text-center bg-blue-500 text-white py-2">FEATURES</h3>
            {car.features.map((feature, index) => (
              <p key={index}>+ {feature}</p>
            ))}
          </div>
        </div>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full">Close</button>
      </div>
    </div>
  );
};

export default Popup;
