import React from 'react';
import Card from '../../../components/Card';
import AnimatedSection from '../../../components/Animator';

const reasons = [
    {
        icon: 'ri:shield-check-line',
        title: 'Reliable Cars',
        description: 'Our cars are thoroughly inspected to ensure reliability and safety.'
    },
    {
        icon: 'ri:customer-service-line',
        title: 'Exceptional Service',
        description: 'Our customer service team is here to help you find the perfect car.'
    },
    {
        icon: 'ri:money-dollar-circle-line',
        title: 'Competitive Pricing',
        description: 'We offer the best prices and financing options such as discounts and rental bonuses for your dream car.'
    }
];

function ServiceSection() {
    return (
        <AnimatedSection>
            <div
                className="relative font-poppins flex flex-col justify-center items-center p-4 md:p-8"
                style={{
                    // backgroundImage: 'url(assets/images/why4.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '60vh',
                    width: '100%',
                }}
            >
                {/* Dark Overlay using Tailwind */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-80"></div> */}

                {/* Content */}
                <div className="relative font-poppins z-10 mt-2 max-w-7xl mx-auto">
                    <h1 className="flex justify-center items-center p-3 text-2xl md:text-5xl font-bold mb-8 text-center">
                        Our <span className="text-custom-blue pl-2">Perks</span>
                    </h1>
                    <div className="flex font-poppins text-black flex-wrap justify-center items-center gap-4 md:gap-8 px-4 md:px-0">
                        {reasons.map((reason, index) => (
                            <Card
                                key={index}
                                icon={reason.icon}
                                title={reason.title}
                                description={reason.description}
                                className="w-full text-black sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default ServiceSection;
