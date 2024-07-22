import React from 'react';
import Button from '../../../components/Button';
import { Icon } from '@iconify-icon/react';
import AnimatedSection from '../../../components/Animator';

function AboutSection() {
    return (
        <div className="bg-cover bg-center flex flex-col justify-end items-end p-16 text-white font-poppins"
            style={{ backgroundImage: `url('/assets/images/Rectangle27.png')` }}>
            <AnimatedSection>
                <div className='h-100 mt-16 mr-14 pt-20 pr-10'>
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold mb-4">
                            THE BEST IN THE <span className="text-custom-blue">AUTOMOBILE</span> INDUSTRY
                        </h1>
                        <p className="mb-6">
                            At IYK Motors, we pride ourselves on being a leader in the automobile industry.
                            Our commitment to excellence, innovation, and customer satisfaction sets us apart.
                            With a diverse range of high-quality vehicles, competitive pricing,
                            and a team of experienced professionals, we ensure you drive away with confidence and satisfaction.
                        </p>
                        <Button className="bg-transparent h-12 w-40 flex justify-center items-center  space-x-2 border border-white text-white hover:bg-white hover:text-black">
                            <span>Read more</span>
                            <Icon icon="ri:arrow-right-line" style={{ fontSize: '24px' }} />
                        </Button>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}

export default AboutSection;
