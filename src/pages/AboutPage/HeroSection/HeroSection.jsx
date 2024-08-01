import React from 'react';
import AnimatedSection from '../../../components/Animator';

const HeroSection = () => {
    return (
        <>
            <AnimatedSection>
                <div className="relative font-poppins bg-cover bg-center flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start p-8 md:p-16"
                    style={{
                        backgroundImage: 'url(assets/images/about4.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                        width: '100%',
                    }}>

                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                        <h1 className="text-white text-3xl md:text-6xl font-bold text-center">WELCOME TO <span className='text-custom-blue'>IY-KAY MOTORS</span></h1>
                        <p className="text-white text-lg md:text-xl mt-2 text-center">Driving the Future of the Automobile Industry</p>
                    </div>

                </div>
            </AnimatedSection>
        </>
    );
};

export default HeroSection;
