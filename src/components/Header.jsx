import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <header className="bg-white shadow py-4 fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className='logo ml-3'>
                    <span className='font-semibold text-[24px] mr-1.5'>IY-KAY</span>
                    <span className='font-semibold text-[24px] text-[#1e7ed7]'>MOTORS</span>
                </div>

                {/* Hamburger Icon */}
                <button onClick={toggleNavbar} className="mr-3 block md:hidden text-black z-50">
                    <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} style={{ fontSize: '30px' }} />
                </button>

                {/* Nav bar for larger screens */}
                <div className='navbar mr-3 hidden md:flex'>
                    <ul className='flex space-x-10'>
                        <li>
                            <Link
                                to="/"
                                className='relative font-semibold text-[22px] text-black group'
                            >
                                HOME
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cars"
                                className='relative font-semibold text-[22px] text-black group'
                            >
                                CARS
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className='relative font-semibold text-[22px] text-black group'
                            >
                                ABOUT
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className='relative font-semibold text-[22px] text-black group'
                            >
                                CONTACT
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Navbar for smaller screens */}
                {isOpen && (
                    <div className="fixed inset-0 top-[60px] bg-white shadow-lg md:hidden z-40 flex flex-col items-center justify-center">
                        <nav>
                            <ul className='flex flex-col items-center space-y-6'>
                                <li>
                                    <Link
                                        to="/"
                                        className='relative font-semibold text-[22px] text-black hover:text-custom-blue'
                                        onClick={closeNavbar}
                                    >
                                        HOME

                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/cars"
                                        className='relative font-semibold text-[22px] text-black hover:text-custom-blue'
                                        onClick={closeNavbar}
                                    >
                                        CARS
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className='relative font-semibold text-[22px] text-black hover:text-custom-blue'
                                        onClick={closeNavbar}
                                    >
                                        ABOUT
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className='relative font-semibold text-[22px] text-black hover:text-custom-blue'
                                        onClick={closeNavbar}
                                    >
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
