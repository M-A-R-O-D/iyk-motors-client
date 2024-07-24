// src/components/SearchBars.jsx
import React, { useState } from 'react';
import Dropdown from './Dropdown.jsx';

function SearchBars() {
  const [vehicleDropdownOpen, setVehicleDropdownOpen] = useState(false);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);

  const vehicleOptions = ["Toyota", "Honda", "BMW"];
  const modelOptions = ["Corolla", "Civic", "X5"];
  const priceOptions = ["$10,000", "$20,000", "$30,000"];

  return (
    <div className="search-bars flex">
      <div className="relative flex items-center border-[1px] p-4 m-4 border-black rounded-xl w-96 h-14">
        <input
          type="text"
          placeholder="VEHICLE NAME OR BRAND"
          className="w-full h-full pl-4 pr-10 border-none outline-none rounded-xl"
        />
        <span
          className="material-symbols-outlined absolute right-4 text-gray-400 cursor-pointer"
          onClick={() => setVehicleDropdownOpen(!vehicleDropdownOpen)}
        >
          keyboard_arrow_down
        </span>
        <Dropdown isOpen={vehicleDropdownOpen} items={vehicleOptions} />
      </div>
      <div className="relative flex items-center border-[1px] p-4 m-4 border-black rounded-xl w-96 h-14">
        <input
          type="text"
          placeholder="MODEL"
          className="w-full h-full pl-4 pr-10 border-none outline-none rounded-xl"
        />
        <span
          className="material-symbols-outlined absolute right-4 text-gray-400 cursor-pointer"
          onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
        >
          keyboard_arrow_down
        </span>
        <Dropdown isOpen={modelDropdownOpen} items={modelOptions} />
      </div>
      <div className="relative flex items-center border-[1px] p-4 m-4 border-black rounded-xl w-56 h-14">
        <input
          type="text"
          placeholder="PRICE UP TO"
          className="w-full h-full pl-4 pr-10 border-none outline-none rounded-xl"
        />
        <span
          className="material-symbols-outlined absolute right-4 text-gray-400 cursor-pointer"
          onClick={() => setPriceDropdownOpen(!priceDropdownOpen)}
        >
          keyboard_arrow_down
        </span>
        <Dropdown isOpen={priceDropdownOpen} items={priceOptions} />
      </div>
    </div>
  );
}

export default SearchBars;
