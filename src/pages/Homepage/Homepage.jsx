import React from 'react';
import HeroSection from './HeroSection/HeroSection.jsx';
import RentalSection from './RentalSection/RentalSection.jsx';
import AboutSection from './AboutSection/AboutSection.jsx';
import BrandSection from './BrandSection/BrandSection.jsx';
import Footer from '../../components/Footer.jsx';

function Homepage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <HeroSection />
            </div>
            <div className="flex-grow">
                <RentalSection />
            </div>
            <div className="flex-grow">
                <AboutSection />
            </div>
            <div className="flex-grow">
                <BrandSection />
            </div>
            <div className="flex-grow">
                <Footer />
            </div>
        </div>
    );
}

export default Homepage;
