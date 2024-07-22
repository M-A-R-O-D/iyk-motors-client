import React from 'react';
import Button from '../../../components/Button';
import { Icon } from '@iconify-icon/react';
import AnimatedSection from '../../../components/Animator';

function HeroSection() {
    return (
        <div className="relative bg-cover bg-center flex items-center justify-between p-10"
            style={{ backgroundImage: 'url(assets/images/OW_Home_DreamDaysDHero_L.png)' }}>
            <AnimatedSection>
                <div className="h-105 ml-12 mt-16 hero-description max-w-lg">
                    <p className="text-4xl py-0 w-full font-bold text-white mb-6">
                        WE PROVIDE <span className="text-custom-blue">LUXURY CARS</span>
                        <p className="text-4xl py-0 font-bold text-white mb-6">FOR SALE</p>
                    </p>
                    <p className="text-white text-lg mb-8">
                        Browse our inventory and discover your next car. With a
                        wide range of makes and models, competitive pricing,
                        and exceptional customer service, your dream car is
                        just a click away.
                    </p>
                    <Button className="bg-transparent h-12 w-32 flex justify-center items-center space-x-2 border border-white text-white hover:bg-white hover:text-black">
                        <span>Browse</span>
                        <Icon icon="ri:arrow-right-line" style={{ fontSize: '24px' }} />
                    </Button>
                </div>
            </AnimatedSection>

            <div className="absolute top-28 right-20 flex items-center justify-between space-x-10">
                <Button className="buy-a-car-button h-12 w-44 bg-transparent flex justify-center items-center space-x-2  border border-white text-white hover:bg-white hover:text-black">
                    <Icon icon="ri:shopping-cart-line" style={{ fontSize: '24px' }} />
                    <span>BUY A CAR</span>
                </Button>

                <Button className="rent-a-car-button h-12 w-44 bg-transparent flex justify-center items-center space-x-2 border border-white text-white hover:bg-white hover:text-black">
                    <Icon icon="maki:car-rental" style={{ fontSize: '24px' }} />
                    <span>RENT A CAR</span>
                </Button>
            </div>
        </div >
    );
}

export default HeroSection;
