import React from 'react';
import Button from '../../../components/Button';
import { Icon } from '@iconify-icon/react';
import AnimatedSection from '../../../components/Animator';

function AboutSection() {
    return (
        <AnimatedSection>
            <div
                className="bg-cover bg-center flex flex-col justify-end items-end p-8 md:p-16 text-white font-poppins"
                style={{ backgroundImage: `url('/assets/images/Rectangle27.png')` }}
            >
                <AnimatedSection>
                    <div className='h-100 mt-8 md:mt-16 mr-4 md:mr-14 pt-10 md:pt-20 pr-5 md:pr-10'>
                        <div className="max-w-md md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                THE BEST IN THE <span className="text-custom-blue">AUTOMOBILE</span> INDUSTRY
                            </h1>
                            <p className="mb-6">
                                At IYK Motors, we pride ourselves on being a leader in the automobile industry.
                                Our commitment to excellence, innovation, and customer satisfaction sets us apart.
                                With a diverse range of high-quality vehicles, competitive pricing,
                                and a team of experienced professionals, we ensure you drive away with confidence and satisfaction.
                            </p>
                            <Button className="bg-transparent h-12 w-40 flex justify-center items-center space-x-2 border border-white text-white hover:bg-white hover:text-black">
                                <span>Read more</span>
                                <Icon icon="ri:arrow-right-line" style={{ fontSize: '24px' }} />
                            </Button>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </AnimatedSection>
    );
}

export default AboutSection;
