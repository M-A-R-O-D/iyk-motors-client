import React from 'react';
import { Icon } from '@iconify-icon/react';

const Card = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm text-center flex flex-col items-center">
            <Icon icon={icon} className="text-5xl mb-4 text-custom-blue" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;
