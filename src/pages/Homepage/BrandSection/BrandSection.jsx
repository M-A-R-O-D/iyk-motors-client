import React from 'react';
import BrandIcon from '../../../components/BrandIcon';
import Card from '../../../components/Card';
import AnimatedSection from '../../../components/Animator';

const brandMap = {
    'BMW': 'assets/images/BMW.png',
    'Honda': 'assets/images/Honda.png',
    'Porsche': 'assets/images/Porsche.jpg',
    'Toyota': 'assets/images/Toyota.jpg',
    'Mercedes-Benz': 'assets/images/Benz1.png',
    'Chevrolete': 'assets/images/Chevrolet2.png'
};

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
        description: 'We offer the best prices and financing options for your dream car.'
    }
];

function BrandSection() {
    return (
        <div className="flex flex-col justify-center items-center p-8 mb-16">
            <AnimatedSection>
                <div className="mt-6">
                    <h1 className="flex justify-center items-center p-5 text-4xl font-bold mb-8">
                        WHY <span className='text-custom-blue pl-5'>IYK-MOTORS</span>?
                    </h1>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {reasons.map((reason, index) => (
                            <Card key={index} icon={reason.icon} title={reason.title} description={reason.description} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <div>
                    <h1 className="flex justify-center items-center p-5 text-3xl font-bold mb-10 mt-10">
                        FEATURED <span className='text-custom-blue pl-5'>BRANDS</span>
                    </h1>
                    <div className="flex flex-wrap justify-evenly items-center gap-24">
                        {Object.entries(brandMap).map(([brandName, imageUrl]) => (
                            <BrandIcon key={brandName} imageUrl={imageUrl} brandName={brandName} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}

export default BrandSection;
