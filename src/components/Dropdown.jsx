// src/components/Dropdown.jsx
import React from 'react';

function Dropdown({ isOpen, items }) {
  return (
    <div className={`absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 ${isOpen ? '' : 'hidden'}`}>
      {items.map((item, index) => (
        <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
