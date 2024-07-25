import React from 'react';
import { Icon } from '@iconify-icon/react';
import { useScroll } from '../context/ScrollContext';
import Button from './Button';

const SimpleFooter = () => {
    const { scrollTo } = useScroll();

    const handleScrollToHero = () => {
        scrollTo('contact-hero');
    }
    return (
        <footer className="font-poppins flex flex-row justify-between h-20 p-4 items-center bg-custom-blue py-8 text-white">
            <div className="text-white-500 font-semibold">
                <p>&copy; {new Date().getFullYear()} I-KAY MOTORS. All Rights Reserved.</p>
            </div>
            <Button
                className='bg-blue border-2 border-white hover:bg-white hover:text-custom-blue rounded-1xl h-10 w-10 flex justify-center items-center '
                onClick={handleScrollToHero}
            >
                <Icon icon="ph:caret-double-up-bold" style={{ fontSize: '16px' }} />
            </Button>
        </footer>
    );
};

export default SimpleFooter;
