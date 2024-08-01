import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <header className="bg-white font-poppins shadow py-4 fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className='logo ml-3'>
                    <span className='font-semibold text-[18px] mr-1.5'>IY-KAY</span>
                    <span className='font-semibold text-[18px] text-[#1e7ed7]'>MOTORS</span>
                </div>

                {/* Hamburger Icon */}
                <button onClick={toggleNavbar} className="mr-3 block md:hidden text-black z-50">
                    <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} style={{ fontSize: '30px' }} />
                </button>

                {/* Nav bar for larger screens */}
                <div className='navbar mr-3 hidden md:flex'>
                    <ul className='flex space-x-10'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `relative font-semibold text-[16px] ${isActive ? 'text-[#1e7ed7]' : 'text-black'} group`
                                }
                                end
                            >
                                HOME
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cars"
                                className={({ isActive }) =>
                                    `relative font-semibold text-[16px] ${isActive ? 'text-[#1e7ed7]' : 'text-black'} group`
                                }
                            >
                                CARS
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `relative font-semibold text-[16px] ${isActive ? 'text-[#1e7ed7]' : 'text-black'} group`
                                }
                            >
                                ABOUT US
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `relative font-semibold text-[16px] ${isActive ? 'text-[#1e7ed7]' : 'text-black'} group`
                                }
                            >
                                CONTACT US
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Navbar for smaller screens */}
                {isOpen && (
                    <div className="fixed inset-0 top-[60px] bg-white shadow-lg md:hidden z-40 flex flex-col items-center justify-center">
                        <nav>
                            <ul className='flex flex-col items-center space-y-6'>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `relative font-semibold text-[22px] ${isActive ? 'text-[#1e7ed7]' : 'text-black'}`
                                        }
                                        end
                                        onClick={closeNavbar}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/cars"
                                        className={({ isActive }) =>
                                            `relative font-semibold text-[22px] ${isActive ? 'text-[#1e7ed7]' : 'text-black'}`
                                        }
                                        onClick={closeNavbar}
                                    >
                                        Cars
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `relative font-semibold text-[22px] ${isActive ? 'text-[#1e7ed7]' : 'text-black'}`
                                        }
                                        onClick={closeNavbar}
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `relative font-semibold text-[22px] ${isActive ? 'text-[#1e7ed7]' : 'text-black'}`
                                        }
                                        onClick={closeNavbar}
                                    >
                                        Contact Us
                                    </NavLink>
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
