import React, { useState, useEffect } from 'react';
import Button from './Button'; // Adjust the path as necessary
import { Icon } from '@iconify/react';

const ScrollToTopBtn = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 250) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <Button
            onClick={onClick}
            className={`bg-custom-white border-2 rounded-1 border-custom-blue text-custom-blue fixed bottom-24 right-[-3px] transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <Icon icon="ph:caret-double-up-bold" style={{ fontSize: '24px' }} />
        </Button>
    );
};

export default ScrollToTopBtn;
