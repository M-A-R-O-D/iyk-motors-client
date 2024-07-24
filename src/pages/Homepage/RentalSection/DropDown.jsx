import React, { useState } from 'react';
import { Icon } from '@iconify-icon/react';

const Dropdown = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleToggle = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button"
                className={`w-full h-14 font-bold px-3 py-2 bg-custom-gray-deep rounded-lg flex justify-between items-center focus:outline-none
                    ${selectedOption ? 'text-black' : 'text-gray-500'}`}
                onClick={handleToggle}
            >
                {selectedOption || label}
                <Icon icon="ri:arrow-drop-down-line" style={{ fontSize: '32px', color: 'black' }} />
            </button>

            {isOpen && (
                <ul className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
