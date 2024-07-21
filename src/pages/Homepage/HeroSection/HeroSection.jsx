import React from 'react';
import Button from '../../../components/Button';

function HeroSection() {
    return (
        <div className="relative hero-section bg-cover bg-center flex items-center justify-between p-10"
            style={{ backgroundImage: 'url(assets/images/OW_Home_DreamDaysDHero_L.png)' }}>
            <div className="absolute top-12 right-20 flex items-center justify-between space-x-10">
                <Button children={"BUY A CAR"} className="border border-white text-white bg-transparent hover:bg-white hover:text-black px-4 py-2 rounded transition duration-300" />
                <Button children={"RENT A CAR"} className="border border-white text-white bg-transparent hover:bg-white hover:text-black px-4 py-2 rounded transition duration-300" />
            </div>

            <div className="h-105 mt-16 py-5 hero-description max-w-lg">
                <h1 className="text-6xl font-bold text-white mb-6">
                    WE PROVIDE <span className="text-custom-blue">LUXURY CARS</span> FOR SALE
                </h1>
                <p className="text-white text-lg mb-8">
                    Browse our inventory and discover your next car. With a
                    wide range of makes and models, competitive pricing,
                    and exceptional customer service, your dream car is
                    just a click away.
                </p>
                <Button children={"Browse"} className="border border-white text-white bg-transparent hover:bg-white hover:text-black px-4 py-2 rounded transition duration-300" />
            </div>
        </div >
    );
}

export default HeroSection;
