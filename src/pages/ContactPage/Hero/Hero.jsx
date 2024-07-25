import React from 'react';
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../../components/Animator';
import Button from '../../../components/Button';
import { useScroll } from '../../../context/ScrollContext';

function HeroSection() {
    const { scrollTo } = useScroll();

    return (
        <AnimatedSection>
            <div className="relative h-111 bg-cover bg-center flex flex-col md:flex-row items-center justify-center p-8 md:p-16"
                style={{
                    backgroundImage: 'url(assets/images/contact.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '80vh',
                    width: '100%',
                }}
                >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative flex flex-col justify-center text-center md:mt-16 max-w-2xl">
                    <h1 className="text-6xl mt-16 md:text-7xl font-bold text-white mb-6 leading-tight text-center">
                    GET IN TOU<span className="text-custom-blue">CH WITH US </span>
                    </h1>
                </div>
                </div>
        </AnimatedSection>
    );
}

export default HeroSection;
