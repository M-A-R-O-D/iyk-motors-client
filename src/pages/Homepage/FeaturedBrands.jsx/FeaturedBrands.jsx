import React from 'react'
import AnimatedSection from '../../../components/Animator';
import BrandIcon from '../../../components/BrandIcon';

const brandMap = {
    'BMW': 'assets/logos/bm-logo.png',
    'Honda': 'assets/images/Honda.png',
    'Porsche': 'assets/logos/Porsche.png',
    'Toyota': 'assets/logos/t-logo.png',
    'Benz': 'assets/logos/Benz1.png',
    'Chevrolete': 'assets/logos/chevy-logo.png'
};

function FeaturedBrands() {
    return (
        <section className='bg-[#f0efed] flex h-auto justify-center items-center md:h-100'>
            <AnimatedSection>
                <h1 className="flex justify-center items-center p-5 text-3xl font-bold mb-10 mt-10">
                    FEATURED <span className='text-custom-blue pl-5'>BRANDS</span>
                </h1>
                <div className="flex bg-gray justify-center items-center p-5 text-3xl font-bold mb-10 mt-10">
                    <div className="flex flex-wrap justify-evenly items-center gap-24">
                        {Object.entries(brandMap).map(([brandName, imageUrl]) => (
                            <BrandIcon key={brandName} imageUrl={imageUrl} brandName={brandName} />
                        ))}
                    </div>

                </div>
            </AnimatedSection>
        </section>
    )
}

export default FeaturedBrands