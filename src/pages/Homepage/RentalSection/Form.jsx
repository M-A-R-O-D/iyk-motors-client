import React, { useState } from 'react';
import Button from '../../../components/Button';
import Dropdown from './DropDown';
import { Icon } from '@iconify-icon/react';
import { sendRentalEmail } from '../../../services/MailServices/MailService';
import toast from 'react-hot-toast';

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

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        make: 'Any',
        brand: 'Any',
        type: 'Any',
        duration: '1 Day',
        occasion: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleDropdownChange = (label, value) => {
        setFormData({
            ...formData,
            [label.toLowerCase()]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { code, message } = await sendRentalEmail(formData);
            if (code === 200) {
                toast.success(message);
            } else {
                toast.error(message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Internal server error.")
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 font-poppins">
            <div>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-14 font-bold bg-custom-gray-deep px-3 py-2 rounded-lg placeholder-gray-500"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full h-14 font-bold bg-custom-gray-deep px-3 py-2 rounded-lg placeholder-gray-500"
                />
            </div>
            <div className="col-span-1 md:col-span-2">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-14 bg-custom-gray-deep px-3 py-2 rounded-lg font-bold placeholder-gray-500"
                />
            </div>
            <div>
                <Dropdown label="Make" options={makes} onChange={handleDropdownChange} />
            </div>
            <div>
                <Dropdown label="Brand" options={brands} onChange={handleDropdownChange} />
            </div>
            <div>
                <Dropdown label="Type" options={types} onChange={handleDropdownChange} />
            </div>
            <div>
                <Dropdown label="Duration" options={durations} onChange={handleDropdownChange} />
            </div>
            <div className="col-span-1 md:col-span-2">
                <input
                    type="text"
                    name="occasion"
                    placeholder="For which occasion?"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full h-14 bg-custom-gray-deep px-3 py-2 rounded-lg font-bold placeholder-gray-500"
                />
            </div>
            <div className="font-poppins col-span-1 md:col-span-2">
                <Button type="submit" className="w-full bg-blue-500 flex justify-center space-x-3 items-center text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    <span className="font-bold">Submit</span>
                    <Icon icon="formkit:submit" style={{ fontSize: '32px' }} />
                </Button>
            </div>
        </form>
    );
};

export default ReservationForm;
