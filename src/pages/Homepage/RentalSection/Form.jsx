import React from 'react';
import Button from '../../../components/Button';
import Dropdown from './DropDown';
import { Icon } from '@iconify-icon/react';

const ReservationForm = () => {
    const makes = [
        'Any',
        'Toyota',
        'Honda',
        'Ford',
        'BMW',
        'Mercedes',
        'Chevrolet',
        'Nissan',
        'Volkswagen',
        'Hyundai',
        'Kia',
        'Audi',
        'Jeep',
        'Subaru',
        'Mazda',
        'Tesla',
        'Porsche',
        'Lexus',
        'Jaguar',
        'Volvo'
    ];

    const brands = [
        'Any',
        'Lexus',     // Toyota's luxury brand
        'Infiniti',  // Nissan's luxury brand
        'Acura',     // Honda's luxury brand
        'Lincoln',   // Ford's luxury brand
        'Cadillac',  // General Motors' luxury brand
        'AMG',       // Mercedes' performance brand
        'M',         // BMW's performance brand
        'Audi Sport',
        'Genesis',   // Hyundai's luxury brand
        'Polestar',  // Volvo's performance brand
        'GMC',       // Known for trucks and SUVs
        'Ram',       // Known for trucks
        'Mini',      // BMW's small car brand
        'Fiat',      // Known for small cars
        'Alfa Romeo' // Known for luxury and performance
    ];

    const types = [
        'Any',
        'Sedan',
        'SUV',
        'Coupe',
        'Convertible',
        'Truck',
        'Hatchback',
        'Wagon',
        'Van',
        'Minivan',
        'Crossover',
        'Electric',
        'Hybrid',
        'Diesel',
        'Luxury',
        'Performance',
        'Compact',
        'Pickup'
    ];

    const durations = ['1 Day', '1 Week', '1 Month'];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 font-poppins">
            <div>
                <input
                    type="text"
                    placeholder="First name"
                    className="w-full h-14 font-bold bg-custom-gray-deep px-3 py-2 rounded-lg placeholder-gray-500"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Last name"
                    className="w-full h-14 font-bold bg-custom-gray-deep px-3 py-2 rounded-lg placeholder-gray-500"
                />
            </div>
            <div className="col-span-1 md:col-span-2">
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full h-14 bg-custom-gray-deep px-3 py-2 rounded-lg font-bold placeholder-gray-500"
                />
            </div>
            <div>
                <Dropdown label="Make" options={makes} />
            </div>
            <div>
                <Dropdown label="Brand" options={brands} />
            </div>
            <div>
                <Dropdown label="Type" options={types} />
            </div>
            <div>
                <Dropdown label="Duration" options={durations} />
            </div>
            <div className="col-span-1 md:col-span-2">
                <input
                    type="text"
                    placeholder="For which occasion?"
                    className="w-full h-14 bg-custom-gray-deep px-3 py-2 rounded-lg font-bold placeholder-gray-500"
                />
            </div>
            <div className=" font-poppins col-span-1 md:col-span-2">
                <Button className="w-full bg-blue-500 flex justify-center space-x-3 items-center text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    <span className="font-bold">Submit</span>
                    <Icon icon="formkit:submit" style={{ fontSize: '32px' }} />
                </Button>
            </div>
        </form>
    );
};

export default ReservationForm;
