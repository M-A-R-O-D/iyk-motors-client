import React from 'react';
import { Icon } from '@iconify-icon/react';

const Card = ({ icon, title, description }) => {
    return (
        <div className="bg-transparent rounded-lg p-6 max-w-sm text-center flex flex-col items-center">
            <Icon icon={icon} className="text-7xl mb-4 text-custom-blue " />
            <h3 className="text-3xl text-white font-bold mb-2">{title}</h3>
            <p className="text-white">{description}</p>
        </div>
    );
};

export default Card;
