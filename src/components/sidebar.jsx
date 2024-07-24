// src/components/Sidebar.jsx
import React, { useState } from 'react';

function Sidebar() {
  const [vehicleTypeOpen, setVehicleTypeOpen] = useState(false);
  const [transmissionTypeOpen, setTransmissionTypeOpen] = useState(false);
  const [carsOpen, setCarsOpen] = useState(false);
  const [paymentMethodOpen, setPaymentMethodOpen] = useState(false);

  return (
    <div className="sidebar w-80 h-auto p-5">
      {/* Vehicle Type */}
      <div className="relative mb-4">
        <p className="bebas-neue text-gray-500 text-[26px]">
          VEHICLE TYPE
        </p>
        <span
          className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={() => setVehicleTypeOpen(!vehicleTypeOpen)}
        >
          keyboard_arrow_down
        </span>
      </div>
      {vehicleTypeOpen && (
        <div className="space-y-4">
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Economy
          </p>
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Compact
          </p>
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Midsize
          </p>
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Standard
          </p>
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Full size
          </p>
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Sports utility
          </p>
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Sports car
          </p>
        </div>
      )}
      <hr />

      {/* Transmission Type */}
      <div className="relative mb-4">
        <p className="bebas-neue text-gray-500 text-[20px]">
          TRANSMISSION TYPE
        </p>
        <span
          className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={() => setTransmissionTypeOpen(!transmissionTypeOpen)}
        >
          keyboard_arrow_down
        </span>
      </div>
      {transmissionTypeOpen && (
        <div className="space-y-4">
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Automatic
          </p>
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Manual
          </p>
        </div>
      )}
      <hr />

      {/* Cars */}
      <div className="relative mb-4">
        <p className="bebas-neue text-gray-500 text-[20px]">
          CARS
        </p>
        <span
          className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={() => setCarsOpen(!carsOpen)}
        >
          keyboard_arrow_down
        </span>
      </div>
      {carsOpen && (
        <div className="space-y-4">
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Car 1
          </p>
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Car 2
          </p>
        </div>
      )}
      <hr />

      {/* Payment Method */}
      <div className="relative mb-4">
        <p className="bebas-neue text-gray-500 text-[20px]">
          PAYMENT METHOD
        </p>
        <span
          className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={() => setPaymentMethodOpen(!paymentMethodOpen)}
        >
          keyboard_arrow_down
        </span>
      </div>
      {paymentMethodOpen && (
        <div className="space-y-4">
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Cash
          </p>
          <p className="flex items-center text-gray-400">
            <span className="mr-2">&#9723;</span>Credit
          </p>
        </div>
      )}
      <hr />
    </div>
  );
}

export default Sidebar;
