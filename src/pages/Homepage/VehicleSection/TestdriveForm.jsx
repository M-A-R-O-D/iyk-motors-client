import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { sendTestDriveEmail } from '../../../services/MailServices/MailService';

const ScheduleTestDriveForm = ({ vehicle, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            phone,
            comments,
            vehicleName: vehicle.name,
            vehicleDescription: vehicle.description,
            vehicleCondition: vehicle.condition,
            vehicleSpeed: vehicle.speed,
            vehiclePrice: vehicle.price,
        };

        try {
            const { code, message } = await sendTestDriveEmail(formData);
            if (code === 200) {
                toast.success(message);
            } else {
                toast.error(message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Internal server error.");
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Schedule a Test Drive</h2>
            {vehicle && (
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                    <p>{vehicle.description}</p>
                    <p><strong>Condition:</strong> {vehicle.condition}</p>
                    <p><strong>Speed:</strong> {vehicle.speed}</p>
                    <p><strong>Price:</strong> {vehicle.price}</p>
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        value={name}
                        placeholder="Enter your full name"
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-custom-blue focus:border-custom-blue sm:text-sm p-2"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value={email}
                        placeholder='Enter your Email'
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-custom-blue focus:border-custom-blue sm:text-sm p-2"
                        required
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        value={phone}
                        placeholder='Enter your phone number'
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-custom-blue focus:border-custom-blue sm:text-sm p-2"
                        required
                    />
                </div>
                <div>
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-custom-blue focus:border-custom-blue sm:text-sm p-2 resize-none"
                        rows="3"
                        placeholder="Enter any additional information or requests here"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-custom-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Submit
                </button>
            </form>
            <h4 className='text-[16px] text-center mt-4 font-semibold'>Hotline: +233-567-890-5678</h4>
        </div>
    );
};

export default ScheduleTestDriveForm;
