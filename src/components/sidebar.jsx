import React, { useState } from 'react';

function Sidebar({ onFilterChange }) {
  const [vehicleTypeOpen, setVehicleTypeOpen] = useState(false);
  const [vehicleTransmissionOpen, setvehicleTransmissionOpen] = useState(false);
  const [vehicleYearOpen, setvehicleYearOpen] = useState(false);

  const handleVehicleTypeClick = (type) => {
    onFilterChange({ vehicleType: type });
  };

  const handleVehicleTransmissionClick = (type) => {
    onFilterChange({ vehicleTransmission: type });
  };

  const handleVehicleYearClick = (type) => {
    onFilterChange({ vehicleYear: type });
  };

  return (
    <div className="sidebar w-80px h-auto p-5">
      {/* Vehicle type filter */}
      <div className="relative mb-4">
        <p className="bebas-neue text-gray-500 text-[26px] cursor-pointer" onClick={() => setVehicleTypeOpen(!vehicleTypeOpen)}>VEHICLE TYPE
          <span className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400">
          {vehicleTypeOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          </span>
        </p>
      </div>
      {vehicleTypeOpen && (
        <div className="space-y-4">
          {['Economy', 'Sports', 'Family', '4x4', 'Pickup', 'Convertible', 'SUV', 'Sedan'].map((type) => (
            <p key={type} className="flex items-center text-gray-400 cursor-pointer" onClick={() => handleVehicleTypeClick(type)}>
              <span className="mr-2">&#9723;</span>{type}
            </p>
          ))}
        </div>
      )}
      {/* Transmission type filter */}
      <div className="relative mb-4">
        <p className="bebas-neue text-gray-500 text-[26px] cursor-pointer" onClick={() => setvehicleTransmissionOpen(!vehicleTransmissionOpen)}>TRANSMISSION TYPE
          <span className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400">
          {vehicleTransmissionOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          </span>
        </p>
      </div>
      {vehicleTransmissionOpen && (
        <div className="space-y-4">
          {['Automatic', 'Manual'].map((type) => (
            <p key={type} className="flex items-center text-gray-400 cursor-pointer" onClick={() => handleVehicleTransmissionClick(type)}>
              <span className="mr-2">&#9723;</span>{type}
            </p>
          ))}
        </div>
      )}
      {/* Year filter */}
      <div className="relative mb-4">
        <p className="bebas-neue text-gray-500 text-[26px] cursor-pointer" onClick={() => setvehicleYearOpen(!vehicleYearOpen)}>YEAR
          <span className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400">
          {vehicleYearOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          </span>
        </p>
      </div>
      {vehicleYearOpen && (
        <div className="space-y-4">
          {[2020, 2021, 2022, 2023].map((type) => (
            <p key={type} className="flex items-center text-gray-400 cursor-pointer" onClick={() => handleVehicleYearClick(type)}>
              <span className="mr-2">&#9723;</span>{type}
            </p>
          ))}
        </div>
      )}
    </div>

  );
}

export default Sidebar;
