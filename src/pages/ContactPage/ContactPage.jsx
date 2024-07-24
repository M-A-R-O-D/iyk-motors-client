import React from 'react';
import HeroSection from './Hero/Hero.jsx';
import Footer from '../../components/Footer.jsx';

function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <HeroSection />
            </div>
            <div className="flex-grow">
                <Footer />
            </div>
        </div>
    );
}

export default ContactPage;