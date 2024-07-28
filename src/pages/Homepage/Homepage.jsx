import React from 'react';
import HeroSection from './HeroSection/HeroSection.jsx';
import RentalSection from './RentalSection/RentalSection.jsx';
import AboutSection from './AboutSection/AboutSection.jsx';
import ServiceSection from './ServiceSection/ServiceSection.jsx';
import FeaturedVehicles from './VehicleSection/FeaturedVehicles.jsx';
import Footer from '../../components/Footer.jsx';
import FeaturedBrands from './FeaturedBrands.jsx/FeaturedBrands.jsx';

function Homepage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <HeroSection />
            </div>
            <div className="flex-grow">
                <FeaturedVehicles />
            </div>
            <div className="flex-grow">
                <AboutSection />
            </div>
            <div className="flex-grow">
                <RentalSection />
            </div>
            <div className="flex-grow">
                <FeaturedBrands />
            </div>
            <div className="flex-grow">
                <Footer />
            </div>
        </div>
    );
}

export default Homepage;
