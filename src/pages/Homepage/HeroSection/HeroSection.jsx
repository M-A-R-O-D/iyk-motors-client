import React from 'react';
import Button from '../../../components/Button';
import { Icon } from '@iconify-icon/react';
import AnimatedSection from '../../../components/Animator';

function HeroSection() {
    return (
        <AnimatedSection>
            <div className="relative h-111 bg-cover bg-center flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start p-8 md:p-16"
                style={{ backgroundImage: 'url(assets/images/OW_Home_DreamDaysDHero_L.png)', minHeight: '60vh' }}>

                <div className="flex flex-col justify-center text-center md:text-left md:mt-16 max-w-2xl">
                    <h1 className="text-3xl mt-16 md:text-5xl font-bold text-white mb-6 leading-tight">
                        WE PROVIDE <span className="text-custom-blue">LUXURY CARS</span> FOR SALE
                    </h1>
                    <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
                        Browse our inventory and discover your next car. With a
                        wide range of makes and models, competitive pricing,
                        and exceptional customer service, your dream car is
                        just a click away.
                    </p>
                    <div className="flex flex-col mt-5 justify-start items-center md:flex-row md:space-x-5 md:items-start space-y-4 md:space-y-0">
                        <Button className="buy-a-car-button h-14 w-44 bg-transparent flex justify-center items-center space-x-2 border border-white text-white hover:bg-white hover:text-black bg-opacity-20 backdrop-blur-lg" >
                            <Icon icon="ri:shopping-cart-line" style={{ fontSize: '24px' }} />
                            <span>BUY A CAR</span>
                        </Button>
                        <Button className="rent-a-car-button h-14 w-44 bg-transparent flex justify-center items-center space-x-2 border border-white text-white hover:bg-white hover:text-black bg-opacity-20 backdrop-blur-lg">
                            <Icon icon="maki:car-rental" style={{ fontSize: '24px' }} />
                            <span>RENT A CAR</span>
                        </Button>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default HeroSection;
