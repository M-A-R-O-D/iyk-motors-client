import React from 'react';
import Button from '../../../components/Button';
import Dropdown from './DropDown';
import { Icon } from '@iconify-icon/react';

const ReservationForm = () => {
    const makes = ['Any', 'Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'];
    const brands = ['Any', 'Brand A', 'Brand B', 'Brand C'];
    const types = ['Any', 'Type X', 'Type Y', 'Type Z'];
    const durations = ['1 Day', '1 Week', '1 Month'];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
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
            <div className="col-span-1 md:col-span-2">
                <Button className="w-full bg-blue-500 flex justify-center space-x-3 items-center text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    <span className="font-bold">Submit</span>
                    <Icon icon="formkit:submit" style={{ fontSize: '32px' }} />
                </Button>
            </div>
        </form>
    );
};

export default ReservationForm;
