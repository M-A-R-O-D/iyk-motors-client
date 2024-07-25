import React from 'react';
import Button from '../../../components/Button';
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../../components/Animator';

function AboutSection() {
    return (
        <>
            <AnimatedSection>
                <div
                    className="relative font-poppins bg-cover bg-center flex flex-col justify-end items-end p-8 md:p-16 text-white"
                    style={{
                        backgroundImage: `url('/assets/images/Rectangle27.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                        width: '100%',
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Content */}
                    <div className='relative font-poppins z-10 h-100 mt-0 md:mt-16 mr-4 md:mr-14 pt-3 md:pt-15 pr-0 md:pr-5'>
                        <div className="max-w-md md:text-left">
                            <h1 className="font-poppins text-3xl md:text-5xl font-bold mb-4">
                                THE BEST IN THE <span className="text-custom-blue">AUTOMOBILE</span> INDUSTRY
                            </h1>
                            <p className="mb-6">
                                At I-Kay Motors, we pride ourselves on being a leader in the automobile industry.
                                Our commitment to excellence, innovation, and customer satisfaction sets us apart.
                                With a diverse range of high-quality vehicles, competitive pricing,
                                and a team of experienced professionals, we ensure you drive away with confidence and satisfaction.
                            </p>
                            <Link to="/about">
                                <Button className="bg-transparent font-semibold h-12 w-40 flex justify-center items-center space-x-2 border border-white text-white hover:bg-white hover:text-black">
                                    <span>Read more</span>
                                    <Icon icon="ri:arrow-right-line" style={{ fontSize: '24px' }} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}

export default AboutSection;
