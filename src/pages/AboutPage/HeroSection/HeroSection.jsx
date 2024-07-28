import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative font-poppins bg-cover bg-center flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start p-8 md:p-16"
            style={{
                backgroundImage: 'url(assets/images/about4.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100%',
            }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 className="text-white text-3xl md:text-6xl font-bold text-center">WELCOME TO <span className='text-custom-blue'>I-KAY MOTORS</span></h1>
                <p className="text-white text-lg md:text-xl mt-2 text-center">Driving the Future of the Automobile Industry</p>
            </div>
        </div>
    );
};

export default HeroSection;
