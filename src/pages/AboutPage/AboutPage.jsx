import React from 'react'
import HeroSection from './HeroSection/HeroSection';
import MissionSection from './MissionSection/MissionSection';
import ServiceSection from './Services/ServiceSection';
import VisionSection from './Vision/VisionSection';
import TeamSection from './TeamSection/TeamSection';
import Testimonials from './TestimonialSection/Testimonials';
import Footer from '../../components/Footer';

function AboutPage() {
    return (
        <div className='flex flex-col min-h-screen font-poppins'>
            <div className='flex-grow'>
                <HeroSection />
            </div>
            <div className='flex-grow'>
                < ServiceSection />
            </div>
            <div className='flex-grow'>
                <MissionSection />
            </div>
            <div className='flex-grow'>
                <VisionSection />
            </div>
            <div className='flex-grow'>
                <TeamSection />
            </div>
            <div className='flex-grow'>
                <Testimonials />
            </div>
            <div className='flex-grow'>
                <Footer />
            </div>
        </div>
    )
}

export default AboutPage;
