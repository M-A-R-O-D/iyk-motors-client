import React from 'react';

const Popup = ({ car, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-[800px] shadow-lg">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold">{car.name} - {car.year}</h2>
          <span className="text-xl font-bold text-blue-500">{car.price}</span>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <img src={car.image} alt={car.name} className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-1/2 p-4 flex flex-col justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 w-full">
              REQUEST A TEST DRIVE
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
              PURCHASE
            </button>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2 p-2 border-r">
            <h3 className="text-center bg-blue-500 text-white py-2 rounded-lg">DESCRIPTION</h3>
            <div className="mt-2">
              <p><strong>Make:</strong> {car.make}</p>
              <p><strong>Body Type:</strong> {car.bodyType}</p>
              <p><strong>Color:</strong> {car.color}</p>
              <p><strong>Mileage:</strong> {car.mileage}</p>
              <p><strong>Engine Capacity:</strong> {car.engineCapacity}</p>
              <p><strong>Model:</strong> {car.model}</p>
              <p><strong>Fuel:</strong> {car.fuel}</p>
              <p><strong>Transmission:</strong> {car.transmission}</p>
              <p><strong>Cylinders:</strong> {car.cylinders}</p>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <h3 className="text-center bg-blue-500 text-white py-2 rounded-lg">FEATURES</h3>
            <div className="mt-2">
              {car.features.map((feature, index) => (
                <p key={index} className="text-gray-700">+ {feature}</p>
              ))}
            </div>
          </div>
        </div>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
