import React from 'react';
import Button from '../../../components/Button';
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';
import { useScroll } from '../../../context/ScrollContext';
import AnimatedSection from '../../../components/Animator';

function HeroSection() {
    const { scrollTo } = useScroll();

    const handleRentCar = () => {
        scrollTo('rentals');
    }

    return (
        <AnimatedSection>
            <div className="relative font-poppins h-111 bg-cover bg-center flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start p-8 md:p-16"
                style={{
                    backgroundImage: 'url(assets/images/OW_Home_DreamDaysDHero_L.png)',
                    // backgroundImage: 'url(assets/images/car4.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    width: '100%',
                }}>

                <div className="flex flex-col font-poppins justify-center text-center md:text-left md:mt-16 max-w-2xl">
                    <h1 className="text-4xl mt-16 md:text-6xl md:mt-7 font-bold text-white mb-6 leading-tight">
                        WE PROVIDE <span className="text-custom-blue">LUXURY CARS</span> FOR SALE
                    </h1>
                    <p className="text-white font-poppins text-lg md:text-xl mb-8 leading-relaxed">
                        Browse our inventory and discover your next car. With a
                        wide range of makes and models, competitive pricing,
                        and exceptional customer service, your dream car is
                        just a click away.
                    </p>
                    <div className="flex flex-col mt-5 justify-start items-center md:flex-row md:space-x-5 md:items-start space-y-4 md:space-y-0">
                        <Link to="/cars">
                            <Button className="browse-button font-poppins font-semibold h-14 w-44 bg-transparent flex justify-center items-center space-x-2 border border-white text-white hover:bg-white hover:text-black bg-opacity-20 backdrop-blur-lg">
                                <span>Browse</span>
                                <Icon icon="ri:arrow-right-line" style={{ fontSize: '24px' }} />
                            </Button>
                        </Link>
                        <Button
                            className="rent-a-car-button font-poppins font-semibold h-14 w-44 bg-transparent flex justify-center items-center space-x-2 border border-white text-white hover:bg-white hover:text-black bg-opacity-20 backdrop-blur-lg"
                            onClick={handleRentCar}
                        >
                            <Icon icon="maki:car-rental" style={{ fontSize: '24px' }} />
                            <span>Rent a car</span>

                        </Button>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default HeroSection;
