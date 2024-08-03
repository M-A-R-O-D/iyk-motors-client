import React, { useEffect } from 'react';
import { useScroll } from '../../context/ScrollContext.jsx';
import HeroSection from './Hero/Hero.jsx';
import FormPage from './ContactSection/Contact.jsx';
import ContactUsFooter from '../../components/ContactUsFooter.jsx';
//import ScrollToTopBtn from '../../components/ScrollToTopBtn.jsx';


function ContactPage() {
    const { setRef } = useScroll();

    useEffect(() => {
        const element = document.getElementById('contact-hero-section');
        setRef('contact-hero', element);
    }, [setRef]);

    return (
        <div className="font-poppins flex flex-col">
            <div id='contact-hero-section' className="flex-grow">
                <HeroSection />
            </div>
            <div className="flex-grow">
                <FormPage />
            </div>
            <div className="flex-grow">
                <ContactUsFooter />
            </div>
            {/* <ScrollToTopBtn onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} /> */}
        </div>
    );
}

export default ContactPage;