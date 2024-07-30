import React, { useState } from 'react';

function Sidebar({ onFilterChange }) {
  const [vehicleTypeOpen, setVehicleTypeOpen] = useState(false);

  const handleVehicleTypeClick = (type) => {
    onFilterChange({ vehicleType: type });
  };

  return (
    <div className="sidebar w-80 h-auto p-5">
      <div className="relative mb-4">
        <p className="bebas-neue text-gray-500 text-[26px]">VEHICLE TYPE</p>
        <span
          className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={() => setVehicleTypeOpen(!vehicleTypeOpen)}
        >
          keyboard_arrow_down
        </span>
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
    </div>
  );
}

export default Sidebar;
