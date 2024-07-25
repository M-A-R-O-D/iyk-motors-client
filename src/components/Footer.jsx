import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';

const Footer = () => {
    return (
        <footer className="font-poppins bg-custom-blue py-8 text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 ml-5 gap-8">
                {/* Navigation */}
                <div className="flex flex-col pt-4 md:justify-center md:items-center md:space-y-4 space-y-2">
                    <div className="text-xl font-bold md:text-center md:pt-4 md:ml-8">Navigation</div>
                    <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-0">
                        <Link to="/" className="hover:underline text-white font-normal">HOME</Link>
                        <Link to="/cars" className="hover:underline text-white font-normal">CARS</Link>
                        <Link to="/about" className="hover:underline text-white font-normal">ABOUT</Link>
                        <Link to="/contact" className="hover:underline text-white font-normal">CONTACT</Link>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex flex-col justify-center items-start md:items-center md:space-y-4 space-y-2">
                    <div className="text-xl font-bold mb-2">Follow Us</div>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/IYKMotors" target="_blank" rel="noopener noreferrer">
                            <Icon icon="ri:facebook-fill" className="hover:text-gray-300 transition duration-300" style={{ fontSize: "40px" }} />
                        </a>
                        <a href="https://www.twitter.com/IYKMotors" target="_blank" rel="noopener noreferrer">
                            <Icon icon="ri:twitter-x-fill" className="hover:text-gray-300 transition duration-300" style={{ fontSize: "40px" }} />
                        </a>
                        <a href="https://www.instagram.com/IYKMotors" target="_blank" rel="noopener noreferrer">
                            <Icon icon="ri:instagram-fill" className="hover:text-gray-300 transition duration-300" style={{ fontSize: "40px" }} />
                        </a>
                        <a href="https://www.linkedin.com/company/IYKMotors" target="_blank" rel="noopener noreferrer">
                            <Icon icon="ri:linkedin-fill" className="hover:text-gray-300 transition duration-300" style={{ fontSize: "40px" }} />
                        </a>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col justify-start md:justify-end md:items-center space-y-2 md:space-y-4">
                    <div className="text-xl font-bold md:text-center md:mr-20">Get in touch</div>
                    <div className="flex flex-col space-y-2">
                        <p className="flex items-center">
                            <Icon icon="mdi:phone" className="mr-2" style={{ fontSize: "26px" }} />
                            Tel: +123 456 7890
                        </p>
                        <p className="flex items-center">
                            <Icon icon="mdi:email" className="mr-2" style={{ fontSize: "26px" }} />
                            Email: info@iykmotors.com
                        </p>
                        <p className="flex items-center">
                            <Icon icon="mdi:location" className="mr-2" style={{ fontSize: "26px" }} />
                            Loc: 3 Lemon St, East-Legon, Accra
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-white-500 font-semibold text-center mt-6">
                <p>&copy; {new Date().getFullYear()} IYK-MOTORS. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
