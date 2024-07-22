import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-transparent py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className='logo ml-0'>
                    <span className='font-semibold text-[24px] mr-1.5'>IY-KAY</span>
                    <span className='font-semibold text-[24px] text-[#1e7ed7]'>MOTORS</span>
                </div>

                {/* Nav bar */}
                <div className='navbar mr-0'>
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
                                className='relative font-semibold text-[22px]  text-black group'
                            >
                                CARS
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className='relative font-semibold text-[22px]  text-black group'
                            >
                                ABOUT
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className='relative font-semibold text-[22px]  text-black group'
                            >
                                CONTACT
                                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#1e7ed7] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
