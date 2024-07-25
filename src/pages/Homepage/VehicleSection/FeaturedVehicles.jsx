import React, { useState } from 'react';
import AnimatedSection from '../../../components/Animator';
import CustomSlider from '../../../components/CustomSlider';
import VehicleCard from '../../../components/VehicleCard';
import Modal from './Modal';
import ScheduleTestDriveForm from './TestdriveForm';

let vehicleList = [
    {
        name: 'Nissan Navara 2023',
        description: 'A robust pickup truck known for its off-road capabilities and comfort.',
        speed: '112 mph',
        price: 'Starting price GH¢150,000',
        image: '/assets/nissan_nav.png',
    },
    {
        name: 'Toyota Tundra 2024',
        description: 'A full-sized pickup truck offering power, durability, and luxury.',
        speed: '110 mph',
        price: 'Starting price GH¢200,000',
        image: '/assets/thundra.jpg',
    },
    {
        name: 'BMW 3301 2024',
        description: 'A luxury sedan with sporty performance and advanced features.',
        speed: '155 mph',
        price: 'Starting price GH¢250,000',
        image: '/assets/bmw.jpg',
    },
    {
        name: 'Nissan Navara XE 2024',
        description: 'A refined and powerful pickup truck designed for both work and play.',
        speed: '115 mph',
        price: 'Starting price GH¢170,000',
        image: '/assets/XE.jpg',
    },
];

const FeaturedVehicles = ({ vehicles = vehicleList }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleTestDriveClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <section className="font-poppins bg-[#f0efed] h-111 py-10">
            <div className="container my-2 mx-auto px-4">
                <h2 className="text-4xl font-bold text-start text-black my-1">
                    <span className="text-custom-blue">Latest</span> arrivals
                </h2>
                <div className='my-10'>
                    <AnimatedSection>
                        <CustomSlider>
                            {vehicles.map((vehicle, index) => (
                                <VehicleCard
                                    key={index}
                                    vehicle={vehicle}
                                    onTestDrive={handleTestDriveClick}
                                />
                            ))}
                        </CustomSlider>
                    </AnimatedSection>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ScheduleTestDriveForm onClose={handleCloseModal} />
            </Modal>
        </section>
    );
};

export default FeaturedVehicles;
