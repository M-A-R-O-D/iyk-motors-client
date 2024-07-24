import React from 'react';
import { Icon } from '@iconify-icon/react';
import Button from './Button';

const VehicleCard = ({ vehicle }) => {
    return (
        <div className="bg-white rounded-lg p-6 my-2 mx-2 flex flex-col justify-between h-100">
            <div className="flex justify-center">
                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-40 w-auto object-cover mb-4"
                />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-2">{vehicle.name}</h3>
            <div className="flex-grow">
                <p className="text-gray-700 mb-2">{vehicle.description}</p>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <Icon
                        icon="fluent:top-speed-20-filled"
                        className="text-custom-blue mr-2"
                        style={{ fontSize: '24px' }}
                    />
                    <span className="font-semibold text-black">{vehicle.speed}</span>
                </div>
                <div className="flex items-center mb-4">
                    <Icon
                        icon="fa6-solid:cedi-sign"
                        className="text-custom-blue mr-2"
                        style={{ fontSize: '24px' }}
                    />
                    <span className="font-semibold text-black">{vehicle.price}</span>
                </div>
                <div className="flex justify-evenly mt-6">
                    <Button className="btn1 bg-custom-blue font-semibold text-white hover:bg-blue-700 transition duration-300 w-32 h-10 flex justify-center items-center">
                        Test Drive
                    </Button>

                    <Button className="btn2 text-custom-blue font-semibold border border-custom-blue hover:bg-blue-700 hover:text-white transition duration-300 w-32 h-10 flex justify-center items-center">
                        Learn More
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default VehicleCard;
